import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import servicesBg from "@/assets/services-bg.jpg";
import { fadeInUp, staggerContainer } from "../animation/variants";
import { motion } from "framer-motion";


const Services = () => {
  const [searchParams] = useSearchParams();
  const selectedServiceParam = searchParams.get('service') || 'media-relations';
  const [openServices, setOpenServices] = useState<{ [key: number]: boolean }>(() => {
    const serviceMap: { [key: string]: number } = {
      'media-relations': 0,
      'event-management': 1,
      'crisis-management': 2,
      'content-creation': 3
    };
    const initialService = serviceMap[selectedServiceParam] || 0;
    return { [initialService]: true };
  });

  const toggleService = (index: number) => {
    setOpenServices(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const services = [
    {
      title: "Media Relations",
      slug: "media-relations",
      description: "In today's fast-paced media landscape, securing coverage for your brand can be a game-changer. At Newsmaker Media Group our expert media relations services are designed to amplify your brand's voice and elevate its visibility.",
      subServices: [
        {
          title: "Media Outreach",
          description: "Building relationships with media outlets and pitching stories."
        },
        {
          title: "Press Release Distribution",
          description: "Distributing press releases to targeted media outlets."
        },
        {
          title: "Story Pitching",
          description: "Pitching stories and ideas to media outlets."
        },
        {
          title: "Media Training",
          description: "Providing media training for clients."
        }
      ]
    },
    {
      title: "Event Management",
      slug: "event-management",
      description: "Event management services at Newsmaker Media Group, we specialize in creating unforgettable events that exceed your expectations. Our expert event management services cover every aspect of event planning, from concept to execution.",
      subServices: [
        {
          title: "Event Conceptualization",
          description: "Developing event concepts and themes."
        },
        {
          title: "Event Marketing",
          description: "Promoting events through various marketing channels."
        },
        {
          title: "Venue Management",
          description: "Selecting and managing event venues."
        },
        {
          title: "Logistics Management",
          description: "Managing event logistics, including catering, audio-visual, and more."
        }
      ]
    },
    {
      title: "Crisis Management",
      slug: "crisis-management",
      description: "In today's fast-paced and unpredictable business environment, crises can strike at any moment, threatening your organization's reputation and operations. At Newsmaker Media and Communications, we understand the importance of effective crisis management.",
      subServices: [
        {
          title: "Online Reputation Management",
          description: "Managing online reputation during crises, including search engine optimization and content creation."
        },
        {
          title: "Crisis Communications Planning",
          description: "Developing crisis communications plans and strategies."
        },
        {
          title: "Social Media Crisis Management",
          description: "Managing social media during crises, including monitoring, response, and mitigation."
        }
      ]
    },
    {
      title: "Content Creation",
      slug: "content-creation",
      description: "At Newsmaker Media Group, we specialize in creating high-quality content that engages, informs, and inspires audiences. Our expert content creation services cover every aspect of content development, from strategy to execution.",
      subServices: [
        {
          title: "Article Writing",
          description: "Writing high-quality articles for websites, blogs, and more."
        },
        {
          title: "Blog Writing",
          description: "Creating engaging blog content for various industries."
        },
        {
          title: "Content Strategy",
          description: "Developing content strategies for businesses."
        },
        {
          title: "SEO Content",
          description: "Creating SEO-optimized content for websites."
        },
        {
          title: "Content Marketing",
          description: "Developing content marketing strategies for businesses."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#040214] grid-overlay">
          <motion.div variants={fadeInUp}
            initial="hidden"
            animate="visible" className="container mx-auto px-6">
            <div className="max-w-4xl">
              <motion.h1 variants={fadeInUp}
                initial="hidden"
                animate="visible" className="text-6xl md:text-8xl font-bold mb-8 text-foreground">
                Services
              </motion.h1>
              <motion.p variants={fadeInUp}
                initial="hidden"
                animate="visible" className="text-xl md:text-2xl text-white max-w-2xl leading-relaxed">
                Our services are built on a deep understanding of Media Relations, Event Management, and the power of effective communication strategies.
              </motion.p>
            </div>
          </motion.div>
        </section>

      {/* Service Types Section */}
      <section className="py-20" style={{backgroundColor: '#040214'}}>
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Service types</h2>
            <div className="border-t-2 border-white"></div>
          </div>
          
          <div className="space-y-0">
            {services.map((service, index) => {
              const isOpen = openServices[index];
              return (
                <Collapsible key={index} open={isOpen} onOpenChange={() => toggleService(index)}>
                  <div className="border-b-2 border-white">
                    <CollapsibleTrigger className="group cursor-pointer p-6 transition-all duration-300 w-full text-left hover:translate-x-2">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-2xl md:text-3xl font-bold transition-all duration-300 ${
                          isOpen ? 'text-primary translate-x-2' : 'text-foreground group-hover:text-primary group-hover:translate-x-2'
                        }`}>
                          {service.title}
                        </h3>
                        <div className={`text-3xl font-light text-white transition-all duration-300 transform ${
                          isOpen ? 'rotate-45' : 'rotate-0'
                        }`}>
                          +
                        </div>
                      </div>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <div className="space-y-8 px-6 pb-8">
                        <p className="text-xl text-white leading-relaxed max-w-4xl">
                          {service.description}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          {service.subServices.map((subService, subIndex) => (
                            <div key={subIndex} className="border-2 border-white p-8 bg-[#040214] hover:border-primary/30 transition-all duration-300 group/sub relative overflow-hidden">
                              {/* Background image that appears on hover */}
                              <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover/sub:opacity-30 transition-opacity duration-500" 
                                style={{
                                  backgroundImage: `url('https://images.unsplash.com/photo-${
                                    subIndex % 4 === 0 ? '1557804506-669a67965ba0' : 
                                    subIndex % 4 === 1 ? '1556761175-b413da4baf72' :
                                    subIndex % 4 === 2 ? '1552664730-d307ca884978' :
                                    '1460925895917-afdab827c52f'
                                  }?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2115&q=80')`
                                }}>
                              </div>
                              {/* Dark overlay on hover */}
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/sub:opacity-100 transition-opacity duration-300"></div>
                              <div className="relative z-10">
                                <div className="flex items-center justify-between mb-6">
                                  <h4 className="text-2xl font-bold text-foreground group-hover/sub:text-white uppercase tracking-wide transition-colors duration-300">
                                    {subService.title}
                                  </h4>
                                  <svg 
                                    className="w-8 h-8 text-muted-foreground group-hover/sub:text-white group-hover/sub:translate-x-1 transition-all duration-300"
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                                <p className="text-lg text-white group-hover/sub:text-white/90 leading-relaxed transition-colors duration-300">
                                  {subService.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;