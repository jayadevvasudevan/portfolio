
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Database, Workflow, BarChart3, Cloud, Settings, Shield } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
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
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "feature-card glass-card opacity-0 p-4 sm:p-6",
        "lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-pulse-50",
        "transition-all duration-300"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="rounded-full bg-pulse-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-pulse-500 mb-4 sm:mb-5">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-12 sm:py-16 md:py-20 pb-0 relative bg-gray-50" id="services" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>Services</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            Data Engineering <br className="hidden sm:block" />Solutions & Services
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            Comprehensive data engineering services to optimize your data infrastructure and drive business insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <ServiceCard
            icon={<Database className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="ETL Development"
            description="Design and implement robust ETL pipelines to extract, transform, and load data efficiently from multiple sources into your data warehouse."
            index={0}
          />
          <ServiceCard
            icon={<Workflow className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Workflow Orchestration"
            description="Build and manage complex data workflows using Apache Airflow, ensuring reliable and scalable data processing automation."
            index={1}
          />
          <ServiceCard
            icon={<BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Big Data Processing"
            description="Leverage Spark, PySpark, and Scala to process large-scale datasets with optimal performance and cost efficiency."
            index={2}
          />
          <ServiceCard
            icon={<Cloud className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Cloud Data Solutions"
            description="Implement and optimize cloud-based data warehouses using Snowflake and other modern cloud platforms for scalability."
            index={3}
          />
          <ServiceCard
            icon={<Shield className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Data Validation & Quality"
            description="Implement comprehensive data validation frameworks and quality checks to ensure data accuracy and reliability."
            index={4}
          />
          <ServiceCard
            icon={<Settings className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="System Integration"
            description="Seamlessly integrate various data systems and platforms using Camunda and other enterprise integration tools."
            index={5}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
