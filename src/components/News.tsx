import { Button } from "@/components/ui/button";
import newsItems from "@/data/newsItems"; // new line
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


const News = () => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(newsItems.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const visibleItems = newsItems.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };


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
          <div className="text-sm text-muted-foreground">
            {currentPage + 1}/{totalPages}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            {visibleItems.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <article>
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
                    <h3 className="text-xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center space-x-4 mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrev}
            disabled={currentPage === 0}
            className="border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            className="border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full"
          >
            Next
          </Button>
        </div>

        <div className="text-left">
          <Link to="/news">
            <Button
              variant="outline"
              size="lg"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full px-8 hover-glow animate-pulse-glow"
            >
              See more articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;