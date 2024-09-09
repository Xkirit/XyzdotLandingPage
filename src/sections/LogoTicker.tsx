
// import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import Marquee from "@/components/magicui/marquee";
export const LogoTicker = () => {
  const logos = [
    {
      name: "Acme",
      src: "./assets/logo-acme.png",
    },
    {
      name: "Pulse",
      src: "./assets/logo-pulse.png",
    },
    {
      name: "Echo",
      src: "./assets/logo-echo.png",
    },
    {
      name: "Celestial",
      src: "./assets/logo-celestial.png",
    },
    {
      name: "Apex",
      src: "./assets/logo-apex.png",
    },
    {
      name: "Quantum",
      src: "./assets/logo-quantum.png",
    },
  ];
  return (
    <section className="py-20 md:py-20">
  <div className="container">
    <div className="flex flex-col  items-center">
      <div className="flex-1 lg:w-1/3 lg:pr-5">
        <h2 className="text-center font-thin ">Trusted by top Venture Firms</h2>
      </div>
      <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
        {/* Marquee for logos */}
        <Marquee pauseOnHover className="[--duration:20s]">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="h-16 w-auto mx-8 py-5"
            />
          ))}
        </Marquee>

        {/* Fade effect on the left */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-background"></div>

        {/* Fade effect on the right */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-background"></div>
      </div>
    </div>
  </div>
</section>

      
  );
};
