import { Header } from "@/sections/Header"
import { Hero } from "@/sections/Hero"
import { LogoTicker } from "@/sections/LogoTicker"
import IconCloud from "@/sections/IconCloud";
import { Globe } from "@/sections/Globe";
import { Features } from "@/sections/Features";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
 

export default function Home() {
  return (
    <>
  <Header/>
  <Hero/>
  <LogoTicker/>
  <Features/>
  <Testimonials/>
  <CallToAction/>
  
  </>

  )
}

