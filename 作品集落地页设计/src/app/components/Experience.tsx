import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: '创新科技有限公司',
      position: '高级前端工程师 & UI设计师',
      period: '2023.01 - 至今',
      description: [
        '负责公司核心产品的前端架构设计与开发',
        '建立并维护设计系统，提升团队设计开发效率30%',
        '主导多个大型项目的UI/UX设计，获得用户高度评价',
        '指导初级设计师和开发者，推动团队技术成长',
      ],
      technologies: ['React', 'TypeScript', 'Figma', 'Tailwind CSS'],
    },
    {
      id: 2,
      company: '数字设计工作室',
      position: '全栈设计师',
      period: '2021.06 - 2022.12',
      description: [
        '独立完成10+客户项目的设计与前端开发',
        '参与品牌视觉识别系统设计，提升客户品牌认知度',
        '开发多个响应式网站，确保跨设备完美呈现',
        '与客户直接沟通，理解需求并提供专业设计建议',
      ],
      technologies: ['Vue.js', 'Adobe Suite', 'Sketch', 'Animation'],
    },
    {
      id: 3,
      company: '互联网创业公司',
      position: 'UI/UX设计师',
      period: '2019.09 - 2021.05',
      description: [
        '负责移动端APP的界面设计与交互设计',
        '进行用户研究和可用性测试，持续优化产品体验',
        '制作高保真原型，辅助产品决策',
        '协助前端团队实现设计稿，确保视觉还原度',
      ],
      technologies: ['Sketch', 'Principle', 'User Research', 'Prototyping'],
    },
    {
      id: 4,
      company: '设计学院',
      position: '视觉传达设计专业',
      period: '2015.09 - 2019.06',
      description: [
        '系统学习平面设计、UI设计和交互设计理论',
        '获得优秀毕业设计奖，作品被学院收藏',
        '担任设计社团负责人，组织多次设计活动',
        '实习期间参与多个商业项目，积累实战经验',
      ],
      technologies: ['Design Theory', 'Visual Design', 'Typography', 'Branding'],
    },
  ];

  return (
    <section id="experience" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
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
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 text-blue-300 rounded-full text-sm font-medium"
          >
            <TrendingUp size={16} />
            职业生涯
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              工作经历
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            多年的设计与开发经验，让我能够从多个角度理解和解决问题
          </p>
        </motion.div>

        <div className="relative">
          {/* Modern Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"
            />
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              } md:w-1/2`}
            >
              {/* Timeline Dot with Pulse */}
              <div
                className={`absolute top-8 left-8 md:left-auto ${
                  index % 2 === 0 ? 'md:right-[-13px]' : 'md:left-[-13px]'
                } z-20`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full ring-4 ring-slate-950" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full animate-ping opacity-75" />
                </motion.div>
              </div>

              {/* Content Card with Glass Effect */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className={`ml-20 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'
                } backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-2xl group`}
              >
                {/* Date Badge */}
                <div className="flex items-center gap-2 text-blue-400 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Calendar size={16} />
                  </div>
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {exp.position}
                </h3>

                <div className="flex items-center gap-2 text-gray-400 mb-6">
                  <Briefcase size={16} />
                  <span>{exp.company}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((desc, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="text-gray-300 flex items-start"
                    >
                      <span className="text-blue-400 mr-3 mt-1">▹</span>
                      <span>{desc}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 text-blue-300 text-sm rounded-full backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Decorative Corner Gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-transparent rounded-tr-3xl rounded-bl-full" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}