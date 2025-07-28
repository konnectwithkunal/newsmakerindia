import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const Services = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  
  const services = [
    {
      title: "Media Relations",
      description: "In today's fast-paced media landscape, securing coverage for your brand can be a game-changer. At Newsmaker Media Group our expert media relations services are designed to amplify your brand's voice and elevate its visibility. We take a strategic and personalized approach to media relations, crafting compelling stories that resonate with your target audience. Our team of experienced professionals builds and maintains relationships with top journalists, editors, and media outlets, ensuring that your brand gets the coverage it deserves."
    },
    {
      title: "Event Management",
      description: "Event management services at Newsmaker Media Group, we specialize in creating unforgettable events that exceed your expectations. Our expert event management services cover every aspect of event planning, from concept to execution. Whether you're planning a corporate event, wedding, or social gathering, our team is dedicated to bringing your vision to life. Our team of experienced event professionals is dedicated to delivering exceptional events that exceed your expectations. With a passion for creativity and attention to detail, we're committed to making your event unforgettable."
    },
    {
      title: "Crisis Management Services",
      description: "In today's fast-paced and unpredictable business environment, crises can strike at any moment, threatening your organization's reputation and operations. At Newsmaker Media and Communications, we understand the importance of effective crisis management in protecting your organization's image and credibility. Our expert crisis management services are designed to help you prepare for, respond to, and recover from crises that challenge your organization's reputation."
    },
    {
      title: "Video Production Services",
      description: "At Newsmaker Media Group, we specialize in creating high-quality videos that engage, inform, and inspire audiences. Our expert video production services cover every aspect of video production, from concept development to post-production. Whether you're looking to showcase your brand, products, or services, or tell a compelling story, we're here to help."
    },
    {
      title: "Podcast and Broadcast Services",
      description: "At Newsmaker Media Group, we specialize in creating high-quality podcasts and broadcasts that engage and inform audiences. Our team of experienced professionals will handle every aspect of production, from recording to distribution. Whether you're looking to reach a wider audience, build your brand, or share your message, we're here to help."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background grid-overlay">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`max-w-4xl mb-16 transition-all duration-700 ${
            titleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[20px]'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">Services</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We deliver Product Marketing, Branding and Interactive Experiences, driven by a deep understanding of the fast-changing marketing landscape and emerging technologies.
          </p>
        </div>
        
        <div 
          ref={gridRef}
          className={`grid md:grid-cols-3 gap-12 mb-16 transition-all duration-700 delay-200 ${
            gridVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[20px]'
          }`}
        >
          {services.map((service, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <Dialog>
                  <DialogTrigger asChild>
                    <div 
                      className="group cursor-pointer p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 bg-background/50 hover-glow animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Hover or click to learn more about this service
                      </p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogTitle className="text-2xl font-bold text-foreground mb-4">
                      {service.title}
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground leading-relaxed text-base">
                      {service.description}
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              </HoverCardTrigger>
              <HoverCardContent className="w-96 p-6 bg-background border border-border shadow-lg">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-foreground">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
        
        <div className="text-left">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full px-8 hover-glow animate-pulse-glow"
          >
            See more services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;