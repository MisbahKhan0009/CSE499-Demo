import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, Shield, Zap, ArrowRight, BookOpen, Code2, Database } from 'lucide-react';
import { ROUTES } from '@/lib/constants';
import { Badge, Card, ScrollArea, Separator } from '@/components/ui';

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 }
};

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#E5F2EF] to-white py-32">
        <div className="absolute inset-0 bg-[#2B6B5A]/5 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <Badge className="bg-[#2B6B5A]/20 text-[#2B6B5A] backdrop-blur-sm px-4 py-2 text-sm">
                CSE499A Project
              </Badge>
            </motion.div>
            <motion.h1 
              {...fadeInUp}
              className="text-5xl md:text-7xl font-bold text-[#2B6B5A] mb-6"
            >
              VisionGuard
            </motion.h1>
            <motion.p 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Advanced anomaly detection for security surveillance using cutting-edge deep learning technology.
            </motion.p>
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="mt-8 space-x-4"
            >
              <Link 
                to={ROUTES.DEMO}
                className="inline-flex items-center px-6 py-3 bg-[#2B6B5A] text-white rounded-lg hover:bg-[#1A4539] transition-all transform hover:scale-105 hover:shadow-lg backdrop-blur-sm"
              >
                Try Demo <ArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-[#2B6B5A] mb-12"
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: "Real-time Detection",
                description: "Precise anomaly detection with exact timestamp localization."
              },
              {
                icon: Shield,
                title: "Robust Performance",
                description: "Effective across diverse lighting and motion conditions."
              },
              {
                icon: Zap,
                title: "Instant Alerts",
                description: "Real-time anomaly notification system."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="p-6 backdrop-blur-sm bg-white/80 border-[#2B6B5A]/20 hover:bg-[#2B6B5A]/5 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-[#2B6B5A] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-2 text-[#2B6B5A]">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-20 bg-[#2B6B5A]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-[#2B6B5A] mb-12"
          >
            Research Background
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full backdrop-blur-sm bg-white/80 border-[#2B6B5A]/20">
                <CardHeader>
                  <BookOpen className="w-8 h-8 text-[#2B6B5A] mb-2" />
                  <CardTitle>Recent Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px] pr-4">
                    <div className="space-y-4">
                      {[
                        "Emerging trends in deep learning-based VAD",
                        "Explainable anomaly detection methods",
                        "Challenges in single-scene VAD",
                        "Integration of pre-trained large models",
                        "Advanced spatiotemporal feature extraction"
                      ].map((item, index) => (
                        <div key={index}>
                          <p className="text-gray-600">{item}</p>
                          {index < 4 && <Separator className="my-2" />}
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full backdrop-blur-sm bg-white/80 border-[#2B6B5A]/20">
                <CardHeader>
                  <Database className="w-8 h-8 text-[#2B6B5A] mb-2" />
                  <CardTitle>Technical Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px] pr-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-[#2B6B5A]">Architecture</h4>
                        <p className="text-gray-600">ResNet-101 & ResNet-120 for feature extraction and C3D for spatiotemporal analysis</p>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="font-semibold text-[#2B6B5A]">Dataset</h4>
                        <p className="text-gray-600">UCF-Crime dataset with 1,900 real-world surveillance videos</p>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="font-semibold text-[#2B6B5A]">Validation</h4>
                        <p className="text-gray-600">Shanghai-Tech Campus dataset for real-world testing</p>
                      </div>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;