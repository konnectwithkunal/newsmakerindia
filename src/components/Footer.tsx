import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowCookieBanner(false);
  };

  const handleRejectCookies = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowCookieBanner(false);
  };
  return (
    <footer className="bg-background grid-overlay">
      {/* Cookie consent banner */}
      {showCookieBanner && (
        <div className="bg-primary text-white py-4">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm mb-4 md:mb-0">
              NewsMaker Media serves cookies to analyse traffic to this site. Information about your use of our site is shared for that purpose.{" "}
              <a href="#" className="underline hover:no-underline">
                See details.
              </a>
            </p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRejectCookies}
                className="text-white hover:bg-white/20 rounded-full"
              >
                No thanks
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={handleAcceptCookies}
                className="bg-white text-primary hover:bg-white/90 rounded-full"
              >
                OK, got it
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Main footer content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <img
              src="/img/colorwhite.png"
              alt="Newsmakermedia Logo"
              className="h-12 mb-6"
            />
            <p className="text-muted-foreground mb-8 max-w-md text-lg leading-relaxed">
              Newsmaker Media and Communications is a full-service communications consultancy built for the evolving media landscape. Founded with a vision to bring authenticity and agility into the PR and marketing ecosystem, we help brands tell stories that resonate, engage, and influence.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/company/96441032/admin/dashboard/" className="text-muted-foreground hover:text-primary transition-colors text-lg">
                LinkedIn
              </a>

              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-lg">
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-foreground text-lg">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Product Marketing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Branding & Positioning</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Interactive & Experiential</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-foreground text-lg">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">People</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground">
            Website Designed and Built by{" "}
            <a
              href="https://webalchemy.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              WebAlchemy
            </a>
          </p>

          <p className="text-muted-foreground">
            © 2025 NewsMakerIndia. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;