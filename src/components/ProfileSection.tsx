import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import { FloatingIcons } from './FloatingIcons';

const socialLinks = [
  { icon: Github, href: 'https://github.com/IzumiFreelance', label: 'GitHub', style: 'bg-[#F7DC6F]' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/altaf-hussian-282ba9218/', label: 'LinkedIn', style: 'bg-[#0072b1]' },
  { icon: Instagram, href: 'https://www.instagram.com/altaf_hussain_3/', label: 'Instagram', style: 'bg-[#E1306C]' },
  { icon: Mail, href: 'mailto:izumiFreelance@gmail.com', label: 'Email', style: 'bg-[#34C759]' },
] 

export function ProfileSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col items-center space-y-6"
    >
      <FloatingIcons />
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-48 h-48 mx-auto mb-8"
      >
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQGo8981fhZ3-w/profile-displayphoto-shrink_400_400/B4DZPfVswaHMAk-/0/1734618829410?e=1740614400&v=beta&t=mLf4IxLLKzzmLXdqgCDh7FHxB_2t3s_OOflcB3c6k4Q"
          alt="Profile"
          className="rounded-full w-full h-full object-cover shadow-2xl"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-4 border-blue-500 border-dashed"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-4 rounded-full border-4 border-purple-500 border-dashed opacity-50"
        />
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-5xl font-bold text-gray-800 mb-4"
      >
        <span style={{ color: "#FF69B4", fontWeight: 600 }}>Altaf</span> <span style={{ color: "#FFC107", fontWeight: 600 }}>Hussain</span>
      </motion.h1>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col items-center gap-2 mb-8"
      >
        <p className="text-2xl text-purple-500">Full Stack Developer</p>
        <p className="text-blue-600 font-medium">Turning ideas into reality</p>
        <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=4000&pause=500&color=4CAF50&width=450&lines=Full-Stack+Web+Developer;Tech+Enthusiast;Lifelong+Learner;Open+Source+Contributor;AI+and+Blockchain+Explorer;Net+Philosopher" alt="Typing SVG" />

      </motion.div>

      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex items-center justify-center space-x-6 p-2 bg-white rounded-full shadow-lg"
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <social.icon className="w-6 h-6" />
            <span className="sr-only">{social.label}</span>
          </motion.a>
        ))}
      </motion.button>
    </motion.div>
  );
}