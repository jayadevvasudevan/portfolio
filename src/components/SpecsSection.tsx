
import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full py-6 sm:py-10 bg-white" id="about">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">🚀</span>
              <span>About</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        {/* Main content with text mask image - responsive text sizing */}
        <div className="max-w-5xl pl-4 sm:pl-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-tight mb-8 sm:mb-12">
            <span className="block bg-clip-text text-transparent bg-[url('/text-mask-image.jpg')] bg-cover bg-center">
              Proficient in technologies including Python, PySpark, Scala, Impala, Hive, Spark, Camunda, and Snowflake. Known for excellent teamwork and problem-solving abilities, with a proactive approach to ensuring data accuracy, system stability, and project success.
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Experience Highlights</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-pulse-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>4+ years in Production Operations and data engineering</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-pulse-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Expert in Apache Airflow workflow orchestration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-pulse-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Specialized in robust ETL job creation and optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-pulse-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Comprehensive data validation and quality assurance</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Core Competencies</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-pulse-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Big Data processing with PySpark and Scala</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-pulse-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Cloud data warehousing with Snowflake</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-pulse-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Process automation and business process management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-pulse-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>System integration and data pipeline architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
