'use client'
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ImageGallery from './ImageGallery';
import BokunWidgetCalendar from '@/components/BokunWidgetCalender';

const TourDetailsPage: React.FC = () => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [isPickupOpen, setIsPickupOpen] = useState(false);

  const toggleDescription = () => setIsDescriptionOpen(!isDescriptionOpen);
  const togglePickup = () => setIsPickupOpen(!isPickupOpen);
  return (
    <div className='container mx-auto px-4 py-8  lg:gap-8 lg:px-0'>
    <ImageGallery/>
    <div className="container mx-auto px-4 py-8 lg:flex lg:gap-8 lg:px-0">
      
      {/* Left side - Tour Details */}
      <div className="lg:w-2/3">
        <h1 className="text-3xl font-bold mb-4">Arctic SkyQuest: Your Guaranteed Ticket to Seeing the Northern Lights</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Easy</h2>
          <p className="mt-2">
            Experience the magic of the Northern Lights with Arctic SkyQuest. Our exclusive, small-group tours from Rovaniemi guarantee an unforgettable Aurora adventure—or you pay nothing. Travel as far as necessary, with professional photography and video vlogs included.
          </p>
        </section>

        <section className="mb-8">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="bg-gray-200 rounded-t-lg">
            <TabsTrigger value="description" className="px-4 py-2">Description</TabsTrigger>
            <TabsTrigger value="pickup" className="px-4 py-2">Pickup</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="p-4 border border-t-0 border-gray-200 rounded-b-lg">
            <p className="mb-4">
              Our Northern Lights tours depart from Rovaniemi and are tailored to the season, weather, and solar activity, ensuring the best possible conditions for Aurora viewing. We venture as far as needed, often traveling up to 800 kilometers, though the typical journey is around 200 kilometers. The duration of the tour can vary between 5 and 12 hours, depending on how long it takes to find the perfect spot.
            </p>
            <h2 className="text-2xl font-semibold">Tour Highlights:</h2>
            <ul className="list-disc ml-5 mt-2 space-y-2">
              <li>Unlimited Adventure: Our tours have no limits on distance or duration. We travel up to 800 kilometers round trip, spending as long as necessary to find the clearest skies and the most vibrant Northern Lights.</li>
              <li>Photography & Video Vlogs: Capture the magic of the Northern Lights with our included professional photography service. We also provide video vlogs of your journey, documenting your reactions and the Aurora itself.</li>
              <li>Flexible Payment: Pay the full tour price only if you see the Northern Lights; otherwise, you’ll just cover the shared fuel costs.</li>
              <li>Comfort & Convenience: Enjoy complimentary pick-up and drop-off from your accommodation in Rovaniemi.</li>
              <li>Small Group Experience: Designed for small groups of up to eight people for a personalized adventure.</li>
            </ul>
          </TabsContent>

          <TabsContent value="pickup" className="max-h-64 overflow-y-auto p-4 border border-t-0 border-gray-200 rounded-b-lg">
            <p className="mb-4">We offer pick-up to the following places for this experience:</p>
            <ul className="list-disc ml-5 mt-2 space-y-2">
              <li>Custom pick up</li>
              <li>Apukka Resort (50 minutes before the tour starting time)</li>
              <li>Arctic City Hotel (Meeting at the safari office 5 minutes before the tour starting time)</li>
              <li>Arctic Light Hotel (Meeting at the safari office 5 minutes before the tour starting time)</li>
              <li>Arctic TreeHouse Hotel (35 minutes before the tour starting time)</li>
              <li>Guesthouse Borealis (15 minutes before the tour starting time)</li>
              <li>HAAWE Boutique Apart Hotel</li>
              <li>Holiday House Lapland (30 minutes before the tour starting time)</li>
              <li>Hostel Café Koti (Meeting at the safari office 5 minutes before the tour starting time)</li>
              <li>Hostel Ibedcity (35 minutes before the tour starting time)</li>
              <li>Hostel Rudolf (20 minutes before the tour starting time)</li>
              <li>Hotel Aakenus (20 minutes before the tour starting time)</li>
              <li>Hotel Santa Claus (Meeting at the safari office 5 minutes before the tour starting time)</li>
              <li>Hotel Scandic Rovaniemi (Meeting at the safari office 5 minutes before the tour starting time)</li>
              <li>Kotareitti (25 minutes before the tour starting time)</li>
              <li>Lapland Hotel Ounasvaara Chalets (30 minutes before the tour starting time)</li>
              <li>Lapland Hotel Sky Ounasvaara (30 minutes before the tour starting time)</li>
              <li>Lomavekarit (35 minutes before the tour starting time)</li>
              <li>Lumimaa - Snowland</li>
              <li>Motelli Rovaniemi (40 minutes before the tour starting time)</li>
              <li>Napapiirin Saarituvat (35 minutes before the tour starting time)</li>
              <li>Nova Skyland Hotel (40 minutes before the tour starting time)</li>
              <li>Original Sokos Hotel Vaakuna (Meeting at the safari office 5 minutes before the tour starting time)</li>
              <li>Ounasvaara Lakituvat Chalets (30 minutes before the tour starting time)</li>
              <li>Rovaniemi Airport (30 minutes before the tour starting time)</li>
              <li>Santa Claus Holiday Village (40 minutes before the tour starting time)</li>
              <li>Santa's Hotel Santa Claus (40 minutes before the tour starting time)</li>
              <li>Santa's Igloos Arctic Circle (40 minutes before the tour starting time)</li>
              <li>SantaSport (25 minutes before the tour starting time)</li>
              <li>Scandic Pohjanhovi (Meeting at the safari office 5 minutes before the tour starting time)</li>
              <li>Scandic Polar</li>
              <li>Scandic Rovaniemi City</li>
              <li>Snowman World (40 minutes before the tour starting time)</li>
            </ul>
          </TabsContent>
        </Tabs>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">What's included?</h2>
          <ul className="list-disc ml-5 mt-2 space-y-2">
            <li>Professional Northern Lights photography service</li>
            <li>Video vlogs documenting your journey and reactions</li>
            <li>Complimentary pick-up and drop-off from your accommodation in Rovaniemi</li>
            <li>No distance or time restrictions—travel as far and as long as needed to find the Aurora</li>
            <li>Flexible payment: Pay only if you see the Northern Lights</li>
            <li>Small group size (up to 8 people) for a personalized experience</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Exclusions</h2>
          <ul className="list-disc ml-5 mt-2 space-y-2">
            <li>Food and drinks</li>
            <li>Winter clothing and gear</li>
            <li>Personal expenses</li>
            <li>Travel insurance</li>
            <li>Gratuities for the guide (optional but appreciated)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">What do I need to bring?</h2>
          <p className="mt-2">Ensure you have a comfortable and enjoyable experience by coming prepared:</p>
          <ul className="list-disc ml-5 mt-2 space-y-2">
            <li>Warm Layers: Thermal underwear, fleece/wool sweaters, and a high-quality insulated jacket and pants.</li>
            <li>Winter Accessories: Hat, gloves, scarf, thick wool socks, and insulated waterproof boots.</li>
            <li>Additional Essentials: Hand warmers, thermal blanket, backpack, water bottle.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Cancellation policy</h2>
          <p className="mt-2">Refund if canceled at least 3 days before the event.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">More Info</h2>
          <p className="mt-2">Experience type: Day tour / activity</p>
          <p className="mt-2">Booking in advance: Cut off: 3 hours</p>
          <p className="mt-2">Difficulty: Easy</p>
          <p className="mt-2">Minimum age of passengers: 11</p>
          <p className="mt-2">Categories: Day trips and excursions, Family friendly, Couples, Private experience</p>
        </section>
      </div>

      {/* Right side - Bokun Widget */}
      <div className="lg:w-1/3 mt-8 lg:mt-0">
        <BokunWidgetCalendar />
      </div>
    </div>
    </div>
  );
};

export default TourDetailsPage;
