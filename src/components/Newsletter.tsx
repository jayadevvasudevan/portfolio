import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Mail, User, MessageSquare, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you within 24 hours. Thank you for reaching out!"
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact-form" className="bg-gray-50 py-16">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="pulse-chip mx-auto mb-4">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">📧</span>
              <span>Let's Connect</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Ready to Collaborate?</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Whether you're looking for data engineering expertise, have a project in mind, or want to discuss opportunities, 
              I'd love to hear from you.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Your Name" 
                    className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500 text-gray-700" 
                    required 
                  />
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Your Email" 
                    className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500 text-gray-700" 
                    required 
                  />
                </div>
              </div>
              
              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500 text-gray-700"
                >
                  <option value="">Select Subject</option>
                  <option value="job-opportunity">Job Opportunity</option>
                  <option value="freelance-project">Freelance Project</option>
                  <option value="consulting">Consulting Services</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="relative">
                <textarea 
                  name="message"
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Tell me about your project, opportunity, or how I can help..." 
                  rows={6}
                  className="w-full px-4 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500 text-gray-700 resize-none" 
                  required
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-pulse-500 hover:bg-pulse-600 text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                Prefer email? Reach me directly at{" "}
                <a href="mailto:jayadev@example.com" className="text-pulse-500 hover:underline font-medium">
                  jayadev@example.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;