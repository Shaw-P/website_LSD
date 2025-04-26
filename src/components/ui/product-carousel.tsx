import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import React from 'react';

const products = [
  {
    title: "智能點檢系統",
    description: "告別傳統紙本點檢，迎接效率化、精準化的智能點檢時代！我們的智能點檢系統，透過數位化流程，讓設備和項目的檢查工作變得前所未有的輕鬆與高效。",
    image: "/product_demo.png",
    details: `核心優勢：
              精確管理，權責分明： 完善的使用者權限管理機制，確保每位操作人員在授權範圍內執行檢查，並追蹤每一次點檢記錄。管理員可隨時進行簽核或退簽，確保檢查流程的嚴謹性。
              彈性客製，適用廣泛： 無論是生產線上的機台設備、辦公大樓的消防設施，或是任何需要定期檢查的項目，我們的系統都能靈活設定檢查內容與頻率，滿足您的多元需求。
              即時追蹤，降低風險： 檢查結果即時上傳，管理人員可隨時掌握設備或項目的最新狀態，快速發現潛在問題，及早預防，有效降低營運風險。
              數據分析，優化決策： 系統自動彙整點檢數據，生成報表，讓您清晰了解設備的健康狀況和檢查趨勢，為未來的維護和管理決策提供有力依據。
              量化亮點：

              提升點檢效率： 相較於傳統紙本作業，預計可節省至少 30% 的點檢時間。
              降低錯誤率： 數位化流程有效減少人為疏失，降低至少 20% 的檢查錯誤率。
              縮短問題反應時間： 即時通知與追蹤機制，可將問題反應與處理時間縮短至少 50%。`
  },
  {
    title: "Product 2",
    description: "Description for product 2",
    image: "/product_demo.png",
    details: "This is a detailed description of Product 2. It includes more information about the features and benefits of this product."
  },
  {
    title: "Product 3",
    description: "Description for product 3",
    image: "/product_demo.png",
    details: "This is a detailed description of Product 3. It includes more information about the features and benefits of this product."
  },
  {
    title: "Product 4",
    description: "Description for product 4",
    image: "/product_demo.png",
  }
];

const ProductCard = React.memo(({ product, onClick }: { product: typeof products[0], onClick: () => void }) => (
  <div 
    className="relative h-[400px] w-[300px] overflow-hidden rounded-lg bg-black/40 p-4 cursor-pointer hover:bg-black/60 transition-colors"
    onClick={onClick}
  >
    <div className="relative h-[250px] w-full overflow-hidden rounded-lg">
      <img
        src={product.image}
        alt={product.title}
        className="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div className="mt-4">
      <h3 className="text-xl font-bold text-white">{product.title}</h3>
      <p className="mt-2 text-gray-300 line-clamp-3">{product.description}</p>
      <div className="mt-4 flex items-center text-blue-400">
        <span className="text-sm">點擊查看詳情</span>
        <ChevronRight className="h-4 w-4 ml-1" />
      </div>
    </div>
  </div>
));

ProductCard.displayName = 'ProductCard';

export function ProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    skipSnaps: true,
    dragFree: true,
    slidesToScroll: 3,
  });

  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="products" className="py-32">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          我們的產品
        </motion.h2>
        
        <div className="relative w-full overflow-hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8 p-4">
              {products.map((product, index) => (
                <div key={index} className="flex-[0_0_33.333%] min-w-0">
                  <ProductCard 
                    product={product} 
                    onClick={() => setSelectedProduct(product)}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <Button
            variant="ghost"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && selectedProduct.details && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-black/40 rounded-lg p-8 max-w-4xl w-full relative max-h-[90vh] overflow-y-auto">
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300"
                onClick={() => setSelectedProduct(null)}
              >
                <X className="h-6 w-6" />
              </button>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-[400px]">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedProduct.title}</h3>
                    <p className="text-gray-300">{selectedProduct.description}</p>
                  </div>
                  <div className="border-t border-white/20 pt-6">
                    <h4 className="text-xl font-semibold text-white mb-4">詳細介紹</h4>
                    <div className="prose prose-invert max-w-none">
                      {selectedProduct.details.split('\n').map((line, index) => (
                        <p key={index} className="text-white/80 mb-3">
                          {line.trim()}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 