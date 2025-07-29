import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock blog data - in a real app, you'd fetch this based on the ID
  const blogPosts = {
    "1": {
      date: "25 July 2025",
      title: "The Future of Creative Technology: How AI is Transforming Product Marketing",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop",
      tags: ["Technology", "AI", "Marketing"],
      readTime: "5 min read",
      author: "Sarah Johnson",
      content: `
        <p>The landscape of product marketing is undergoing a revolutionary transformation, driven by the rapid advancement of artificial intelligence and machine learning technologies. As creative agencies and marketing teams worldwide grapple with these changes, we're witnessing an unprecedented shift in how brands connect with their audiences.</p>

        <h2>The AI Revolution in Creative Marketing</h2>
        <p>Artificial intelligence is no longer a futuristic concept—it's here, and it's reshaping every aspect of creative marketing. From personalized content generation to predictive analytics that inform strategic decisions, AI is enabling marketers to create more targeted, effective, and engaging campaigns than ever before.</p>

        <p>At Toaster, we've been at the forefront of integrating AI technologies into our creative processes. We've seen firsthand how these tools can enhance human creativity rather than replace it, leading to more innovative solutions for our clients' most complex marketing challenges.</p>

        <h2>Practical Applications in Product Marketing</h2>
        <p>The practical applications of AI in product marketing are vast and varied. Here are some key areas where we're seeing significant impact:</p>

        <ul>
          <li><strong>Content Personalization:</strong> AI algorithms can analyze user behavior and preferences to deliver highly personalized content experiences.</li>
          <li><strong>Predictive Analytics:</strong> Machine learning models help predict consumer trends and behaviors, enabling proactive marketing strategies.</li>
          <li><strong>Creative Optimization:</strong> AI tools can test and optimize creative elements in real-time, improving campaign performance.</li>
          <li><strong>Voice and Conversational Marketing:</strong> Natural language processing enables more sophisticated chatbots and voice interfaces.</li>
        </ul>

        <h2>The Human Element Remains Crucial</h2>
        <p>While AI brings tremendous capabilities to the marketing toolkit, the human element remains irreplaceable. Creativity, empathy, and strategic thinking are uniquely human traits that no algorithm can replicate. The most successful marketing campaigns will continue to be those that combine AI's analytical power with human insight and creativity.</p>

        <p>As we look toward the future, the brands that will thrive are those that embrace AI as a powerful ally in their creative arsenal, while never losing sight of the human connections that drive meaningful engagement.</p>

        <h2>Looking Ahead</h2>
        <p>The future of creative technology in product marketing is bright and full of possibilities. As AI continues to evolve, we can expect even more sophisticated tools that will enable marketers to create increasingly personalized, engaging, and effective campaigns.</p>

        <p>The key is to remain adaptable, curious, and always focused on the ultimate goal: creating authentic connections between products and people in an increasingly digital world.</p>
      `
    },
    "2": {
      date: "22 July 2025",
      title: "Building Authentic Brand Connections in a Digital-First World",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&h=600&fit=crop",
      tags: ["Branding", "Digital", "Strategy"],
      readTime: "7 min read",
      author: "Marcus Rodriguez",
      content: `
        <p>In today's hyper-connected digital landscape, building authentic brand connections has become both more challenging and more critical than ever before. As consumers are bombarded with countless messages across multiple platforms, brands must find new ways to cut through the noise and create meaningful relationships with their audiences.</p>

        <h2>The Challenge of Digital Authenticity</h2>
        <p>Digital platforms offer unprecedented opportunities for brands to connect with their audiences, but they also present unique challenges. The speed and scale of digital communication can sometimes feel impersonal, making it difficult for brands to convey genuine authenticity.</p>

        <p>However, the brands that succeed in this environment are those that understand how to leverage digital tools while maintaining their human core. They recognize that technology should amplify their authentic voice, not replace it.</p>

        <h2>Strategies for Authentic Digital Engagement</h2>
        <p>Creating authentic brand connections in a digital-first world requires a thoughtful, strategic approach:</p>

        <ul>
          <li><strong>Consistent Brand Voice:</strong> Develop a clear, authentic brand voice that remains consistent across all digital touchpoints.</li>
          <li><strong>Transparent Communication:</strong> Be open and honest in your communications, acknowledging both successes and challenges.</li>
          <li><strong>Community Building:</strong> Focus on building genuine communities around shared values and interests.</li>
          <li><strong>Responsive Engagement:</strong> Actively listen to your audience and respond thoughtfully to their feedback and concerns.</li>
        </ul>

        <p>The most successful brands are those that remember that behind every click, view, and interaction is a real person with real needs, emotions, and aspirations.</p>
      `
    }
    // Add more blog posts as needed
  };

  const currentPost = blogPosts[id as keyof typeof blogPosts];

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Blog Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/blogs')} className="bg-primary hover:bg-primary/90">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blogs
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-background">
          <div className="container mx-auto px-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/blogs')}
              className="mb-8 text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blogs
            </Button>
            
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-2 mb-6">
                {currentPost.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                {currentPost.title}
              </h1>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{currentPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{currentPost.readTime}</span>
                </div>
                <span>by {currentPost.author}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <div className="relative overflow-hidden aspect-[2/1] mb-12">
                <img 
                  src={currentPost.image} 
                  alt={currentPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border border-border"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div 
                className="prose prose-lg max-w-none text-foreground [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 [&>p]:mb-4 [&>p]:leading-relaxed [&>ul]:mb-4 [&>li]:mb-2"
                dangerouslySetInnerHTML={{ __html: currentPost.content }}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;