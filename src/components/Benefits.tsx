
import React from 'react';
import { Brain, Target, Users, Lightbulb, Award, Clock } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Transform Screen Time into Learning Time",
      description: "Say goodbye to passive entertainment; our worksheets turn screen time into an enriching learning experience for your child."
    },
    {
      icon: Target,
      title: "Preparation for School Success",
      description: "Ensure your child enters formal education confidently, equipped with a solid understanding of fundamental concepts."
    },
    {
      icon: Award,
      title: "Master Fundamental Skills",
      description: "Equip your child with essential skills like alphabet recognition, counting, and shapes for lifelong learning."
    },
    {
      icon: Users,
      title: "Independent Learning",
      description: "Activity worksheets encourage independent learning, promoting self-reliance and critical thinking skills."
    },
    {
      icon: Lightbulb,
      title: "Foster Creativity",
      description: "Boost cognitive skills and foster creativity and imagination through engaging activities."
    },
    {
      icon: Clock,
      title: "Just 15 Minutes Daily",
      description: "Achieve remarkable progress with just 15 minutes of daily practice using our structured approach."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Transform Your Child's Learning Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in Play, Practice, and Perform – Unlocking Your Child's True Potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            After practicing these worksheets, your child will have:
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">🧠</div>
              <div className="font-semibold">Fluent & Flexible Thinking</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">🎯</div>
              <div className="font-semibold">Excellent Reasoning Skills</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">🔧</div>
              <div className="font-semibold">Problem Solving Skills</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">⭐</div>
              <div className="font-semibold">Strong Confidence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
