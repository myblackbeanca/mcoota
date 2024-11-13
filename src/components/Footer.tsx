import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Music } from 'lucide-react';
import { singles } from '../data/singles';

export default function Footer() {
  const socialLinks = [
    {
      icon: Instagram,
      label: 'Coota Instagram',
      href: 'https://instagram.com/coota',
    },
    {
      icon: Twitter,
      label: 'Coota Twitter',
      href: 'https://twitter.com/coota',
    },
    {
      icon: Youtube,
      label: 'Coota YouTube',
      href: 'https://youtube.com/@coota',
    },
    {
      icon: Music,
      label: 'MINY',
      href: 'https://instagram.com/minyvinyl',
    },
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-semibold mb-4">Singles</h3>
            <ul className="space-y-2">
              {singles.map((single) => (
                <li key={single.id}>
                  <Link
                    to={`/single/${single.slug}`}
                    className="text-gray-400 hover:text-purple-500 transition-colors"
                  >
                    {single.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-500 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <p className="text-gray-400">
              Fighting My Sleep Vol 2 - A journey through sound, coming January 1st, 2025.
            </p>
          </div>
        </div>
        
        <div className="text-center border-t border-white/10 pt-8">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Coota. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}