import React from 'react';
import { Play, Calendar, Share2, ShoppingBag } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';
import VideoPlayer from '../components/VideoPlayer';
import { Single } from '../data/singles';

interface SinglePageProps {
  single: Single;
}

export default function SinglePage({ single }: SinglePageProps) {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${single.artwork})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        
        <div className="relative min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <h1 className="text-6xl font-bold mb-4">{single.title}</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">{single.description}</p>
          
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-colors">
              <Play className="w-5 h-5" />
              <span>Listen Now</span>
            </button>
            <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full text-lg font-medium transition-colors">
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      {single.videoUrl && (
        <section className="bg-black py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Official Video</h2>
            <VideoPlayer
              thumbnailUrl={single.artwork}
              videoUrl={single.videoUrl}
            />
          </div>
        </section>
      )}

      {/* Countdown & Events Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <CountdownTimer targetDate={single.releaseDate} />
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
              {single.events.map((event) => (
                <div 
                  key={event.id}
                  className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-gray-400">{event.description}</p>
                      <div className="flex items-center space-x-2 mt-4 text-sm text-gray-300">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lyrics Section */}
      <section className="bg-gradient-to-b from-black to-purple-900/20 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Lyrics</h2>
          <div className="bg-white/5 rounded-lg p-8 whitespace-pre-line font-medium">
            {single.lyrics}
          </div>
        </div>
      </section>

      {/* Merch Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Exclusive Merch</h2>
            <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full text-lg font-medium transition-colors">
              <ShoppingBag className="w-5 h-5" />
              <span>View All</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {single.merchandise.map((item) => (
              <div 
                key={item.id}
                className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-colors"
              >
                <div className="aspect-square">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-4">${item.price.toFixed(2)}</p>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}