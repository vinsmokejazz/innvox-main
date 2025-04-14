import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useSpring, stagger } from 'framer-motion';
import { BackgroundBeams } from '../ui/BackgroundBeams';
import { useRef } from 'react';

// Animated counter component for statistics
const CountingNumber = ({ value, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div 
      ref={ref}
      className="stat-card"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <motion.div 
        className="stat-number"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          {isInView ? (
            <ImprovedCountUp end={parseInt(value)} duration={2} />
          ) : (
            "0"
          )}
        </motion.span>
        {value.includes('+') && '+'}
        {value.includes('/') && '/7'}
      </motion.div>
      <motion.div 
        className="stat-label"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

// Enhanced counting animation implementation with better easing
const ImprovedCountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  
  React.useEffect(() => {
    // Explicitly set to 0 at start to ensure it always begins from zero
    setCount(0);
    
    let startTime;
    let animationFrame;
    
    // Custom easing function for smoother counting effect
    const easeOutExpo = t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    
    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1500), 1);
      
      // Apply easing function to make it faster at start and slower toward end
      const easedProgress = easeOutExpo(progress);
      
      // Buffer effect: add some small random variation
      const randomVariation = Math.random() * 0.03;
      const bufferedProgress = Math.min(easedProgress + (progress < 0.9 ? randomVariation : 0), 1);
      
      setCount(Math.floor(bufferedProgress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        // Ensure we end exactly at the target number
        setCount(end);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  return <>{count}</>;
};

// Text animation variants for paragraph text
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + (i * 0.1),
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1.0]
    }
  })
};

const AboutSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  
  return (
    <section id="about" className="about-section" ref={containerRef}>
      <BackgroundBeams />
      
      <div className="container relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="about-text"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="glow-text">
              About <span className="highlight-text">INNVOX</span>
            </h2>
            
            <motion.p
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Welcome to the Technical Club of K.S. Institute of Technology, where innovation meets opportunity. 
              We are a community of passionate tech enthusiasts dedicated to fostering technical excellence and 
              collaborative learning.
            </motion.p>
            
            <motion.p
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Our club provides a platform for students to explore, learn, and grow in various technical domains 
              including Software development, Artificial Intelligence, Web development, Blockchain and more. Through workshops, 
              hackathons, and collaborative projects, we aim to bridge the gap between academic knowledge and 
              real-world applications.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              <Link to="/about" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 inline-block">
                Learn More About Us
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="about-stats"
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <CountingNumber value="10+" label="Technical Domains" />
            <CountingNumber value="3+" label="Monthly Workshops" />
            <CountingNumber value="24/7" label="Learning Support" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 