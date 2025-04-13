import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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

  

  return (
    <section className="hero-wrapper" ref={containerRef}>
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      <div className="hero-overlay"></div>
      
      <div className="container relative z-10 flex flex-col items-center justify-center h-full">
        <div className="hero-content text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white hero-title">
            INNVO<span className="text-primary">X</span>: Where Innovation <br className="hidden md:block" /> Breaks Boundaries
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Join a community shaping the future through endless creativity and cutting-edge tech.
          </p>
          
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/register" className="btn-primary px-8 py-4 text-lg font-medium rounded-md transition-all duration-300 bg-primary text-white hover:bg-primary/90 hover:shadow-glow">
              Join Now
            </Link>
            <Link to="/projects" className="btn-secondary px-8 py-4 text-lg font-medium rounded-md transition-all duration-300 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50">
              Explore Projects
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 