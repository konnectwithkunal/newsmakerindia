import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer } from "../animation/variants";
import { motion } from "framer-motion";



const People = () => {
  const leadership = [
    {
      name: "Tom Dunn",
      position: "Founder, CEO",
      location: "GLOBAL",
      image: "https://images.ctfassets.net/8fjb1swihtib/aeeSXgl5w8uR2lr1fbgjv/a5fc08d3dd517ea99f7e19ab59458cee/TD.jpg?w=360",
      hoverImages: [
        "https://images.ctfassets.net/8fjb1swihtib/5LjrD8BtWL4pabLvwS40Yx/4b9961edd90ab155af98312040be745e/TD1_.jpg?w=360",
        "https://images.ctfassets.net/8fjb1swihtib/270LWohJ5MjtLrM2iRUGXf/e4159e301069e9625a3c013fa48102cb/TD2_.jpg?w=360"
      ]
    },
    {
      name: "Joann DeLanoy",
      position: "Managing Director",
      location: "EMEA",
      image: "https://images.ctfassets.net/8fjb1swihtib/5BgZne3x0JfBOvcJD8rqqr/cf05cedaef6245812366e306df0cb831/6.png?w=360",
      hoverImages: [
        "https://images.ctfassets.net/8fjb1swihtib/jhCKSITh6dgNBKuo4KpOP/5adb8bd1095b747829f17ddfc4fe51b1/79.jpg?w=360",
        "https://images.ctfassets.net/8fjb1swihtib/3axOh6QJYnAzcbIcGdWCQf/c2cca152d392a69c9c85b62698efb8a7/80.jpg?w=360"
      ]
    },
    {
      name: "Susannah Bard",
      position: "Managing Director",
      location: "US",
      image: "https://images.ctfassets.net/8fjb1swihtib/3ZP61BgM7wV2IKzkaBfMEl/f264b4c126de78dab96280eda72a45ad/3.png?w=360",
      hoverImages: [
        "https://images.ctfassets.net/8fjb1swihtib/1GUbZLeaJqpXTQbZjVtJmE/b7d8d2e444b18c50a64145bd4070701f/57.jpg?w=360",
        "https://images.ctfassets.net/8fjb1swihtib/61xzQpeoGR21UGnP0vN3gC/e46cb329cddff1dd250a2ad8979a7b5f/58.jpg?w=360"
      ]
    },
    {
      name: "Bhawika Chhabra",
      position: "Managing Director",
      location: "APAC",
      image: "https://images.ctfassets.net/8fjb1swihtib/1fhMCZkZLI2ExT0lFRwa25/7e2f8cbcd8b79f0a318ff0ddcde23cab/5.png?w=360",
      hoverImages: []
    }
  ];

  const teamMembers = [
    {
      name: "Alex Chen",
      position: "Creative Director",
      location: "LONDON",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=360&h=400&fit=crop&crop=face"
    },
    {
      name: "Sarah Johnson",
      position: "Strategy Director",
      location: "NEW YORK",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=360&h=400&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      position: "Senior Designer",
      location: "LOS ANGELES",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=360&h=400&fit=crop&crop=face"
    },
    {
      name: "Emma Thompson",
      position: "Account Manager",
      location: "SYDNEY",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=360&h=400&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      position: "Developer",
      location: "SINGAPORE",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=360&h=400&fit=crop&crop=face"
    },
    {
      name: "Lisa Wang",
      position: "Brand Strategist",
      location: "HONG KONG",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=360&h=400&fit=crop&crop=face"
    }
  ];

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
                People
              </motion.h1>
              <motion.p variants={fadeInUp}
                initial="hidden"
                animate="visible" className="text-xl md:text-2xl text-white max-w-2xl leading-relaxed">
                Our teams are made up of industry leading talent with diverse backgrounds, servicing clients in key markets around the world.
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* Leadership Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-foreground">Leadership</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((person, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    {person.hoverImages.length > 0 && (
                      <img
                        src={person.hoverImages[0]}
                        alt={`${person.name} hover`}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />
                    )}
                    <div className="absolute inset-0 border border-border group-hover:border-primary transition-colors duration-300"></div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {person.name}
                    </h3>
                    <p className="text-muted-foreground">{person.position}</p>
                    <Badge variant="outline" className="text-xs">
                      {person.location}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-foreground">Our Team</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((person, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 border border-border group-hover:border-primary transition-colors duration-300"></div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {person.name}
                    </h3>
                    <p className="text-muted-foreground">{person.position}</p>
                    <Badge variant="outline" className="text-xs">
                      {person.location}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default People;