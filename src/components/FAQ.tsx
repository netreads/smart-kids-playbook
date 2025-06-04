
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "Printable Worksheets are suitable for which Age group?",
      answer: "Our worksheets are perfect for children aged 2.5 to 8 years, supporting all-round skill development with over 300 activities."
    },
    {
      question: "What is an E-book Bundle?",
      answer: "E-Book Bundle is an activity based printable worksheet where kids can practice. Kids can develop and retain skills 47 times more. Find out which activities are perfect for the children you teach and save time planning fun and engaging lessons."
    },
    {
      question: "Why one should purchase E-Book Bundle?",
      answer: "➥ Help boost academic proficiency in all subjects across all grade levels\n➥ Designed to make the entire learning experience more enjoyable for young minds.\n➥ Discover your child's hidden talent, spot weaknesses, and track progress with our worksheets."
    },
    {
      question: "How a Child will be benefited from this worksheet?",
      answer: "After practicing these worksheets, the child will have:\n➥ Fluent and flexible thinking\n➥ Excellent reasoning skills\n➥ Excellent problem solving skills\n➥ Targeted Skill Development\n➥ Urge Independent Learning\n➥ Building Strong Confidence\n➥ Boost Cognitive Skills\n➥ Foster Creativity and Imagination\n➥ Smart Learning, Smarter Kids\n\nYour child will learn quickly with less practice and repetition."
    },
    {
      question: "How we created Premium E-Book Bundle?",
      answer: "Our team of expert parents and teachers are working hard to make sure you have the tools you need to keep your little ones building new skills and have a fun learning journey. We are working hard to develop educational resources that make homeschooling and E-Learning Exciting, Challenging and Rewarding. There are 2000+ activity pages divided into 20 fun skills subjects and themes."
    },
    {
      question: "Is it a digital product (E-Book) or Physical Product?",
      answer: "Premium E-Books Bundle is a digital product which you can instantly access once you do the payment, and print whenever you wish."
    },
    {
      question: "Do I need any special skills or knowledge to use the printable?",
      answer: "No! All the tasks are easy and fun. As long as you're able to print it out, you don't need to have any additional skills."
    },
    {
      question: "What size paper should I print?",
      answer: "You will get A4 sized documents for optimal printing."
    },
    {
      question: "Can I print them with a black & white printer instead of a color printer?",
      answer: "Of course! It's up to you whether you decide to print it out in color or black & white. Nevertheless, we recommend you print it out in color as your child will get more benefits and fun from it."
    },
    {
      question: "Where do I download the printables?",
      answer: "Once you've made the purchase, you will receive an email with links to download all your purchased files."
    },
    {
      question: "What are the Payment methods do you support?",
      answer: "We covered each and every payment method including wallets(Paytm, Phonepay, Gpay), Net Banking, Debit or Credit Cards, etc."
    },
    {
      question: "Is there any expert support available?",
      answer: "Absolutely! We have a dedicated support team ready to assist you with any questions or challenges you may encounter while using the toolkit. You can reach out to us at azcontent101@gmail.com for guidance and expert advice."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:text-blue-600 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  <div className="whitespace-pre-line">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Email us at azcontent101@gmail.com
            </p>
            <p className="text-sm text-gray-500">
              (Support 24×7, 365 Days a Year)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
