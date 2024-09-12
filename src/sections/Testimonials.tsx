import React from 'react';
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";

const testimonials = [
  {
    text: "This product has completely transformed how I manage my projects and deadlines",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "These AI tools have completely revolutionized our SEO entire strategy overnight",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "The user interface is so intuitive and easy to use, it has saved us countless hours",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "Our team's productivity has increased significantly since we started using this tool",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl text-center tracking-tighter font-medium">Beyond Expectations.</h2>
        <p className="text-white/70 text-lg text-center mt-5 tracking-tight">Transforming Society one post at a time.</p>
        <div className="mt-10 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1/6 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-1/6 bg-gradient-to-l from-black to-transparent z-10"></div>
          <div className="flex ">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={`${testimonial.name}-${index}`} className="flex-none w-96 px-3">
                <div className="border border-white/15 p-6 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] flex-1 max-w-s md:max-w-md">
                  <div className="text-lg tracking-tight relative">
                    <span className="absolute -left-2 -top-2 text-2xl text-purple-500">"</span>
                    {testimonial.text}
                    <span className="absolute -right-2 -bottom-2 text-2xl text-purple-500">"</span>
                  </div>
                  <div className="flex items-center gap-3 mt-5">
                    <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-purple-600 after:mix-blend-soft-light before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
                      <Image
                        src={testimonial.avatarImg}
                        alt={`Avatar for ${testimonial.name}`}
                        className="w-11 h-11 rounded-lg grayscale"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div>{testimonial.name}</div>
                      <div className="text-white/50 text-sm">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};