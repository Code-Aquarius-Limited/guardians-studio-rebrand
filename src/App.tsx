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
import Contact from "./pages/Contact.tsx";
import {
  PersonalTraining,
  Pilates,
  Yoga,
  Recovery,
  Physiotherapy,
  PrePostNatal,
} from "./pages/services/index.tsx";
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
          <Route path="/services/pilates" element={<Pilates />} />
          <Route path="/services/yoga" element={<Yoga />} />
          <Route path="/services/recovery" element={<Recovery />} />
          <Route path="/services/physiotherapy" element={<Physiotherapy />} />
          <Route path="/services/pre-post-natal" element={<PrePostNatal />} />
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
