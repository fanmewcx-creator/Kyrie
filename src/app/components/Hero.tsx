import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowDown, Sparkles, Award, Code2, Zap, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
      {/* Complex Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Multiple Gradient Orbs with different animations */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -80, 0],
            y: [0, 80, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-pink-500/20 via-purple-500/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-transparent rounded-full blur-3xl"
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Artistic Typography */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative Elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -left-20 -top-20 w-40 h-40 border border-blue-500/20 rounded-full"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -right-10 -bottom-10 w-32 h-32 border border-purple-500/20 rounded-full"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative inline-flex items-center gap-3 mb-8 px-6 py-3 backdrop-blur-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 text-blue-300 rounded-full text-sm font-medium overflow-hidden group"
            >
              <motion.div
                animate={{
                  x: [-1000, 1000],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              />
              <Sparkles size={16} className="animate-pulse relative z-10" />
              <span className="relative z-10">Creative Designer & Developer</span>
              <Star size={16} className="animate-spin relative z-10" style={{ animationDuration: '3s' }} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-8 relative"
            >
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  className="block text-6xl sm:text-7xl lg:text-8xl font-bold text-white/90 mb-4 tracking-tight"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  你好，
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                  className="block text-6xl sm:text-7xl lg:text-8xl font-bold mb-4 tracking-tight relative"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  <span className="relative inline-block">
                    我是
                    <motion.span
                      className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-xl"
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </span>
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
                  className="relative inline-block"
                >
                  <span className="text-6xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    张思远
                  </span>
                  <motion.div
                    className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.8, ease: "easeInOut" }}
                    style={{ transformOrigin: 'left' }}
                  />
                </motion.div>
              </div>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="relative"
            >
              <p className="text-xl sm:text-2xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                专注于创造
                <span className="text-blue-400 font-semibold"> 优雅的数字体验</span>。
                <br />
                结合设计美学与技术创新，
                <br />
                打造令人
                <span className="text-purple-400 font-semibold"> 印象深刻</span>
                的产品界面与交互体验。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] font-semibold text-lg"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Code2 size={22} />
                  探索作品
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 backdrop-blur-xl bg-white/5 border-2 border-white/20 text-white rounded-2xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center gap-2 font-semibold text-lg overflow-hidden bg-[#ffffff0d]"
              >
                <Award size={22} />
                <span>下载简历</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.8 }}
              className="flex gap-4"
            >
              {[
                { icon: Github, href: '#', color: 'from-gray-600 to-gray-800' },
                { icon: Linkedin, href: '#', color: 'from-blue-600 to-blue-800' },
                { icon: Mail, href: '#', color: 'from-purple-600 to-pink-600' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 + index * 0.1 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`group relative p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl hover:border-white/30 transition-all duration-300 overflow-hidden`}
                >
                  <social.icon size={22} className="relative z-10 text-gray-300 group-hover:text-white transition-colors" />
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  />
                </motion.a>
              ))}
            </motion.div>

            {/* Floating Achievement Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="mt-16 grid grid-cols-3 gap-4"
            >
              {[
                { label: '项目', value: '50+', icon: Zap, color: 'from-blue-500 to-cyan-500' },
                { label: '客户', value: '30+', icon: Award, color: 'from-purple-500 to-pink-500' },
                { label: '经验', value: '5年', icon: Star, color: 'from-orange-500 to-red-500' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 group overflow-hidden"
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  <stat.icon size={20} className={`mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Artistic Image Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Floating Geometric Shapes */}
            <motion.div
              animate={{
                y: [0, -30, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-10 -left-10 w-40 h-40 border-2 border-blue-500/30 rounded-3xl backdrop-blur-sm bg-blue-500/5 rotate-12 z-20"
            />
            <motion.div
              animate={{
                y: [0, 30, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-sm z-20"
            />

            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.4 }}
              className="relative group"
              style={{ perspective: '1000px' }}
            >
              {/* Multiple layered shadows for depth */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 blur-3xl group-hover:opacity-40 transition duration-500" />
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-50 blur-2xl group-hover:opacity-75 transition duration-500" />
              
              {/* Main image container with artistic frame */}
              <div className="relative backdrop-blur-xl bg-white/5 p-3 rounded-3xl border border-white/20 overflow-hidden">
                {/* Inner glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
                
                <motion.div
                  className="relative overflow-hidden rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1774853094610-89be6f1a7690?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrJTIwbWluaW1hbHxlbnwxfHx8fDE3NzU0MTY1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Workspace"
                    className="rounded-2xl w-full"
                  />
                  {/* Gradient overlay for artistic effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                </motion.div>
              </div>

              {/* Orbiting Icons */}
              {[
                { icon: Code2, angle: 45, color: 'text-blue-400' },
                { icon: Sparkles, angle: 135, color: 'text-purple-400' },
                { icon: Zap, angle: 225, color: 'text-pink-400' },
                { icon: Star, angle: 315, color: 'text-cyan-400' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute w-14 h-14 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center ${item.color}`}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.5,
                  }}
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: `${Math.cos(item.angle * Math.PI / 180) * 200}px ${Math.sin(item.angle * Math.PI / 180) * 200}px`,
                  }}
                >
                  <item.icon size={24} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToPortfolio}
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center text-gray-400 hover:text-blue-400 transition-colors group"
          >
            <span className="text-sm mb-3 tracking-wider uppercase">向下探索</span>
            <div className="relative w-8 h-12 border-2 border-current rounded-full p-1">
              <motion.div
                animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-current rounded-full mx-auto"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}