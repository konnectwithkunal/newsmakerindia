import { Card, CardContent } from "@/components/ui/card";

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

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from our valued clients about their experience working with Newsmaker Media and Communications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-1 mb-6">
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;