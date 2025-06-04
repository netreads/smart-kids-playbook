
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
      <div className="relative container mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Special Offer Banner */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-4 animate-pulse">
            <Clock className="mr-2 h-5 w-5" />
            Offer Valid Only For Today ₹1999/- ₹199/- Only
          </div>
          <div className="flex justify-center gap-4 text-2xl font-bold text-gray-800">
            <div className="bg-white/60 px-4 py-2 rounded-lg border border-purple-200">
              <div>{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-white/60 px-4 py-2 rounded-lg border border-purple-200">
              <div>{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="bg-white/60 px-4 py-2 rounded-lg border border-purple-200">
              <div>{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-800">
              Too Much Screen Time? Turn It into 
              <span className="text-purple-600"> Smart Learning!</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              14,000+ Fun Printable Worksheets to Spark Curiosity & Boost Early Development!
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Star className="h-6 w-6 text-yellow-500 fill-current" />
                <span className="text-lg text-gray-700">Screen-Free Activities for Ages 2-7</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Users className="h-6 w-6 text-green-500" />
                <span className="text-lg text-gray-700">Join 87,490+ Happy Parents</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Download className="h-6 w-6 text-blue-500" />
                <span className="text-lg text-gray-700">Instant Digital Download</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-8 py-4 text-xl font-bold rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg">
                Get Instant Access - ₹199
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white px-8 py-4 text-xl font-bold rounded-full transition-all duration-200">
                Learn More
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/366d379d-62db-4e9d-875c-eb2890c7da3a.png" 
                alt="11,000+ Pages Pre-School Activity Learning Bundle" 
                className="w-full max-w-md h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                90% OFF
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-lg mb-4 text-gray-600">In demand. 127 people bought this in the last 24 hours.</p>
          <div className="flex justify-center items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
              ))}
            </div>
            <span className="ml-2 text-lg text-gray-700">25,678+ Positive Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
