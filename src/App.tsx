import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import Studio from "./pages/Studio.tsx";
import Timetable from "./pages/Timetable.tsx";
import Pricing from "./pages/Pricing.tsx";
import Contact from "./pages/Contact.tsx";
import {
  PersonalTraining,
  Pilates11,
  ReformerPilates,
  MatPilates,
  PrePostNatalPilates,
  Yoga,
  Massage,
  Physiotherapy,
  RedLightSauna,
  ColdPlunge,
} from "./pages/services/index.tsx";
import Team from "./pages/Team.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/personal-training" element={<PersonalTraining />} />
          <Route path="/services/pilates-1-1" element={<Pilates11 />} />
          <Route path="/services/reformer-pilates" element={<ReformerPilates />} />
          <Route path="/services/mat-pilates" element={<MatPilates />} />
          <Route path="/services/pre-post-natal-pilates" element={<PrePostNatalPilates />} />
          <Route path="/services/yoga" element={<Yoga />} />
          <Route path="/services/massage" element={<Massage />} />
          <Route path="/services/physiotherapy" element={<Physiotherapy />} />
          <Route path="/services/red-light-sauna" element={<RedLightSauna />} />
          <Route path="/services/cold-plunge" element={<ColdPlunge />} />
          <Route path="/team" element={<Team />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
