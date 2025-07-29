import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { fadeInUp, staggerContainer } from "../animation/variants";
import { motion } from "framer-motion";



const Blogs = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      date: "25 July 2025",
      title: "The Future of Creative Technology: How AI is Transforming Product Marketing",
      excerpt: "Exploring the intersection of artificial intelligence and creative marketing strategies in the modern digital landscape.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=606&h=400&fit=crop",
      tags: ["Technology", "AI", "Marketing"],
      readTime: "5 min read"
    },
    {
      id: 2,
      date: "22 July 2025",
      title: "Building Authentic Brand Connections in a Digital-First World",
      excerpt: "How modern brands can create meaningful relationships with their audiences through thoughtful digital experiences.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=606&h=400&fit=crop",
      tags: ["Branding", "Digital", "Strategy"],
      readTime: "7 min read"
    },
    {
      id: 3,
      date: "18 July 2025",
      title: "Design Systems That Scale: Lessons from Global Product Launches",
      excerpt: "Key insights from our experience building design systems for international product launches across multiple markets.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=606&h=400&fit=crop",
      tags: ["Design", "Systems", "Product"],
      readTime: "6 min read"
    },
    {
      id: 4,
      date: "15 July 2025",
      title: "The Psychology of Product Marketing: Understanding Consumer Behavior",
      excerpt: "Diving deep into the psychological principles that drive successful product marketing campaigns.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=606&h=400&fit=crop",
      tags: ["Psychology", "Consumer", "Research"],
      readTime: "8 min read"
    },
    {
      id: 5,
      date: "12 July 2025",
      title: "Remote Collaboration in Creative Agencies: Tools and Best Practices",
      excerpt: "How creative teams can maintain high-quality output while working across different time zones and locations.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=606&h=400&fit=crop",
      tags: ["Remote Work", "Collaboration", "Tools"],
      readTime: "4 min read"
    },
    {
      id: 6,
      date: "10 July 2025",
      title: "Sustainable Design Practices for Modern Brands",
      excerpt: "Implementing environmentally conscious design principles without compromising on creativity and impact.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=606&h=400&fit=crop",
      tags: ["Sustainability", "Design", "Environment"],
      readTime: "5 min read"
    }
  ];

  const handleBlogClick = (blogId: number) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-background grid-overlay">
          <motion.div variants={fadeInUp}
            initial="hidden"
            animate="visible" className="container mx-auto px-6">
            <div className="max-w-4xl">
              <motion.h1 variants={fadeInUp}
                initial="hidden"
                animate="visible" className="text-6xl md:text-8xl font-bold mb-8 text-foreground">
                Blog
              </motion.h1>
              <motion.p variants={fadeInUp}
                initial="hidden"
                animate="visible" className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Insights, strategies, and perspectives from our team on the latest trends in creative marketing and product design.
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* Blog Grid */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="group cursor-pointer"
                  onClick={() => handleBlogClick(post.id)}
                >
                  <div className="relative overflow-hidden mb-4 aspect-[4/3]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 border border-border group-hover:border-primary transition-colors duration-300"></div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blogs;