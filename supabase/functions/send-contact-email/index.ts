import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

interface ContactPayload {
  name?: string
  email?: string
  interest?: string
  message?: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured')
    }

    const body = (await req.json()) as ContactPayload
    const name = (body.name ?? '').trim()
    const email = (body.email ?? '').trim()
    const interest = (body.interest ?? '').trim()
    const message = (body.message ?? '').trim()

    if (!name || name.length > 100) {
      return new Response(JSON.stringify({ error: 'A valid name is required.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }
    if (!email || !isValidEmail(email) || email.length > 255) {
      return new Response(JSON.stringify({ error: 'A valid email is required.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }
    if (message.length > 2000) {
      return new Response(JSON.stringify({ error: 'Message is too long.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const esc = (s: string) =>
      s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

    const html = `
      <h2>New enquiry from Guardians Studio website</h2>
      <p><strong>Name:</strong> ${esc(name)}</p>
      <p><strong>Email:</strong> ${esc(email)}</p>
      ${interest ? `<p><strong>Interested in:</strong> ${esc(interest)}</p>` : ''}
      ${message ? `<p><strong>Message:</strong></p><p>${esc(message).replace(/\n/g, '<br>')}</p>` : ''}
    `

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Guardians Studio <onboarding@resend.dev>',
        to: ['hello@guardiansstudio.co.uk'],
        reply_to: email,
        subject: `New enquiry from ${name}`,
        html,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Resend error:', response.status, data)
      return new Response(JSON.stringify({ error: 'Failed to send email.', details: data }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    return new Response(JSON.stringify({ success: true, id: data.id }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('send-contact-email error:', err)
    return new Response(JSON.stringify({ error: 'Unexpected error.' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})