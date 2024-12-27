import { motion } from 'framer-motion';
import { stats } from '../data/stats';

export function Stats() {
  return (
    <div className="py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <stat.icon className="w-8 h-8 text-blue-600" />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
              className="text-3xl font-bold text-gray-800"
            >
              {stat.value}
            </motion.div>
            <div className="text-gray-600 mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}