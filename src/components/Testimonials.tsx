
import React, { useRef } from "react";
import { Award, Star, TrendingUp, Shield, Users, Zap } from "lucide-react";

interface AchievementProps {
  title: string;
  description: string;
  metric: string;
  icon: React.ReactNode;
  backgroundImage?: string;
}

const achievements: AchievementProps[] = [
  {
    title: "Data Pipeline Optimization",
    description: "Reduced data processing time by 60% through optimized ETL pipeline design and Apache Airflow workflow orchestration.",
    metric: "60% Faster",
    icon: <TrendingUp className="w-6 h-6" />,
    backgroundImage: "/background-section1.png"
  },
  {
    title: "System Reliability",
    description: "Achieved 99.9% data accuracy and system uptime through comprehensive validation frameworks and monitoring.",
    metric: "99.9% Accuracy",
    icon: <Shield className="w-6 h-6" />,
    backgroundImage: "/background-section2.png"
  },
  {
    title: "Cost Optimization",
    description: "Delivered 40% cost reduction in cloud data warehouse operations through strategic Snowflake optimization.",
    metric: "40% Cost Savings",
    icon: <Award className="w-6 h-6" />,
    backgroundImage: "/background-section3.png"
  },
  {
    title: "Big Data Processing",
    description: "Successfully processed 10TB+ daily data volumes with sub-second query response times using Spark and Scala.",
    metric: "10TB+ Daily",
    icon: <Zap className="w-6 h-6" />,
    backgroundImage: "/background-section1.png"
  }
];

const AchievementCard = ({
  title,
  description,
  metric,
  icon,
  backgroundImage = "/background-section1.png"
}: AchievementProps) => {
  return (
    <div 
      className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden" 
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 to-gray-900/50"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
            {icon}
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-pulse-300">{metric}</div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-white/90 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const AchievementsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 bg-white relative" id="achievements" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">🏆</span>
            <span>Achievements</span>
          </div>
        </div>
        
        <h2 className="text-5xl font-display font-bold mb-12 text-left">Key Accomplishments</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={index} 
              title={achievement.title}
              description={achievement.description}
              metric={achievement.metric}
              icon={achievement.icon}
              backgroundImage={achievement.backgroundImage}
            />
          ))}
        </div>
        
        {/* Additional certifications/skills section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Core Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-pulse-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold">Team Leadership</h4>
              <p className="text-sm text-gray-600">4+ Years Experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold">Data Security</h4>
              <p className="text-sm text-gray-600">Compliance & Privacy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold">Performance Tuning</h4>
              <p className="text-sm text-gray-600">Optimization Expert</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold">Innovation</h4>
              <p className="text-sm text-gray-600">Continuous Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
