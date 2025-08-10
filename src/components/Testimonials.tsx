import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working with Newsmaker Media and Communications over the past one and a half years has been an incredibly positive experience. They truly understand the essence of the Marching Sheep brand and have consistently ensured that our voice and message are communicated with clarity and integrity. Their professionalism, responsiveness, and strategic approach to PR have made them a valued partner. Grateful for the dedication and great work they bring to the table every single time.",
      author: "Sonica Aron",
      position: "Founder & Managing Partner, Marching Sheep",
      image: "/lovable-uploads/8627fc4e-bc55-434f-9cb2-1d389766d227.png"
    },
    {
      quote: "Its been nearly four years I have been associated with Newsmaker Media and Communication. The journey has been tumultous and so rewarding. Ankit and his team are my goto guys when I have any issues regarding media whether it is print, digital or screen. Their colossal role in putting me on National page is non refutable. I am so glad I connected with them through sheer chance but now they are like family. Thank you for all your support.",
      author: "Valued Client",
      position: "4-Year Partnership",
      image: "/lovable-uploads/10ca7487-f6ca-439e-8cbb-92550a9cd052.png"
    },
    {
      quote: "Newsmaker Media and Communications has been a valuable partner in amplifying IATO's voice across the industry. Their professionalism, creativity, and deep understanding of the tourism sector have consistently delivered impactful results. We truly appreciate their dedication and look forward to continued collaboration",
      author: "IATO Representative",
      position: "Tourism Industry Partner",
      image: "/lovable-uploads/22ae4ec2-13b6-4e38-8321-7adb9d755bcf.png"
    }
  ];

  const [api, setApi] = useState<CarouselApi | null>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => {
      if (!pausedRef.current) api.scrollNext();
    }, 4000);
    return () => clearInterval(id);
  }, [api]);

  const handleMouseEnter = () => {
    pausedRef.current = true;
  };
  const handleMouseLeave = () => {
    pausedRef.current = false;
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Hear from our valued clients about their experience working with Newsmaker Media and Communications
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="basis-full">
                <Card className="bg-transparent border-0 shadow-none h-full">
                  <CardContent className="p-0 md:p-10 lg:p-12 flex flex-col h-full">
                    <div className="flex-1 mb-8">
                      <div className="text-7xl md:text-8xl text-foreground/20 font-black mb-6">"</div>
                      <p className="text-2xl md:text-3xl leading-relaxed text-foreground">
                        {testimonial.quote}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-4 pt-6 mt-8 border-t border-border/30">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-muted ring-2 ring-primary/20 grayscale hover:grayscale-0 transition">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-base md:text-lg">
                          {testimonial.author}
                        </h4>
                        <p className="text-muted-foreground">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-20" />
          <CarouselNext className="hidden md:flex -right-20" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;