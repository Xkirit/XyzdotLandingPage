import Button from "@/components/Button";
import starsBg from "@/assets/stars.png";

export const Hero = () => {
  return (
    <section 
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_5%,black_95%,transparent)]"
      style={{
        backgroundImage: `url(${starsBg.src})`
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(140,69,255,0.5)_0%,rgba(14,0,36,0.5)_70%,transparent_100%)]"></div>
      
      {/* Planet */}
      <div className="absolute size-64 md:size-96 bg-purple-500 rounded-full border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]">
      </div>
      
      {/* Ring 1 */}
      <div className="absolute size-[344px] md:size-[580px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1"></div>
        <div className="absolute size-5 left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1 inline-flex items-center justify-center">
          <div className="size-2 bg-white rounded-full"></div>
        </div>
      </div>
      
      {/* Ring 2 */}
      <div className="absolute size-[444px] md:size-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      </div>
      
      {/* Ring 3 */}
      <div className="absolute size-[544px] md:size-[980px] rounded-full border opacity-20 border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block md:block">
        <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1"></div>
        <div className="absolute size-5 left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1 inline-flex items-center justify-center">
          <div className="size-2 bg-white rounded-full"></div>
        </div>
      </div>
      
      <div className="container relative mt-16">
        <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">XYZ</h1>
        <p className="text-lg text-white/70 mt-5 md:text-xl max-w-xl mx-auto text-center">
          Meet the new Age of Social media
        </p>
        <div className="flex justify-center mt-5">
          <Button>Get Started</Button>
        </div>
      </div>
    </section>
  )
};