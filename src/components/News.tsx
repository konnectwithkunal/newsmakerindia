import { Button } from "@/components/ui/button";

const News = () => {
  const newsItems = [
    {
      date: "14 July 2025",
      title: "Toaster ranked India's #4 top creative agency by MMA Smarties",
      image: "https://images.ctfassets.net/8fjb1swihtib/4fL2XVZBalqRhQReEe8YlG/46d3331117e76f0fcbc04900b6ff181c/Reward_Women_in_Tech_Series_-_Featured_Image__4_.jpg?w=606"
    },
    {
      date: "30 June 2025",
      title: "Snapchat launches its first ever OOH campaign in India, with AOR Toaster",
      image: "https://images.ctfassets.net/8fjb1swihtib/6iXiQqn4Wr7n9WzO8qKlhO/d5063f7590a2b86543e75bf59df7bca0/Reward_Women_in_Tech_Series_-_Featured_Image__3_.jpg?w=606"
    },
    {
      date: "29 May 2025",
      title: "Toaster's Diwali campaign for Netflix bags a Gold at Good Ads Matter Awards",
      image: "https://images.ctfassets.net/8fjb1swihtib/6QevlskEpPounnN7k1QUhE/b2da13fdec43926daef9fe22a189d477/3.jpg?w=606"
    },
    {
      date: "28 May 2025",
      title: "SheCanCode x Joann DeLanoy - Eight top tips for improving your soft skills at work",
      image: "https://images.ctfassets.net/8fjb1swihtib/34msukS6cWeRjZCseWNdFr/95d03c99fb8a76b1d8b2e254b9116a14/Untitled_design__69_.jpg?w=606"
    }
  ];

  return (
    <section id="news" className="py-20 bg-background grid-overlay">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">News</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Stay updated with our latest insights, awards, and company developments.
            </p>
          </div>
          <div className="text-sm text-muted-foreground">1/8</div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <article key={index} className="group">
              <div className="relative overflow-hidden mb-4">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 border border-border group-hover:border-primary transition-colors duration-300"></div>
              </div>
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">{item.date}</div>
                <h3 className="text-lg font-bold leading-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
        
        <div className="flex items-center justify-center space-x-4 mb-8">
          <Button variant="outline" size="sm" className="border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full">
            Previous
          </Button>
          <Button variant="outline" size="sm" className="border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full">
            Next
          </Button>
        </div>
        
        <div className="text-left">
          <Button variant="outline" size="lg" className="border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full px-8">
            See more articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;