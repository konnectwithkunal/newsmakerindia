import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WhyChoose = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>();

  const reasons = [
    {
      number: "01",
      title: "Creative Excellence",
      description: "Award-winning creative solutions that push boundaries and deliver exceptional results for your brand."
    },
    {
      number: "02", 
      title: "Strategic Thinking",
      description: "Data-driven strategies combined with creative intuition to maximize your brand's impact and reach."
    },
    {
      number: "03",
      title: "Proven Results",
      description: "Track record of success with Fortune 500 companies and emerging brands across all industries."
    },
    {
      number: "04",
      title: "Full-Service Agency",
      description: "From strategy to execution, we handle every aspect of your brand's journey with seamless integration."
    }
  ];

  return (
    <section className="py-20 bg-background grid-overlay">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[20px]'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose Us?
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              At Newsmaker Media and Communications, we don't just chase headlines—we build them.
            </p>
            <p>
              With an extensive network that spans leading consumer, lifestyle, national, and business media—including TV, radio, podcasts, and print—we specialize in delivering the kind of visibility that shapes perception and builds trust. From a prime-time TV appearance to a front-page feature in a national daily, our job is to get your story in front of the right people, at the right time, in the right way.
            </p>
            <p>
              Every campaign we run is crafted with intention. We collaborate closely with you to understand your brand's voice, its purpose, and its goals—then translate that into editorial opportunities that resonate. Because when the story is authentic, the coverage follows.
            </p>
          </div>
        </div>
        
        <div 
          ref={gridRef}
          className={`grid md:grid-cols-2 gap-12 max-w-4xl mx-auto transition-all duration-700 delay-300 ${
            gridVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[20px]'
          }`}
        >
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="space-y-4 group p-6 rounded-lg hover:bg-background/50 hover:shadow-xl transition-all duration-500 cursor-pointer hover:scale-105 hover-glow animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary text-6xl font-bold opacity-50 group-hover:opacity-100 group-hover:scale-110 group-hover:animate-pulse-glow transition-all duration-300">
                {reason.number}
              </div>
              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;