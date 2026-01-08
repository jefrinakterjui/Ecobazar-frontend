"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const sliderData = [
  {
    id: 1,
    bgImage: "/BannarBig.png",
    subtitle: "Welcome to shop",
    title: "Fresh & Healthy Organic Food",
    offer: "30% OFF",
    description: "Free shipping on all your order.",
  },
  {
    id: 2,
    bgImage: "https://img.freepik.com/free-photo/smiling-young-female-gardener-uniform-wearing-gardening-hat-holds-vegetable-basket-isolated-green-wall_141793-96098.jpg?semt=ais_hybrid&w=740&q=80", 
    subtitle: "Organic & Fresh",
    title: "100% Organic Vegetables",
    offer: "25% OFF",
    description: "Fresh from the farm to your home.",
  },
  {
    id: 3,
    bgImage: "https://img.freepik.com/free-photo/young-beautiful-woman-gardener-apron-hat-holding-crate-full-vgetables-pumpkin-looking-it-with-serious-face_141793-37654.jpg?semt=ais_hybrid&w=740&q=80", 
    subtitle: "Organic & Fresh",
    title: "100% Organic Vegetables",
    offer: "25% OFF",
    description: "Fresh from the farm to your home.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-6 font-sans">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2 relative h-100 md:h-125 lg:h-150 rounded-lg overflow-hidden bg-gray-100 group">
            {sliderData.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={slide.bgImage}
                  alt={slide.title}
                  fill
                  className="object-cover object-center"
                  priority={index === 0} 
                />
                
                <div className="absolute inset-0 flex items-center p-8 md:p-12 lg:p-16">
                  <div className="max-w-125 animate-fade-in-up">
                    <span className="inline-block py-1 px-2 mb-4 text-primary font-medium tracking-wide bg-white/80 backdrop-blur-sm rounded md:bg-transparent md:backdrop-blur-none">
                      {slide.subtitle}
                    </span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                      {slide.title}
                    </h1>
                    
                    <div className="flex items-center gap-4 mb-8">
                      <div className="border-l-4 border-warning pl-4">
                        <p className="text-lg text-white">
                          Sale up to <span className="font-bold text-warning">{slide.offer}</span>
                        </p>
                        <p className="text-gray-200 text-sm">{slide.description}</p>
                      </div>
                    </div>

                    <Link
                      href="/shop"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Shop now <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
              {sliderData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? "bg-primary scale-125" : "bg-gray-400 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 h-full">
            
            <div className="relative h-50 md:h-60 lg:h-72 bg-gray-50 rounded-lg overflow-hidden  p-6 flex flex-col justify-center">
               <div className="absolute top-0 right-0 h-full w-[50%]">
                 <Image 
                    src="/BG.png" 
                    alt="Summer Sale" 
                    fill 
                    className="object-contain object-bottom-right"
                  />
               </div>
               
               <div className="relative z-10 max-w-[60%]">
                 <p className="uppercase text-xs font-medium text-dark-900 tracking-wider mb-2">Summer Sale</p>
                 <h3 className="text-3xl font-bold text-dark-900 mb-2">75% OFF</h3>
                 <p className="text-gray-500 text-sm mb-4">Only Fruit & Vegetable</p>
                 <Link href="/shop" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                   Shop Now <ArrowRight size={18} />
                 </Link>
               </div>
            </div>

            <div className="relative h-50 md:h-60 lg:h-72 bg-[#1f312b] rounded-lg overflow-hidden p-6 flex flex-col justify-center text-center items-center">
               <div className="absolute inset-0 opacity-20">
                  <Image 
                    src="/Bannar.png" 
                    alt="Pattern" 
                    fill 
                    className="object-cover"
                  />
               </div>
               
               <div className="relative z-10 text-white">
                 <p className="uppercase text-xs font-medium tracking-wider mb-2 text-gray-300">Best Deal</p>
                 <h3 className="text-2xl font-bold mb-4 leading-snug">
                   Special Products <br/> Deal of the Month
                 </h3>
                 <Link href="/shop" className="text-primary font-semibold flex items-center justify-center gap-2 hover:gap-3 transition-all hover:text-white">
                   Shop Now <ArrowRight size={18} />
                 </Link>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;