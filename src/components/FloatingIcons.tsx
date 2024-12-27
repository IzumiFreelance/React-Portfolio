// import { motion } from 'framer-motion';
// import { Code, Database, GitBranch, Globe, Layout, Server, Settings, Smartphone } from 'lucide-react';
// import { type IconFloatingConfig } from '../types/icons';

// const floatingIcons: IconFloatingConfig[] = [
//   { Icon: Code, x: '10%', y: '20%', duration: 8 },
//   { Icon: Database, x: '85%', y: '15%', duration: 9 },
//   { Icon: GitBranch, x: '75%', y: '70%', duration: 7 },
//   { Icon: Globe, x: '15%', y: '75%', duration: 10 },
//   { Icon: Layout, x: '20%', y: '40%', duration: 8.5 },
//   { Icon: Server, x: '80%', y: '40%', duration: 9.5 },
//   { Icon: Settings, x: '40%', y: '80%', duration: 7.5 },
//   { Icon: Smartphone, x: '60%', y: '20%', duration: 8.8 },
// ];

// export function FloatingIcons() {
//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       {floatingIcons.map(({ Icon, x, y, duration }, index) => (
//         <motion.div
//           key={index}
//           className="absolute text-blue-200/30"
//           initial={{ x, y }}
//           animate={{
//             y: [`${parseInt(y) - 5}%`, `${parseInt(y) + 5}%`],
//           }}
//           transition={{
//             duration,
//             repeat: Infinity,
//             repeatType: 'reverse',
//             ease: 'easeInOut',
//           }}
//         >
//           <Icon size={24} />
//         </motion.div>
//       ))}
//     </div>
//   );
// }
import { motion } from 'framer-motion';
import { Code, Database, GitBranch, Globe, Layout, Server, Settings, Smartphone } from 'lucide-react';
import { type IconFloatingConfig } from '../types/icons';

const floatingIcons: IconFloatingConfig[] = [
  { Icon: Code, x: '10%', y: '20%', duration: 8 },
  { Icon: Database, x: '85%', y: '15%', duration: 9 },
  { Icon: GitBranch, x: '75%', y: '70%', duration: 7 },
  { Icon: Globe, x: '15%', y: '75%', duration: 10 },
  { Icon: Layout, x: '20%', y: '40%', duration: 8.5 },
  { Icon: Server, x: '80%', y: '40%', duration: 9.5 },
  { Icon: Settings, x: '40%', y: '80%', duration: 7.5 },
  { Icon: Smartphone, x: '60%', y: '20%', duration: 8.8 },
];

interface FloatingIconsProps {
  darkMode: boolean;
}

export function FloatingIcons({ darkMode }: FloatingIconsProps) {
  return (
    <motion.div
      className="fixed inset-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {floatingIcons.map(({ Icon, x, y, duration }, index) => (
        <motion.div
          key={index}
          className={`absolute ${darkMode ? 'text-white' : 'text-blue-200/30'}`}
          style={{ [x]: 0, [y]: 0 }}
          initial={{ x, y }}
          animate={{
            [y]: [`${parseInt(y) - 5}%`, `${parseInt(y) + 5}%`],
          }}
          transition={{
            duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          <Icon size={24} />
        </motion.div>
      ))}
    </motion.div>
  );
}