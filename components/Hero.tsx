import Link from "next/link";
import ShinyButton from "@/components/magicui/shiny-button";
import DevImg from "./DevImg";
import Particles from "./magicui/particles";

// Array of images for the DevImg component
const images = [
  "hero/a1.jpg",
  "hero/a2.jpg",
  "/hero/a3.jpg",
  "/hero/a4.jpg",
  "/hero/a5.jpg"
];

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          className="object-cover w-full h-full"
          src="/hero/bgvideo1.mp4" // Change this to the path of your video
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Content Overlay */}
      <div className="relative px-8 py-16 lg:px-10 lg:py-28 z-10">
        <div className="container mx-auto">
          <div className="p-20 flex justify-center xl:justify-between gap-x-8">
            {/* Text */}
            <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
              <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                Arctic SkyQuest
              </div>
              <h1 className="text-6xl mb-4 font-bold text-white">
                Providing the best Northern Lights experience
              </h1>
              <p className="subtitle max-w-[490px] mx-auto xl:mx-0 text-white">
                Our Aurora Tour starts from Rovaniemi and we go as far as needed
                to have a good chance to see Auroras. Learn more about the tour and
                book a lifetime experience with us.
              </p>
              {/* Buttons */}
              <div id="hero-button">
                <Link href={'/tours'}>
                  <ShinyButton text="Book Now" className="rounded-full bg-gradient-to-r from-cyan-400 to-green-600" />
                </Link>
              </div>
            </div>

            {/* Image
            <div className="hidden xl:flex relative">
              <DevImg images={images} containerStyles="w-[462px] h-[362px]" />
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
