import React from 'react';
import { motion } from 'framer-motion';
import { ProfileSection } from './components/ProfileSection';
import { Stats } from './components/Stats';
import { TechStack } from './components/TechStack';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <ProfileSection lightMode />
        <Stats lightMode />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-16"
        >
          <motion.h2
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Technical Expertise
          </motion.h2>
          <TechStack lightMode />
        </motion.div>
      </div>
    </div>
  );
}

export default App;