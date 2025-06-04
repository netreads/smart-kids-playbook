
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Clock, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Final CTA */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🎯 14000 Kids Worksheets
            </h2>
            <p className="text-xl mb-6">Team of Experts • Years Of Experience</p>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-6 text-2xl font-bold rounded-full transform hover:scale-105 transition-all duration-200">
              Buy Now - ₹199 Only
            </Button>
          </div>
        </div>

        {/* Contact & Support */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Contact Support</h3>
            <p className="text-gray-300">azcontent101@gmail.com</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-300">365 Days a Year</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Instant Delivery</h3>
            <p className="text-gray-300">100% Guarantee</p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p className="mb-4">
            This site is not part of the Facebook or Instagram website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook or Instagram in any way. Facebook is a trademark of FACEBOOK, Inc.
          </p>
          <p>
            © 2024 Kids Premium Worksheet Bundle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
