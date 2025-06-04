
import React from 'react';

const WorksheetGallery = () => {
  const worksheetImages = [
    {
      src: "/lovable-uploads/65afb27e-86d4-4bee-ae46-010ca49a7138.png",
      title: "Under the Sea Addition",
      description: "Fun math activities with sea creatures"
    },
    {
      src: "/lovable-uploads/9e2e825a-ce61-49ef-a479-e78e0b149f10.png",
      title: "Count & Circle",
      description: "Visual counting and number recognition"
    },
    {
      src: "/lovable-uploads/98237027-cec9-4935-90ba-a34244f77539.png",
      title: "The Maze Game",
      description: "Problem-solving triangle maze"
    },
    {
      src: "/lovable-uploads/31ac2b90-6ad4-4623-95a3-a0be56d06725.png",
      title: "Superhero Letter Maze",
      description: "Help the superhero find letter Z"
    },
    {
      src: "/lovable-uploads/8ebe8de1-44a0-47bd-8aab-a6f0f078d252.png",
      title: "Number Learning",
      description: "Learn to say, count and trace numbers"
    },
    {
      src: "/lovable-uploads/43ce85de-4cd8-4a9d-a90d-2f8cc58b403b.png",
      title: "Long E Sound Words",
      description: "Phonics and vocabulary building"
    },
    {
      src: "/lovable-uploads/45ac7f3c-6d2e-49d9-af9d-5e7e8ba6c485.png",
      title: "Alphabet Picture Match",
      description: "Letter recognition with pictures"
    },
    {
      src: "/lovable-uploads/b8a81d2d-f0b8-45f3-b08f-94dc99052af7.png",
      title: "Letter A Activities",
      description: "Complete alphabet learning set"
    },
    {
      src: "/lovable-uploads/05ac0dea-d0cb-4533-b602-fd55f00da39c.png",
      title: "Alphabet Match",
      description: "Upper and lowercase letter matching"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Inside this <span className="text-purple-600">Kids Worksheet Bundle</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-orange-600 mb-4">
            you will discover
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A treasure trove of engaging, educational activities designed to make learning fun and effective!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {worksheetImages.map((worksheet, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 overflow-hidden border-4 border-transparent hover:border-purple-200"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={worksheet.src} 
                  alt={worksheet.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-bold text-lg mb-1">{worksheet.title}</h4>
                  <p className="text-sm">{worksheet.description}</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg text-gray-800 mb-2">{worksheet.title}</h4>
                <p className="text-gray-600">{worksheet.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg animate-pulse">
            <span className="mr-2">✨</span>
            And Many More Amazing Activities!
            <span className="ml-2">✨</span>
          </div>
          <p className="text-2xl font-bold text-gray-800 mt-6">
            <span className="text-purple-600">14,000+</span> Worksheets Covering Every Learning Topic!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorksheetGallery;
