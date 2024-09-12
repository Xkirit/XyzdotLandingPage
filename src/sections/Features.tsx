'use client';

import { DotLottiePlayer } from "@dotlottie/react-player";
import productImage from "@/assets/product-image.png";
import Image from "next/image";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
  },
];

export const Features = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Elevate your Communication.
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5">
          Connect with the people you love in a new and modern interface
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3">
          {tabs.map(tab => (
            <div key={tab.title} className="border border-white/15 flex items-center p-2.5 rounded-xl gap-2.5">
              <div className="w-12 h-12 border border-white/15 rounded-lg flex items-center justify-center shrink-0">
                <DotLottiePlayer src={tab.icon} className="w-5 h-5" autoplay />
              </div>
              <div className="font-medium flex-grow">
                {tab.title}
              </div>
              {tab.isNew && (
                <div className="shrink-0 rounded-full text-xs font-semibold p-1 px-2 bg-purple-500 text-black">
                  new
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <div 
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundImage: `url(${productImage.src})`
            }}
          />
        </div>
      </div>
    </section>
  );
};