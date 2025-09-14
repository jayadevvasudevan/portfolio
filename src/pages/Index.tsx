
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsSection from "@/components/HumanoidSection";
import AboutSection from "@/components/SpecsSection";
import ExperienceSection from "@/components/DetailsSection";
import ProjectsSection from "@/components/ImageShowcaseSection";
import ServicesSection from "@/components/Features";
import AchievementsSection from "@/components/Testimonials";
import ContactForm from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        // Increased offset to account for mobile nav
        const offset = window.innerWidth < 768 ? 100 : 80;
        
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="space-y-4 sm:space-y-8"> {/* Reduced space on mobile */}
        <Hero />
        <SkillsSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ServicesSection />
        <AchievementsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
