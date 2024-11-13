import React from 'react';
import { Instagram, Twitter, Youtube, ExternalLink } from 'lucide-react';
import HexagonImage from './HexagonImage';

export default function AboutSection() {
  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/cootabrown',
      username: '@cootabrown'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/cootabrown',
      username: '@cootabrown'
    },
    {
      icon: Youtube,
      label: 'YouTube',
      href: 'https://youtube.com/@cootabrown',
      username: '@cootabrown'
    }
  ];

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <HexagonImage
              src="https://images.unsplash.com/photo-1601288496920-b6154fe3626a"
              alt="Coota Brown"
              size="lg"
              className="mx-auto mb-8"
            />
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-500 transition-colors group"
                >
                  <div className="flex flex-col items-center">
                    <social.icon className="w-6 h-6 mb-2" />
                    <span className="text-sm">{social.username}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">About Coota Brown</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Houston-based artist Coota Brown has been making waves in the music scene with his unique blend of southern rap and contemporary hip-hop. His journey from local underground sensation to rising star is marked by authenticity and raw talent.
              </p>
              <p>
                Following the success of Fighting My Sleep Vol 1, Coota returns with a more refined and introspective sound in Vol 2. The album showcases his growth as an artist while staying true to his Houston roots.
              </p>
              <p>
                With features in major publications and collaborations with established artists, Coota Brown is positioned to make a significant impact with this release.
              </p>
            </div>
            
            <a
              href="https://example.com/coota-brown-epk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-colors mt-8"
            >
              <span>View EPK</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}