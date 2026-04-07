import { motion } from 'motion/react';
import { Code, Palette, Smartphone, Zap, Users, Lightbulb, Sparkles } from 'lucide-react';

interface Skill {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
}

export function Skills() {
  const skillsData: Skill[] = [
    {
      icon: <Code size={32} />,
      title: '前端开发',
      description: '精通现代前端技术栈，能够构建高性能的Web应用',
      skills: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX设计',
      description: '注重用户体验，创造美观且易用的界面设计',
      skills: ['Figma', 'Sketch', 'Adobe XD', '原型设计', '用户研究'],
    },
    {
      icon: <Smartphone size={32} />,
      title: '响应式设计',
      description: '确保在所有设备上都能提供优质的用户体验',
      skills: ['Mobile First', 'Adaptive Design', 'Cross-browser', 'PWA'],
    },
    {
      icon: <Zap size={32} />,
      title: '性能优化',
      description: '关注应用性能，提供流畅的用户体验',
      skills: ['代码优化', 'Lazy Loading', 'CDN', 'SEO优化'],
    },
    {
      icon: <Users size={32} />,
      title: '团队协作',
      description: '良好的沟通能力和团队协作精神',
      skills: ['Git/GitHub', 'Agile', 'Code Review', '文档编写'],
    },
    {
      icon: <Lightbulb size={32} />,
      title: '创新思维',
      description: '持续学习新技术，保持创新和探索精神',
      skills: ['问题解决', '创意思维', '快速学习', '技术研究'],
    },
  ];

  return (
    <section id="skills" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-purple-50/30 to-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-medium shadow-lg"
          >
            <Sparkles size={16} />
            核心能力
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              专业技能
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            结合设计思维与技术能力，为项目带来全方位的专业支持
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Glowing Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
              
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                {/* Icon with Gradient Background */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-20 h-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg"
                >
                  {skill.icon}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition duration-300" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {skill.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{skill.description}</p>

                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((s, idx) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 text-sm rounded-full border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="relative backdrop-blur-sm bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
            
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '50+', label: '完成项目', icon: '🚀' },
                { number: '30+', label: '合作客户', icon: '🤝' },
                { number: '5年+', label: '工作经验', icon: '⭐' },
                { number: '98%', label: '客户满意度', icon: '❤️' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-center backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20"
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}