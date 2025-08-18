import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Working with Newsmaker Media and Communications over the past one and a half years has been an incredibly positive experience. They truly understand the essence of the Marching Sheep brand and have consistently ensured that our voice and message are communicated with clarity and integrity.",
      author: "Sonica Aron",
      position: "Founder & Managing Partner, Marching Sheep",
      image:
        "/lovable-uploads/8627fc4e-bc55-434f-9cb2-1d389766d227.png",
    },
    {
      quote:
        "Its been nearly four years I have been associated with Newsmaker Media and Communication. The journey has been tumultuous and so rewarding. Ankit and his team are my go-to guys when I have any issues regarding media whether it is print, digital or screen.",
      author: "Dr. Ridhima Khamesra",
      position: "Dietician",
      image:
        "/lovable-uploads/10ca7487-f6ca-439e-8cbb-92550a9cd052.png",
    },
    {
      quote:
        "Newsmaker Media and Communications has been a valuable partner in amplifying IATO's voice across the industry. Their professionalism, creativity, and deep understanding of the tourism sector have consistently delivered impactful results. We truly appreciate their dedication and look forward to continued collaboration",
      author: "Ravi Gosain",
      position: "President, IATO",
      image:
        "/lovable-uploads/22ae4ec2-13b6-4e38-8321-7adb9d755bcf.png",
    },
  ];

  const [api, setApi] = useState<CarouselApi | null>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => {
      if (!pausedRef.current) api.scrollNext();
    }, 6000);
    return () => clearInterval(id);
  }, [api]);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-black mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from our valued clients about their experience working
            with Newsmaker Media and Communications
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
          className="w-full max-w-6xl mx-auto"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="basis-full">
                <div className="grid md:grid-cols-5 rounded-2xl overflow-hidden shadow-md border border-gray-200">
                  {/* Left Side - Person Image Only (40%) */}
                  <div
                    className="md:col-span-2 relative h-80 md:h-auto"
                    style={{
                      backgroundImage: `url(${t.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Subtle dark overlay for contrast */}
                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  {/* Right Side - Testimonial (60%) */}
                  <div className="md:col-span-3 flex flex-col justify-center p-10 md:p-16 bg-white text-gray-800">
                    <div className="text-6xl md:text-7xl text-primary/30 font-black mb-4 leading-none">
                      "
                    </div>
                    <p className="text-xl md:text-2xl leading-relaxed italic">
                      {t.quote}
                    </p>
                    <div className="mt-8">
                      <h4 className="font-bold text-2xl text-black">
                        {t.author}
                      </h4>
                      <p className="text-primary font-medium text-lg">
                        {t.position}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation */}
          <CarouselPrevious className="hidden md:flex -left-20" />
          <CarouselNext className="hidden md:flex -right-20" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
