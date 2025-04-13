import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // Particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = containerRef.current.offsetWidth;
      canvas.height = containerRef.current.offsetHeight;
      initParticles();
    };

    // Create particles 
    const initParticles = () => {
      particles = [];
      
      const numberOfParticles = Math.floor(canvas.width * canvas.height / 9000); 
      
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2.5 + 1.5,
          color: `rgba(255, 255, 255, ${Math.random() * 0.7 + 0.2})`,
          velocity: {
            x: (Math.random() - 0.5) * 1,
            y: (Math.random() - 0.5) * 1
          }
        });
      }
    };

    // Draw particles
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        ctx.shadowBlur = 0;
        
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;
        
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
      
      particles.forEach((particle, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = particle.x - p2.x;
          const dy = particle.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.35 - distance / 400})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    render();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Text animation variants with flickering effect
  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
    },
    visible: (i) => ({ 
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }
    })
  };

  // Flickering animation for each letter except X
  const flickerVariants = {
    initial: { 
      opacity: 0,
      textShadow: "0 0 0px rgba(255, 255, 255, 0)"
    },
    animate: (i) => ({
      opacity: [0.4, 1, 0.6, 0.8, 1, 0.8, 1],
      textShadow: [
        "0 0 10px rgba(255, 255, 255, 0.2)",
        "0 0 20px rgba(255, 255, 255, 0.4)",
        "0 0 10px rgba(255, 255, 255, 0.2)",
        "0 0 30px rgba(255, 255, 255, 0.4)",
        "0 0 40px rgba(255, 255, 255, 0.6)",
        "0 0 30px rgba(255, 255, 255, 0.4)",
        "0 0 40px rgba(255, 255, 255, 0.6)"
      ],
      transition: {
        delay: i * 0.1 + 0.8,
        duration: 2,
        times: [0, 0.2, 0.3, 0.4, 0.6, 0.8, 1],
        ease: "easeInOut"
      }
    })
  };

  // X highlight effect 
  const xHighlightVariants = {
    initial: {
      opacity: 0,
      textShadow: "0 0 0px rgba(57, 255, 20, 0)"
    },
    animate: {
      opacity: 1,
      textShadow: "0 0 10px rgba(57, 255, 20, 0.5), 0 0 15px rgba(57, 255, 20, 0.3)",
      transition: {
        delay: 1.2,
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  // Split text into individual characters for letter animation
  const title = "INИVOX";
  const xLetter = "X";

  // Add Montserrat font
  useEffect(() => {
    const montserratLink = document.createElement('link');
    montserratLink.rel = 'stylesheet';
    montserratLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap';
    document.head.appendChild(montserratLink);
    
    return () => {
      document.head.removeChild(montserratLink);
    };
  }, []);

  return (
    <section className="hero-wrapper" ref={containerRef}>
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      <div className="hero-overlay"></div>
      
      <div className="container relative z-10 flex flex-col items-center justify-center h-full">
        <div className="hero-content text-center">
          <div className="text-center overflow-hidden mb-6">
            <div className="flex justify-center items-center">
              {/* Animated INNVO letters with flicker */}
              {title.slice(0, -1).split("").map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block text-8xl md:text-9xl lg:text-[11rem] font-extrabold text-white tracking-tighter"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <motion.span
                    custom={index}
                    variants={flickerVariants}
                    initial="initial"
                    animate="animate"
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                </motion.span>
              ))}
              
              {/* Special X with highlight effect */}
              <motion.div
                custom={title.length - 1}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block text-8xl md:text-9xl lg:text-[11rem] font-extrabold tracking-tighter"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <motion.span
                  variants={xHighlightVariants}
                  initial="initial"
                  animate="animate"
                  className="inline-block"
                  style={{ color: "#39FF14" }} // Neon green color
                >
                  {xLetter}
                </motion.span>
              </motion.div>
            </div>
          </div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            style={{ fontFamily: "'SF UI Display', -apple-system, BlinkMacSystemFont, sans-serif" }}
          >
            Break Boundaries. Define the Future
          </motion.p>
          
          <motion.div 
            className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.6 }}
          >
            <Link to="/register" className="  px-8 py-4 text-lg font-medium rounded-md transition-all duration-300 bg-primary text-white hover:bg-primary/90 hover:shadow-glow">
              Join Now
            </Link>
            <Link to="/projects" className="btn-secondary px-8 py-4 text-lg font-medium rounded-md transition-all duration-300 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50">
              Explore Projects
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 