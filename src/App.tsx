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
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
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
                {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
                <Smile className="ml-2 h-4 w-4" />
              </Button>
              {/* <Button size="lg" className="bg-white text-black border-white/20 hover:bg-white/90 hover:text-black">
                Learn More
              </Button> */}
            </motion.div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20" data-aos="fade-up">
          <ProductCarousel />
        </section>

        {/* Features Section */}
        <section className="py-32 bg-black/20 backdrop-blur-sm" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
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
                  className="bg-white/10 p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 臨時內容區塊 */}
        <section className="py-20 bg-black/20 backdrop-blur-sm" data-aos="fade-up">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
              測試區塊 1
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Array.from({ length: 4 }).map((_, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 p-8 rounded-lg"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <h3 className="text-xl font-bold text-white mb-4">測試標題 {index + 1}</h3>
                  <p className="text-white/80">
                    這是一段測試文字，用來確認頁面是否可以正常滾動。這是一段測試文字，用來確認頁面是否可以正常滾動。
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 另一個臨時內容區塊 */}
        <section className="py-20 bg-black/30 backdrop-blur-sm" data-aos="fade-up">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
              測試區塊 2
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 p-6 rounded-lg"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <h3 className="text-xl font-bold text-white mb-4">測試卡片 {index + 1}</h3>
                  <p className="text-white/80">
                    這是另一段測試文字，用來確認頁面是否可以正常滾動。
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;