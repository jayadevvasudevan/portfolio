
import React from "react";
import { ExternalLink, Github, Database, Workflow, TrendingUp } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Real-time Data Pipeline with Apache Airflow",
      description: "Built a robust ETL pipeline processing millions of records daily, with automated data validation and quality checks. Implemented using Python, PySpark, and Apache Airflow for workflow orchestration.",
      image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
      technologies: ["Python", "Apache Airflow", "PySpark", "Data Validation"],
      icon: Workflow,
      details: "Reduced data processing time by 60% while ensuring 99.9% data accuracy through comprehensive validation frameworks."
    },
    {
      title: "Snowflake Data Warehouse Optimization",
      description: "Designed and implemented a scalable data warehouse solution on Snowflake, optimizing query performance and reducing costs through efficient data modeling and partitioning strategies.",
      image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
      technologies: ["Snowflake", "SQL", "Data Modeling", "Performance Tuning"],
      icon: Database,
      details: "Achieved 40% cost reduction and 3x query performance improvement through strategic optimization."
    },
    {
      title: "Big Data Analytics with Spark & Scala",
      description: "Developed large-scale data processing applications using Spark and Scala, handling petabyte-scale datasets for business intelligence and analytics use cases.",
      image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png",
      technologies: ["Scala", "Apache Spark", "Hive", "Impala"],
      icon: TrendingUp,
      details: "Processed 10TB+ daily data volumes with sub-second query response times for critical business metrics."
    }
  ];

  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="projects">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Showcasing data engineering solutions that drive business value through 
            innovative technology implementations and optimization strategies.
          </p>
        </div>
        
        <div className="space-y-8 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant animate-on-scroll">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                        <IconComponent className="w-5 h-5 text-pulse-500" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 sm:p-8 flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base mb-4">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 italic">
                        {project.details}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 bg-pulse-500 text-white rounded-lg hover:bg-pulse-600 transition-colors text-sm">
                        <ExternalLink className="w-4 h-4" />
                        View Details
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        <Github className="w-4 h-4" />
                        Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
