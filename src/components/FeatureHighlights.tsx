
import React from 'react';
import { Shield, Clock, Star, Users, Download, Award } from 'lucide-react';

const FeatureHighlights = () => {
  const features = [
    {
      icon: Download,
      title: "Instant Access",
      description: "Download immediately after purchase"
    },
    {
      icon: Clock,
      title: "Lifetime Access",
      description: "Print anytime, anywhere forever"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Expertly designed by educators"
    },
    {
      icon: Users,
      title: "Ages 2-7",
      description: "Perfect for early development"
    },
    {
      icon: Award,
      title: "40+ Skills",
      description: "Comprehensive learning coverage"
    },
    {
      icon: Shield,
      title: "24/7 Support",
      description: "Always here to help you"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Our Worksheet Bundle?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over 2.5 years of research to bring you engaging, high-quality learning worksheets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full mb-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full text-lg font-semibold">
            <Award className="mr-2 h-5 w-5" />
            Digital Download • PDF & ZIP Files • A4 Size Ready
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
