import React from 'react';
import { Calendar } from 'lucide-react';
import HexagonImage from './HexagonImage';

export default function EventsSection() {
  return (
    <section className="bg-gradient-to-b from-black to-purple-900/20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
            <p className="text-gray-300 mb-8">
              Join Coota for exclusive events and experiences around the album release
            </p>
            <HexagonImage
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819"
              alt="Event Vibes"
              size="lg"
              className="mx-auto"
            />
          </div>
          
          <div className="flex-1 space-y-6">
            {[
              {
                title: "Album Launch Party",
                date: "2025-01-01",
                location: "Virtual Experience",
                description: "Be part of the exclusive album launch celebration"
              },
              {
                title: "Live Listening Session",
                date: "2024-12-31",
                location: "MINY Platform",
                description: "Final countdown listening party"
              },
              {
                title: "Meet & Greet",
                date: "2025-01-02",
                location: "Virtual Meet-up",
                description: "Get up close and personal with Coota"
              }
            ].map((event, index) => (
              <div 
                key={index}
                className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors"
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">{event.description}</p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}