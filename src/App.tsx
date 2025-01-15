import React from 'react';
import { Layout } from './components/Layout';
import { Shield, Activity, Users, Lock, Database } from 'lucide-react';

function App() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Empowering Medical Transparency with Blockchain
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Secure, transparent, and decentralized medical history management powered by blockchain technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors text-lg font-semibold w-full sm:w-auto">
              Connect Wallet
            </button>
            <button className="px-8 py-3 rounded-full bg-purple-500 hover:bg-purple-600 transition-colors text-lg font-semibold w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Shield className="w-12 h-12 text-blue-400" />,
              title: 'Secure Storage',
              description: 'Your medical data is encrypted and stored securely on the blockchain.',
            },
            {
              icon: <Activity className="w-12 h-12 text-green-400" />,
              title: 'Real-time Access',
              description: 'Access your medical history instantly from anywhere, anytime.',
            },
            {
              icon: <Users className="w-12 h-12 text-purple-400" />,
              title: 'Permission Control',
              description: 'Grant and revoke access to your medical data with ease.',
            },
            {
              icon: <Lock className="w-12 h-12 text-red-400" />,
              title: 'Data Privacy',
              description: 'Your data remains private and only accessible to authorized personnel.',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { value: '100K+', label: 'Users' },
            { value: '1M+', label: 'Records Stored' },
            { value: '99.9%', label: 'Uptime' },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 text-center"
            >
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take Control of Your Medical Data?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who trust MedChain for their medical history management.
          </p>
          <button className="px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors text-lg font-semibold">
            Get Started Now
          </button>
        </div>
      </section>
    </Layout>
  );
}

export default App;