
import React from "react";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-12" id="contact">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-pulse-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                J
              </div>
              <span className="font-bold text-xl">Jayadev</span>
            </div>
            <p className="text-gray-300 mb-4">
              Software Developer & Data Engineer specializing in ETL processes and data workflow orchestration.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-pulse-500" />
                <a href="mailto:jayadev@example.com" className="text-gray-300 hover:text-white transition-colors">
                  jayadev@example.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-pulse-500" />
                <span className="text-gray-300">Available upon request</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-pulse-500" />
                <span className="text-gray-300">Available for remote work</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
            </ul>
          </div>

          {/* Technologies & Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Python", "PySpark", "Scala", "Apache Airflow", "Snowflake", "Spark", "Hive", "Camunda"].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
            
            <h4 className="font-semibold mb-3">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/jayadev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pulse-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/jayadev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pulse-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Jayadev. All rights reserved. Available for exciting data engineering opportunities.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
