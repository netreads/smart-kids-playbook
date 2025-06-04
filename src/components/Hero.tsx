
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
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        {/* Special Offer Banner */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-4 animate-pulse">
            <Clock className="mr-2 h-5 w-5" />
            Offer Valid Only For Today ₹1999/- ₹199/- Only
          </div>
          <div className="flex justify-center gap-4 text-2xl font-bold">
            <div className="bg-white/20 px-4 py-2 rounded-lg">
              <div>{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-lg">
              <div>{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-lg">
              <div>{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Too Much Screen Time? Turn It into 
              <span className="text-yellow-300"> Smart Learning!</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              14,000+ Fun Printable Worksheets to Spark Curiosity & Boost Early Development!
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Star className="h-6 w-6 text-yellow-300 fill-current" />
                <span className="text-lg">Screen-Free Activities for Ages 2-7</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Users className="h-6 w-6 text-yellow-300" />
                <span className="text-lg">Join 87,490+ Happy Parents</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Download className="h-6 w-6 text-yellow-300" />
                <span className="text-lg">Instant Digital Download</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-xl font-bold rounded-full transform hover:scale-105 transition-all duration-200">
                Get Instant Access - ₹199
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-xl font-bold rounded-full">
                Learn More
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-6xl mb-4">📚</div>
                  <div className="text-2xl font-bold">14,000+</div>
                  <div className="text-lg">Worksheets</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                90% OFF
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-lg mb-4 opacity-90">In demand. 127 people bought this in the last 24 hours.</p>
          <div className="flex justify-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-300 fill-current" />
              ))}
            </div>
            <span className="ml-2 text-lg">25,678+ Positive Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
