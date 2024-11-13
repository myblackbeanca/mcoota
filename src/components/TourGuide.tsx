import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, X, Music, Calendar, Disc3, Users, ShoppingBag } from 'lucide-react';

interface TourStep {
  title: string;
  description: string;
  icon: React.ElementType;
  targetId: string;
}

export default function TourGuide() {
  const [isOpen, setIsOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  const steps: TourStep[] = [
    {
      title: "Album Countdown",
      description: "Watch the countdown to Fighting My Sleep Vol 2's release. Stay updated on exactly when you can experience the full album.",
      icon: Music,
      targetId: "hero-section"
    },
    {
      title: "MINY Exclusives",
      description: "Subscribe to get exclusive access to unreleased tracks, behind-the-scenes content, and early releases.",
      icon: Disc3,
      targetId: "exclusives-section"
    },
    {
      title: "Singles Collection",
      description: "Preview and listen to released singles from the album. Each track tells its own story leading up to the full release.",
      icon: Music,
      targetId: "singles-section"
    },
    {
      title: "Upcoming Events",
      description: "Join virtual listening parties, meet & greets, and exclusive events around the album release.",
      icon: Calendar,
      targetId: "events-section"
    },
    {
      title: "Pre-order Options",
      description: "Secure your copy of the album in your preferred format - MINY, CD, Cassette, or get the complete bundle.",
      icon: ShoppingBag,
      targetId: "preorder-section"
    },
    {
      title: "About Coota",
      description: "Learn about Coota Brown's journey and connect on social media to stay updated.",
      icon: Users,
      targetId: "about-section"
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      const element = document.getElementById(steps[currentStep + 1].targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      const element = document.getElementById(steps[currentStep - 1].targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  if (!isOpen) return null;

  const CurrentIcon = steps[currentStep].icon;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-gray-900 rounded-2xl p-6 shadow-xl border border-purple-500/20 max-w-md w-full mx-4">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-purple-600 p-3 rounded-full">
            <CurrentIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold">{steps[currentStep].title}</h3>
            <p className="text-sm text-gray-400">Step {currentStep + 1} of {steps.length}</p>
          </div>
        </div>

        <p className="text-gray-300 mb-6">{steps[currentStep].description}</p>

        <div className="flex justify-between items-center">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${currentStep === 0 
                ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                : 'bg-white/10 text-white hover:bg-white/20'}`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <button
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${currentStep === steps.length - 1
                ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                : 'bg-purple-600 text-white hover:bg-purple-700'}`}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}