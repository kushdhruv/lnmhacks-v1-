import React from 'react';
import { Shield, Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-lg border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">MedChain</span>
            </div>
            <p className="text-gray-400">
              Empowering Medical Transparency with Blockchain Technology
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button className="hover:text-white transition-colors">About</button></li>
              <li><button className="hover:text-white transition-colors">Features</button></li>
              <li><button className="hover:text-white transition-colors">FAQ</button></li>
              <li><button className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button className="hover:text-white transition-colors">Privacy Policy</button></li>
              <li><button className="hover:text-white transition-colors">Terms of Service</button></li>
              <li><button className="hover:text-white transition-colors">Cookie Policy</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>© {new Date().getFullYear()} MedChain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}