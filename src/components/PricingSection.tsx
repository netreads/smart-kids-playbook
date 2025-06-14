
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Clock, CreditCard, Shield } from 'lucide-react';

const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    "14,000+ Premium Worksheets",
    "Ages 2-7 Complete Coverage", 
    "40+ Essential Skills",
    "Progress Tracking Sheets",
    "Instant Digital Download",
    "Lifetime Access",
    "A4 Size Ready to Print",
    "Color & Grayscale Options",
    "24/7 Expert Support",
    "100% Satisfaction Guarantee"
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Limited Time Offer
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8">Which Will You Choose?</p>
          
          {/* Timer */}
          <div className="flex justify-center gap-2 md:gap-4 text-lg md:text-2xl font-bold mb-6 md:mb-8">
            <div className="bg-red-500 px-3 md:px-6 py-2 md:py-4 rounded-lg">
              <div>{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-xs md:text-sm">Hours</div>
            </div>
            <div className="bg-red-500 px-3 md:px-6 py-2 md:py-4 rounded-lg">
              <div>{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-xs md:text-sm">Minutes</div>
            </div>
            <div className="bg-red-500 px-3 md:px-6 py-2 md:py-4 rounded-lg">
              <div>{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-xs md:text-sm">Seconds</div>
            </div>
          </div>
        </div>

        {/* Pricing Comparison */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto mb-8 md:mb-12">
          {/* Option A */}
          <div className="bg-white/10 rounded-3xl p-6 md:p-8 text-center backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-red-300">Option A</h3>
            <div className="text-lg md:text-xl mb-4 md:mb-6">Keep Your Rs.200/-</div>
            <div className="text-base md:text-lg mb-4 md:mb-6">& Spend Anywhere</div>
            <div className="space-y-2 md:space-y-3 text-red-300 text-sm md:text-base">
              <div>❌ No educational progress</div>
              <div>❌ Continued screen addiction</div>
              <div>❌ Missed learning opportunities</div>
              <div>❌ No skill development</div>
            </div>
          </div>

          {/* Option B */}
          <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-3xl p-6 md:p-8 text-center relative overflow-hidden transform scale-105">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-3 md:px-4 py-2 rounded-bl-lg font-bold text-sm md:text-base">
              RECOMMENDED
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-yellow-300">Option B</h3>
            <div className="text-lg md:text-xl mb-2">Invest Rs.200/-</div>
            <div className="text-base md:text-lg mb-4 md:mb-6">In Your Kids Education</div>
            <div className="space-y-2 md:space-y-3 text-green-200 text-sm md:text-base">
              <div>✅ 14,000+ Learning Worksheets</div>
              <div>✅ Reduce Screen Time</div>
              <div>✅ Boost Academic Performance</div>
              <div>✅ Lifetime Access</div>
            </div>
          </div>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white text-gray-800 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-500 to-orange-500 text-white text-center py-2 md:py-3 font-bold text-sm md:text-base">
              🔥 90% OFF - LIMITED TIME ONLY 🔥
            </div>
            
            <div className="pt-8 md:pt-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Kids Premium Worksheet Bundle</h3>
              
              <div className="mb-6 md:mb-8">
                <div className="flex items-center justify-center gap-2 md:gap-4 mb-4">
                  <div className="text-xl md:text-3xl text-gray-400 line-through">₹1,999/-</div>
                  <div className="text-4xl md:text-6xl font-bold text-green-600">₹199/-</div>
                </div>
                <p className="text-base md:text-lg text-gray-600">One-time payment • Lifetime access</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-left mb-6 md:mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 flex-shrink-0" />
                    <span className="text-xs md:text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-4 md:py-6 text-lg md:text-2xl font-bold rounded-full mb-4 md:mb-6 transform hover:scale-105 transition-all duration-200 animate-[wiggle_2s_ease-in-out_infinite]"
              >
                🚀 Get Instant Access - ₹199 Only
              </Button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-center text-xs md:text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Shield className="h-3 w-3 md:h-4 md:w-4 text-green-600" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="h-3 w-3 md:h-4 md:w-4 text-blue-600" />
                  <span>Instant Download</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CreditCard className="h-3 w-3 md:h-4 md:w-4 text-purple-600" />
                  <span>All Payment Methods</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-8 md:mt-12 text-center">
          <div className="bg-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-sm max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              🏆 100% INSTANT DELIVERY GUARANTEE!
            </h3>
            <p className="text-sm md:text-lg">
              Receive your product directly to your email within moments of purchase. Enjoy immediate access, hassle-free! 
              If any issues arise, Email us at azcontent101@gmail.com for swift resolution.
            </p>
          </div>
        </div>

        {/* Additional Mobile CTA */}
        <div className="block md:hidden mt-8">
          <Button 
            size="lg" 
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-xl font-bold rounded-full animate-pulse hover:animate-bounce transition-all duration-200 shadow-lg"
          >
            🎯 Secure Your Bundle Now - ₹199!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
