import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import  Link from "next/link";
import ShinyButton from "@/components/magicui/shiny-button";

export function FeaturesSection() {
  const features = [
    {
      title: "How it works?",
      description:
        "Our Aurora Tour starts from Rovaniemi and we go as far as needed to have a good chance to see Auroras, We do not have a kilometer or time limit.  This can naturally be as far as 800 kilometers both ways, but usually we drive around 200",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-3 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Get 95% of Possibility",
      description:
        "Northern lights can be seen if you have at least particularly clear sky and an okay solar activity. That is why our Aurora Hunts only happen if we think that there is a good chance to see the Northern Lights. In case the conditions doesnt favour us, we cancel the tour or postpone it to the next best day. With this we maintain high success rate but most importantly we try not to waste your time.",
      skeleton: <SkeletonTwo />,
      className:
        "col-span-1 lg:col-span-3 border-b dark:border-neutral-800",
    },
  ];

  return (
    <div className="relative z-20 py-10 lg:py-20 max-w-7xl mx-auto">
      <div className="px-8 text-center">
        <h4 className="text-2xl lg:text-3xl font-light text-black dark:text-white">
          Our Service
        </h4>
        <p className="text-xl font-light lg:text-2xl text-neutral-500 dark:text-neutral-300 my-4">
          One night Aurora Hunting Tour from Rovaniemi
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 border rounded-md dark:border-neutral-800">
        {features.map((feature) => (
          <FeatureCard key={feature.title} className={feature.className}>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
            <div className="h-full w-full">{feature.skeleton}</div>
          </FeatureCard>
        ))}
      </div>
      
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`p-4 sm:p-8 relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="text-xl md:text-2xl font-light text-black dark:text-white">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="text-sm font light md:text-base text-neutral-500 dark:text-neutral-300 my-2">
      {children}
    </p>
  );
};

const SkeletonOne = () => {
  return (
    <Link href="/tours">
      <div className="relative group cursor-pointer">
        <div className="flex justify-center w-full p-1 mx-auto bg-grey dark:bg-neutral-900 shadow-lg rounded-sm overflow-hidden">
          <div className="relative w-full">
            <Image
              src="/hero/bg3.jpg"
              alt="Dreaming Views"
              width={600}
              height={300}
              className="w-full h-auto object-cover rounded-sm transition duration-300 ease-in-out transform group-hover:opacity-30"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xl font-semibold text-black dark:text-white font-light">Explore Tours</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};



const SkeletonTwo = () => {
  const images = [
    "/hero/a1.jpg",
    "/hero/a2.jpg",
   
    "/hero/a4.jpg",
    "/hero/a5.jpg",
    "/hero/bg4.jpg",
    "/hero/a3.jpg",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  return (
    <div className="relative group flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      <div className="flex justify-center flex-row ">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={`image-${idx}`}
            style={{ rotate: Math.random() * 20 - 10 }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 border dark:border-neutral-700 overflow-hidden"
          >
            <Image
              src={image}
              alt={`AI capture ${idx + 1}`}
              width={500}
              height={500}
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
