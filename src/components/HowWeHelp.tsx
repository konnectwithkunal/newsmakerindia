const HowWeHelp = () => {
  const benefits = [
    {
      title: "Increase Brand Awareness",
      description: "Strategic campaigns that amplify your brand's visibility and reach across all relevant channels.",
      icon: "📈"
    },
    {
      title: "Drive Customer Engagement",
      description: "Create meaningful connections with your audience through compelling storytelling and interactive experiences.",
      icon: "🎯"
    },
    {
      title: "Boost Sales & Revenue",
      description: "Convert prospects into customers with persuasive messaging and optimized conversion funnels.",
      icon: "💰"
    },
    {
      title: "Build Brand Loyalty",
      description: "Foster long-term relationships with customers through consistent, valuable brand experiences.",
      icon: "❤️"
    },
    {
      title: "Market Differentiation",
      description: "Stand out from competitors with unique positioning and distinctive brand identity.",
      icon: "⭐"
    },
    {
      title: "Accelerate Growth",
      description: "Scale your business with strategies designed to support sustainable, long-term growth.",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-20 bg-background grid-overlay">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How We Help Your Business
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              At Newsmaker Media and Communications, we don't just follow trends — we help set them.
            </p>
            <p>
              As a young and dynamic agency, we bring fresh thinking, bold ideas, and a deep understanding of today's evolving media landscape. Our strength lies in amplifying your brand's message — ensuring it reaches the right people, in the right places, with the right impact.
            </p>
            <p>
              We blend creativity with strategy, marrying traditional PR with the digital-first world. Whether it's securing editorial space in top-tier publications, navigating the shift toward digital journalism, or leveraging the power of influencer collaborations, we know how to make your message matter.
            </p>
            <p>
              What sets us apart isn't just our media relationships — it's our ability to keep your brand relevant, authentic, and consistently visible in a rapidly changing environment.
            </p>
            <p className="text-primary font-medium">
              Let's craft a PR strategy that grows with your business — and always stays a step ahead.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-8 border border-border rounded-lg hover:border-primary transition-colors duration-300 group">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;