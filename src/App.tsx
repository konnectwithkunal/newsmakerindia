// src/App.tsx

import { Toaster } from "@/components/ui/toaster"; // Keep this one
// import { Toaster as Sonner } from "@/components/ui/sonner"; // <-- REMOVE THIS LINE
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import News from "./pages/News";
import People from "./pages/People";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./pages/Services";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster /> {/* This is now the only toaster */}
      {/* <Sonner /> REMOVE THIS LINE AS WELL */}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/people" element={<People />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;