import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, HelpCircle, User, CreditCard, MessageSquare, Navigation } from 'lucide-react';

const Help = () => {
  const faqSections = [
    {
      id: "general",
      title: "General FAQs Section",
      icon: <HelpCircle className="w-6 h-6" />,
      color: "from-blue-500 to-purple-600",
      items: [
        {
          question: "What is this platform about?",
          answer: "Our platform provides comprehensive solutions for your needs with an intuitive interface and powerful features."
        },
        {
          question: "How do I get started?",
          answer: "Simply sign up for an account, complete the onboarding process, and you'll be ready to explore all our features."
        },
        {
          question: "Is there a mobile app available?",
          answer: "Yes, we offer mobile apps for both iOS and Android devices, available in their respective app stores."
        }
      ]
    },
    {
      id: "platform",
      title: "Platform Usage FAQs",
      icon: <Navigation className="w-6 h-6" />,
      color: "from-green-500 to-teal-600",
      items: [
        {
          question: "How to navigate the platform?",
          answer: "Use the main navigation menu at the top of the page. Each section is clearly labeled, and you can access your dashboard from anywhere."
        },
        {
          question: "How to complete simulations?",
          answer: "Navigate to the simulations section, select your desired simulation, follow the step-by-step instructions, and submit your results when complete."
        },
        {
          question: "Can I save my progress?",
          answer: "Yes, all your progress is automatically saved as you work. You can resume from where you left off at any time."
        }
      ]
    },
    {
      id: "account",
      title: "Account FAQs",
      icon: <User className="w-6 h-6" />,
      color: "from-orange-500 to-red-600",
      items: [
        {
          question: "How do I register for an account?",
          answer: "Click the 'Sign Up' button, fill in your details, verify your email address, and you're ready to go!"
        },
        {
          question: "I'm having login issues, what should I do?",
          answer: "Try resetting your password using the 'Forgot Password' link. If issues persist, contact our support team."
        },
        {
          question: "How do I update my profile information?",
          answer: "Go to your account settings, click 'Edit Profile', make your changes, and save them."
        }
      ]
    },
    {
      id: "payment",
      title: "Payment FAQs",
      subtitle: "(if applicable)",
      icon: <CreditCard className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
      items: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise accounts."
        },
        {
          question: "How do refunds work?",
          answer: "Refunds are processed within 5-7 business days. Contact support with your transaction details to initiate a refund."
        },
        {
          question: "Can I change my pricing plan?",
          answer: "Yes, you can upgrade or downgrade your plan at any time from your account settings."
        }
      ]
    },
    {
      id: "support",
      title: "Contact Support Section",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-600",
      items: [
        {
          question: "How can I contact support?",
          answer: "You can reach us via email at support@example.com, through our live chat feature, or by submitting a support ticket."
        },
        {
          question: "What are your support hours?",
          answer: "Our support team is available 24/7 for urgent issues, with standard response times of 2-4 hours during business hours."
        },
        {
          question: "Do you offer phone support?",
          answer: "Phone support is available for premium plan subscribers. You can schedule a call through your account dashboard."
        }
      ]
    }
  ];

  const [openItem, setOpenItem] = useState(null);
  const handleToggle = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-inter">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">FAQ / Help Page</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Find answers to frequently asked questions and get the help you need</p>
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
            <HelpCircle className="w-5 h-5" />
            <span>Need help? We're here for you!</span>
          </div>
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {faqSections.map((section, sectionIndex) => (
            <div key={section.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className={`bg-gradient-to-r ${section.color} p-6 text-white flex items-center space-x-4`}>
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">{section.icon}</div>
                <h2 className="text-2xl font-bold">
                  {section.title}
                  {section.subtitle && <span className="text-lg font-normal opacity-80 ml-2">{section.subtitle}</span>}
                </h2>
              </div>

              <div className="p-6">
                {section.items.map((item, index) => {
                  const id = `${section.id}-${index}`;
                  const isOpen = openItem === id;
                  return (
                    <div key={id} className="mb-4  rounded-xl">
                      <button
                        className="w-full flex items-center justify-between px-6 py-4 text-left  transition"
                        onClick={() => handleToggle(id)}
                      >
                        <span className="text-gray-800 font-medium">{item.question}</span>
                        <ChevronDown className={`h-5 w-5 text-gray-600 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="bg-gray-50 px-6 py-4 text-gray-700 border-t border-gray-100 transition-all duration-200">
                          <p className="leading-relaxed">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Our support team is always ready to help you. Don't hesitate to reach out!
              </p>
              
              <div>
                <Link to="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200"> Contact Support</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
