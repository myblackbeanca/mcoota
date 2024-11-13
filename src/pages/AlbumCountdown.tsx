import React, { useState } from 'react';
import { Disc3, Play, Music, Video, Headphones, Film } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';
import MinyPreorder from '../components/MinyPreorder';
import EventsSection from '../components/EventsSection';
import HexagonImage from '../components/HexagonImage';
import PhoneModal from '../components/PhoneModal';
import PasswordModal from '../components/PasswordModal';
import AboutSection from '../components/AboutSection';
import TourGuide from '../components/TourGuide';
import { singles, exclusiveContent, albumReleaseDate } from '../data/singles';

export default function AlbumCountdown() {
  const [isPhoneModalOpen, setPhoneModalOpen] = useState(false);
  const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);
  const [selectedSingleSlug, setSelectedSingleSlug] = useState('');

  const handleClaimClick = () => {
    setPhoneModalOpen(true);
  };

  const handleSingleClick = (slug: string) => {
    setSelectedSingleSlug(slug);
    setPasswordModalOpen(true);
  };

  const subscriptionFeatures = [
    {
      icon: Music,
      title: 'Unreleased Music',
      description: 'Access exclusive tracks and extended cuts'
    },
    {
      icon: Video,
      title: 'Pre-Release Videos',
      description: 'Watch music videos before anyone else'
    },
    {
      icon: Film,
      title: 'Behind the Scenes',
      description: 'Exclusive studio sessions and creative process'
    },
    {
      icon: Headphones,
      title: 'Early Access',
      description: 'Listen to new releases 24 hours early'
    }
  ];

  return (
    <div className="pt-16">
      {/* Tour Guide */}
      <TourGuide />

      {/* Hero Section */}
      <section 
        id="hero-section"
        className="min-h-screen bg-cover bg-center relative"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1598488035139-bdbb2231ce04)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="relative min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
          <h1 className="text-6xl font-bold mb-6">Fighting My Sleep Vol 2</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            A journey through sound, dropping January 1st, 2025
          </p>
          <CountdownTimer targetDate={albumReleaseDate} className="mb-12" />
          <button
            onClick={handleClaimClick}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
          >
            Pre-order Now
          </button>
        </div>
      </section>

      {/* MINY Subscription Section */}
      <section 
        id="exclusives-section" 
        className="relative bg-gradient-to-b from-black to-purple-900/20 py-20"
      >
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/0 via-purple-500 to-purple-500/0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-purple-600/20 rounded-full text-purple-400 text-sm font-medium mb-4">
              MINY EXCLUSIVE
            </span>
            <h2 className="text-4xl font-bold mb-4">Join MINY Exclusives</h2>
            <p className="text-xl text-gray-300 mb-6">Get exclusive access to Coota's creative journey</p>
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-8">
              <span className="text-2xl font-bold text-purple-400">$4.99</span>
              <span className="text-gray-400">/month</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {subscriptionFeatures.map((feature, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors transform hover:-translate-y-1 duration-300">
                <feature.icon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://fin.minyvinyl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors transform hover:scale-105 duration-300"
            >
              <span>Subscribe Now</span>
              <Disc3 className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/0 via-purple-500 to-purple-500/0" />
      </section>

      {/* Singles Collection */}
      <section id="singles-section" className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Singles Collection</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {singles.map((single) => {
              const releaseDate = new Date(single.releaseDate);
              const isReleased = releaseDate <= new Date();
              
              return (
                <div key={single.id} className="text-center">
                  <div className="relative group">
                    <HexagonImage
                      src={single.artwork}
                      alt={single.title}
                      size="lg"
                      className="mx-auto mb-4"
                    />
                    <button
                      onClick={() => handleSingleClick(single.slug)}
                      className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Play className="w-12 h-12 text-white" />
                    </button>
                  </div>
                  <h3 className="font-semibold mb-2">{single.title}</h3>
                  <p className={`text-sm mb-4 ${isReleased ? 'text-green-500' : 'text-gray-400'}`}>
                    {isReleased ? 'Available Now' : releaseDate.toLocaleDateString()}
                  </p>
                  <button
                    onClick={() => handleSingleClick(single.slug)}
                    className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                  >
                    {isReleased ? 'Listen Now' : 'Preview'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pre-order Section */}
      <section id="preorder-section" className="bg-gradient-to-b from-black to-purple-900/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MinyPreorder onClaimClick={handleClaimClick} />
        </div>
      </section>

      {/* Events Section */}
      <section id="events-section">
        <EventsSection />
      </section>

      {/* About Section */}
      <section id="about-section">
        <AboutSection />
      </section>

      {/* Modals */}
      <PhoneModal
        isOpen={isPhoneModalOpen}
        onClose={() => setPhoneModalOpen(false)}
        onSubmit={(phone) => {
          console.log('Phone submitted:', phone);
          setTimeout(() => setPhoneModalOpen(false), 2000);
        }}
      />

      <PasswordModal
        isOpen={isPasswordModalOpen}
        onClose={() => setPasswordModalOpen(false)}
        singleSlug={selectedSingleSlug}
      />
    </div>
  );
}