
import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const ProblemSolution = () => {
  const problems = [
    "Depression, anxiety, and attention deficit disorder (ADD)",
    "Poor academic performance and lower self-esteem",
    "Reduced sleep quality and sleep disturbances",
    "Impaired social skills and slower development",
    "Compulsive behaviors and hyperactivity",
    "Eye strain, headaches, neck pain, and obesity"
  ];

  const solutions = [
    "Screen-free learning activities that engage minds",
    "Boost academic proficiency across all subjects",
    "Encourage healthy learning habits and routines",
    "Develop social skills through interactive worksheets",
    "Promote focused, calm learning environments",
    "Physical engagement through writing and drawing"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            DO YOU KNOW?
          </h2>
          <p className="text-xl text-red-600 font-semibold mb-8">
            Mobile Phone Addiction Can Have Many Negative Effects On Children
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Problems */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-8 w-8 text-red-500" />
              <h3 className="text-2xl font-bold text-gray-800">The Problem</h3>
            </div>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">×</div>
                  <p className="text-gray-700">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <h3 className="text-2xl font-bold text-gray-800">Our Solution</h3>
            </div>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
                  <p className="text-gray-700">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              We Help Parents Empower Their Kids with Expertly Designed Worksheets
            </h3>
            <p className="text-xl">
              Covering Every Topic and Segment for Complete Development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
