
import React from 'react';
import { Button } from '@/components/ui/button';

const ProductShowcase = () => {
  const categories = [
    { name: "Alphabet Adventure", emoji: "🔤", description: "Learn letters A-Z with fun activities" },
    { name: "Count and Write", emoji: "🔢", description: "Number recognition and counting skills" },
    { name: "Match the Babies", emoji: "👶", description: "Animal matching and recognition" },
    { name: "Maze Games", emoji: "🧩", description: "Problem-solving and motor skills" },
    { name: "Sight Words", emoji: "👁️", description: "Early reading development" },
    { name: "Count & Circle", emoji: "⭕", description: "Visual counting exercises" },
    { name: "Read & Learn Words", emoji: "📖", description: "Vocabulary building activities" },
    { name: "Shape Recognition", emoji: "🔺", description: "Geometric shapes and patterns" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Inside This Kids Worksheet Bundle
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover the joy of learning through playful kids worksheets!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-orange-100">
              <div className="text-4xl mb-4">{category.emoji}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{category.name}</h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold text-gray-800 mb-6">
            And Many More!... 
            <span className="text-orange-600">14,000+ Worksheets</span> 
            Across All Topics!
          </p>
          
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">What You Get:</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-800">14,000+ Worksheets</h4>
                  <p className="text-gray-600 text-sm">Comprehensive collection for ages 2-7</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Progress Tracker</h4>
                  <p className="text-gray-600 text-sm">Monitor your child's development</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Expert Support</h4>
                  <p className="text-gray-600 text-sm">24/7 help from our team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
