import { motion } from 'framer-motion';
import { techCategories } from '../data/techCategories';
import { animations } from '../utils/animations';

export function TechStack() {
  return (
    <motion.div
      variants={animations.container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
    >
      {techCategories.map(({ icon: Icon, label, skills }) => (
        <motion.div
          key={label}
          variants={animations.item}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="flex flex-col p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          <div className="flex items-center mb-4">
            <Icon className="w-8 h-8 text-blue-600" />
            <h3 className="ml-3 font-semibold text-gray-800">{label}</h3>
          </div>
          <ul className="space-y-2">
            {skills.map((skill) => (
              <li key={skill} className="text-gray-600 text-sm">
                • {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
}