import './App.css';
import { BeamsBackground } from '@/components/ui/beams-background';
import { Header } from '@/components/ui/header';
import { Button } from '@/components/ui/button';
import { ProductCarousel } from '@/components/ui/product-carousel';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Smile } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
      delay: 0,
      disable: window.innerWidth < 768,
      throttleDelay: 99,
    });
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* 固定背景 */}
      <BeamsBackground intensity="strong" className="fixed inset-0 z-0" />
      
      {/* 固定導航欄 */}
      <Header />
      
      {/* 主要內容 */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Title
            </motion.h1>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Button size="lg" className="bg-white text-black hover:bg-white/90" onClick={scrollToProducts}>
                Let's Go
                <Smile className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20" data-aos="fade-up" data-aos-duration="600">
          <ProductCarousel />
        </section>

        {/* Features Section */}
        <section id="features" className="py-32">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              Features You'll Love
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "智能分析",
                  description: "使用先進的AI技術，為您提供深度數據分析和洞察",
                  icon: "📊"
                },
                {
                  title: "實時監控",
                  description: "24/7實時監控系統，確保您的業務始終在最佳狀態",
                  icon: "🔍"
                },
                {
                  title: "安全可靠",
                  description: "企業級安全防護，保護您的數據安全無憂",
                  icon: "🔒"
                },
                {
                  title: "易於使用",
                  description: "直觀的用戶界面，讓您輕鬆上手，快速掌握",
                  icon: "🎯"
                },
                {
                  title: "靈活擴展",
                  description: "根據您的需求靈活擴展，支持業務快速成長",
                  icon: "🚀"
                },
                {
                  title: "專業支持",
                  description: "專業的技術支持團隊，隨時為您提供幫助",
                  icon: "💡"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-black/40 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-white/10 rounded-lg text-2xl">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 測試區塊 */}
        <section id="test" className="py-32">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              測試區塊
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "測試項目 1",
                  description: "這是一個測試項目的描述文字，用於展示頁面效果。",
                  icon: "📊"
                },
                {
                  title: "測試項目 2",
                  description: "這是另一個測試項目的描述文字，用於展示頁面效果。",
                  icon: "🔧"
                },
                {
                  title: "測試項目 3",
                  description: "這是第三個測試項目的描述文字，用於展示頁面效果。",
                  icon: "⚡"
                },
                {
                  title: "測試項目 4",
                  description: "這是第四個測試項目的描述文字，用於展示頁面效果。",
                  icon: "🎯"
                }
              ].map((testItem, index) => (
                <motion.div
                  key={index}
                  className="bg-black/40 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-white/10 rounded-lg text-2xl">
                      {testItem.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{testItem.title}</h3>
                  </div>
                  <p className="text-gray-300">{testItem.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;