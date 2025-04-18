import { useRef, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    title: '產品 1',
    description: '這是產品 1 的詳細描述',
    image: 'https://picsum.photos/300/200?random=1',
  },
  {
    title: '產品 2',
    description: '這是產品 2 的詳細描述',
    image: 'https://picsum.photos/300/200?random=2',
  },
  {
    title: '產品 3',
    description: '這是產品 3 的詳細描述',
    image: 'https://picsum.photos/300/200?random=3',
  },
  {
    title: '產品 4',
    description: '這是產品 4 的詳細描述',
    image: 'https://picsum.photos/300/200?random=4',
  },
];

export function ProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    loop: true,
  });

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
        
        <div className="relative">
          <div className="overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm" ref={emblaRef}>
            <div className="flex gap-12 p-12">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  className="flex-[0_0_400px] min-w-0"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="bg-white/10 border-white/20 text-white h-full hover:bg-white/20 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-2xl">{product.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-64 object-cover rounded-lg mb-6"
                      />
                      <CardDescription className="text-white/80 text-lg">
                        {product.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
} 