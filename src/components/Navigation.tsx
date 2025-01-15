import React from 'react';
import { Shield, Activity, Home, Info, MessageSquare, User, Menu } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { label: 'Home', icon: <Home className="w-5 h-5" /> },
    { label: 'About', icon: <Info className="w-5 h-5" /> },
    { label: 'Features', icon: <Shield className="w-5 h-5" /> },
    { label: 'Graphs', icon: <Activity className="w-5 h-5" /> },
    { label: 'Contact', icon: <MessageSquare className="w-5 h-5" /> },
  ];

  return (
    <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold">MedChain</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
            <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors">
              <User className="w-5 h-5" />
              <span>Connect Wallet</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center space-x-2 w-full py-3 px-4 text-gray-300 hover:text-white transition-colors"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
            <button className="flex items-center space-x-2 w-full py-3 px-4 mt-4 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors">
              <User className="w-5 h-5" />
              <span>Connect Wallet</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}