
import React from 'react';
import { Star, TrendingUp, Users, Award } from 'lucide-react';

const SocialProof = () => {
  const stats = [
    { number: "87,490+", label: "Happy Parents", icon: Users },
    { number: "25,678+", label: "Positive Reviews", icon: Star },
    { number: "14,000+", label: "Worksheets", icon: Award },
    { number: "2.5+", label: "Years Research", icon: TrendingUp }
  ];

  const improvements = [
    { category: "Attitude (Enthusiasm, Creativity)", percentage: 85 },
    { category: "Skills Development", percentage: 89 },
    { category: "Knowledge Retention", percentage: 91 }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Thousands of Happy Parents!
          </h2>
          <div className="flex justify-center items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 text-yellow-300 fill-current" />
            ))}
            <span className="text-xl ml-2">⭐⭐⭐⭐⭐</span>
          </div>
          <p className="text-xl opacity-90">25,678+ POSITIVE FEEDBACK & STILL COUNTING</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <stat.icon className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Improvement Metrics */}
        <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-center mb-8">Proven Results</h3>
          <div className="space-y-6">
            {improvements.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold">{item.category}</span>
                  <span className="text-2xl font-bold text-yellow-300">{item.percentage}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-4">
                  <div 
                    className="bg-gradient-to-r from-yellow-300 to-orange-400 h-4 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">What Parents Are Saying</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-300 fill-current" />
                ))}
              </div>
              <p className="text-lg mb-4">"Amazing worksheets! My 4-year-old loves them and I can see real improvement in just 2 weeks."</p>
              <div className="font-semibold">- Happy Parent</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-300 fill-current" />
                ))}
              </div>
              <p className="text-lg mb-4">"Perfect for reducing screen time while keeping kids engaged and learning. Highly recommend!"</p>
              <div className="font-semibold">- Satisfied Customer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
