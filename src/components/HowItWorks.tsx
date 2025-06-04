
import React from 'react';
import { Printer, Target, Award } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Printer,
      title: "Print",
      description: "Select & Print from 14,000+ worksheets amongst different topics or themes, based on your kid's choice.",
      emoji: "🖨️"
    },
    {
      icon: Target,
      title: "Track",
      description: "Keep a track of child's daily progress through progress sheet tracker.",
      emoji: "📈"
    },
    {
      icon: Award,
      title: "Award",
      description: "Award them once they complete a particular skill.",
      emoji: "🏆"
    }
  ];

  const requirements = [
    { item: "A CURIOUS 2 – 7 YEARS OLD KID", emoji: "👶" },
    { item: "15 MINUTES IN A DAY", emoji: "⏰" },
    { item: "AND A PRINTER", emoji: "🖨️" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Easy Steps to Follow
          </h2>
          <p className="text-xl text-gray-600">
            Reduce your stress tremendously with our simple 3-step process
          </p>
        </div>

        {/* How It Works Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto text-3xl font-bold mb-4">
                  {index + 1}
                </div>
                <div className="absolute -top-2 -right-2 text-4xl">{step.emoji}</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
              <p className="text-gray-600 max-w-sm mx-auto">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            What you need for this Premium eBook bundle
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {requirements.map((req, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl">
                <div className="text-4xl mb-4">{req.emoji}</div>
                <div className="font-bold text-gray-800 text-lg">{req.item}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              <strong>Pro Tip:</strong> Don't want to get these colored? Try it in grayscale as well.
            </p>
          </div>
        </div>

        {/* Why Parents Recommend */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Why Parents & Teachers Recommend Us?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Instant Download</h4>
              <p className="text-gray-600">You can instantly download the Premium E-book Bundle once you complete the purchase. You also get Lifetime Access!</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Premium Quality</h4>
              <p className="text-gray-600">Expertly designed worksheets created by a team of experienced educators and child development specialists.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎧</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Live Support 24/7</h4>
              <p className="text-gray-600">If you encounter any issues throughout the process, feel free to reach out at any time. Our support is available 24/7 for you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
