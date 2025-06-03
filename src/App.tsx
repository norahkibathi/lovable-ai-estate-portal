
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import KeyPersonnel from "./pages/KeyPersonnel";
import Services from "./pages/Services";
import ServicesValuation from "./pages/ServicesValuation";
import ServicesManagement from "./pages/ServicesManagement";
import ServicesSales from "./pages/ServicesSales";
import ServicesConstruction from "./pages/ServicesConstruction";
import ServicesConsultancy from "./pages/ServicesConsultancy";
import Properties from "./pages/Properties";
import PropertiesShowcase from "./pages/PropertiesShowcase";
import PropertiesCurrent from "./pages/PropertiesCurrent";
import PropertiesManaged from "./pages/PropertiesManaged";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/personnel" element={<KeyPersonnel />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/valuation" element={<ServicesValuation />} />
              <Route path="/services/management" element={<ServicesManagement />} />
              <Route path="/services/sales" element={<ServicesSales />} />
              <Route path="/services/construction" element={<ServicesConstruction />} />
              <Route path="/services/consultancy" element={<ServicesConsultancy />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/properties/showcase" element={<PropertiesShowcase />} />
              <Route path="/properties/current" element={<PropertiesCurrent />} />
              <Route path="/properties/managed" element={<PropertiesManaged />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
