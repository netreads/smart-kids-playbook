
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Star, Clock, Users, Download } from 'lucide-react';

const Hero = () => {
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

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50">
      <div className="absolute inset-0 bg-white/40"></div>
      <div className="relative container mx-auto px-4 md:px-12 py-12 md:py-24">
        {/* Special Offer Banner */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-red-500 text-white px-4 md:px-6 py-3 rounded-full text-base md:text-lg font-bold mb-4 animate-pulse">
            <Clock className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            Offer Valid Only For Today ₹1999/- ₹199/- Only
          </div>
          <div className="flex justify-center gap-2 md:gap-4 text-xl md:text-2xl font-bold text-gray-800">
            <div className="bg-white/60 px-3 md:px-4 py-2 rounded-lg border border-purple-200">
              <div>{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-xs md:text-sm">Hours</div>
            </div>
            <div className="bg-white/60 px-3 md:px-4 py-2 rounded-lg border border-purple-200">
              <div>{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-xs md:text-sm">Minutes</div>
            </div>
            <div className="bg-white/60 px-3 md:px-4 py-2 rounded-lg border border-purple-200">
              <div>{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-xs md:text-sm">Seconds</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-left px-2 md:px-4 order-2 lg:order-1">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight text-gray-800 px-4 md:px-8">
              Too Much Screen Time? Turn It into 
              <span className="text-purple-600"> Smart Learning!</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-700 px-2 md:px-4">
              14,000+ Fun Printable Worksheets to Spark Curiosity & Boost Early Development!
            </p>
            
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Star className="h-5 w-5 md:h-6 md:w-6 text-yellow-500 fill-current" />
                <span className="text-base md:text-lg text-gray-700">Screen-Free Activities for Ages 2-7</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Users className="h-5 w-5 md:h-6 md:w-6 text-green-500" />
                <span className="text-base md:text-lg text-gray-700">Join 87,490+ Happy Parents</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Download className="h-5 w-5 md:h-6 md:w-6 text-blue-500" />
                <span className="text-base md:text-lg text-gray-700">Instant Digital Download</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 justify-center lg:justify-start mb-6">
              <Button 
                size="lg" 
                className="w-full md:w-auto bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-6 md:px-8 py-4 text-lg md:text-xl font-bold rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg animate-[wiggle_2s_ease-in-out_infinite]"
              >
                🎉 Get Instant Access - ₹199
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full md:w-auto border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white px-6 md:px-8 py-4 text-lg md:text-xl font-bold rounded-full transition-all duration-200"
              >
                📚 Learn More
              </Button>
            </div>
          </div>

          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative max-w-sm md:max-w-md">
              <img 
                src="/lovable-uploads/366d379d-62db-4e9d-875c-eb2890c7da3a.png" 
                alt="11,000+ Pages Pre-School Activity Learning Bundle" 
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 bg-red-500 text-white px-3 md:px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                90% OFF
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-base md:text-lg mb-4 text-gray-600">In demand. 127 people bought this in the last 24 hours.</p>
          <div className="flex justify-center items-center flex-wrap">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 md:h-6 md:w-6 text-yellow-500 fill-current" />
              ))}
            </div>
            <span className="ml-2 text-base md:text-lg text-gray-700">25,678+ Positive Reviews</span>
          </div>
          
          {/* Additional Mobile CTA */}
          <div className="block md:hidden mt-6">
            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 text-xl font-bold rounded-full animate-pulse hover:animate-bounce transition-all duration-200 shadow-lg"
            >
              🚀 Claim Your Bundle Now - ₹199!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
