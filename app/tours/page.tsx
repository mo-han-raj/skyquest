'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BadgeCheckIcon, MapPinIcon, CalendarIcon, CameraIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Link from 'next/link';
import dynamic from 'next/dynamic';

const BokunWidget = dynamic(() => import('./BokunWidget'), { ssr: false });

const TourPage = () => {
  return (
    <div className="container mx-auto px-4 py-10 lg:py-20 md:px-8 lg:px-20">
      
      <section className="relative mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Aurora Hunting from Rovaniemi</h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
              Experience the magic of the Northern Lights with a flexible and immersive adventure tailored just for you.
            </p>
          
          </div>
          <div className="relative h-72 md:h-full">
            <Image
              src="/work/p3.jpg"
              alt="Aurora Borealis"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section id='main-booking' className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <motion.div whileHover={{ translateX: 5 }} className="flex items-center space-x-4">
              <BadgeCheckIcon size={24} className="text-primary" />
              <p>No restrictions on distance or time</p>
            </motion.div>
            <motion.div whileHover={{ translateX: 5 }} className="flex items-center space-x-4">
              <CalendarIcon size={24} className="text-primary" />
              <p>Duration ranges from 5 to 12 hours</p>
            </motion.div>
            <motion.div whileHover={{ translateX: 5 }} className="flex items-center space-x-4">
              <CameraIcon size={24} className="text-primary" />
              <p>Photography included</p>
            </motion.div>
            <motion.div whileHover={{ translateX: 5 }} className="flex items-center space-x-4">
              <MapPinIcon size={24} className="text-primary" />
              <p>Complimentary pick-up and drop-off in Rovaniemi</p>
            </motion.div>
          </div>
          <div className="relative h-72 md:h-full">
            <Image
              src="/work/p1.jpg"
              alt="Northern Lights"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <div className="relative mt-0 ">
        {/* Other components or content */}
        <BokunWidget/>
      </div>
    </div>
  );
};

export default TourPage;
