import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import NotFound from "./pages/NotFound";
import TestCard from "./components/TestCard.jsx";
import Contacts from "./pages/Contacts.js";
import PrivacyPage from "./pages/PrivacyPage.js";
import TermsPage from "./pages/TermsPage.js";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="privacy-policy" element={<PrivacyPage />} />
          <Route path="terms-and-conditions" element={<TermsPage />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
