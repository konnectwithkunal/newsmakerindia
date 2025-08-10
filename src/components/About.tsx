import React from 'react';
import { motion, useInView } from 'framer-motion';

function About() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div id="about" className="py-16 bg-white relative grid-mob-light  md:grid-overlay-light">
      <motion.section
        ref={ref}
        className="max-w-7xl mx-2 md:mx-20 px-2 md:px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.div
          className="section-text w-full mb-8 flex flex-col items-start"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-[7rem] font-normal leading-none text-[#000000] pl-2 mb-2  text-left bg-transparent">
            Strategic Storytelling Measurable Impact
          </h1>
        </motion.div>

        <motion.div
          className="w-full"
          initial={{ rotate: -90, opacity: 0 }}
          animate={isInView ? { rotate: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="arrow"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </motion.div>

        <motion.div
          className=" section-description bg-white max-w-[600px] mt-[-50px] ml-[750px] flex flex-col gap-5 font-normal text-[1.1rem] text-[#222] bg-transparent"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className=" bg-transparent flex items-start text-2xl text-[#000] ">
            <span>
              Newsmaker Media and Communications is a full-service communications consultancy built for the evolving media landscape.<br/><br/> Founded with a vision to bring authenticity and agility into the PR and marketing ecosystem, we help brands tell stories that resonate, engage, and influence.
            </span>
          </p>

          {expanded && (
            <>
              <p className=" bg-transparent flex items-start text-2xl text-[#000]">
                <span>
                  With a rich portfolio across sectors including healthcare, tech, education, lifestyle, and public affairs, our campaigns are data-informed, digitally empowered, and media-savvy.<br/> <br/> Whether you're an emerging startup or an established brand, we act as an extension of your team—strategic, responsive, and always outcome-driven.
                </span>
              </p>

              <div className="why-choose-us mt-6 bg-[#f7f7f7] rounded-xl p-6 shadow-sm">
                <h1 className="text-2xl  mb-3 text-[#000]">Why Choose Us:</h1>
                <ul className="list-disc text-xl pl-6 m-0 text-[#000] ">
                  <li>15+ years of cross-industry expertise</li>
                  <li>Integrated approach: PR, Digital, Content, and Strategy</li>
                  <li>Deep relationships with media and influencers</li>
                  <li>Tailor-made solutions, no cookie-cutter campaigns</li>
                </ul>
              </div>
            </>
          )}

          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="read-more-btn bg-[#222] text-white rounded-full px-8 py-3 text-base font-semibold mt-4 hover:bg-[#444] transition"
          >
            {expanded ? 'Read Less' : 'Read More'}
          </button>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default About;
