import { CaravanIcon, TentTreeIcon, HeartIcon } from 'lucide-react';



const infoData = [
  {
    icon: <TentTreeIcon size={24} />,
    title: "Personalized Adventure",
    text: 'Our tours are designed to give you the best possible chance to see the Northern Lights in all their glory.',
    aosDelay: "300",
  },
  {
    icon: <CaravanIcon size={24} />,
    title: "Luxurious Comfort",
    text: 'Travel in style with top-of-the-line vehicles, amenities, hot beverages, and snacks while waiting for the magic.',
    aosDelay: "300",
  },
  {
    icon: <HeartIcon size={24} />,
    title: "Your Safety, Our Priority",
    text: 'Our trained guides, emergency-equipped vehicles ensure your safety and comfort during the entire tour.',
    aosDelay: "300",
  },
];

const About = () => {
  return (
    <div className="relative px-8 py-16 lg:px-20 lg:py-28">
      <div className="flex justify-center mb-12">
        <h1 className="text-2xl  md:text-3xl font-light">Our Mission </h1>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
          {infoData.map((data, index) => (
            <div 
            key={index}
            className="relative flex flex-col items-center bg-white bg-opacity-10 rounded-lg backdrop-blur-sm p-8 text-center text-lg md:text-xl 
                       shadow-lg dark:shadow-gray-800 border border-white/20 transition-all hover:shadow-xl dark:hover:shadow-gray-600 min-h-[250px]"
            >
              <div className="absolute top-4 left-4 p-2 text-primary">{data.icon}</div>
              <div className="mt-12 flex flex-col justify-center items-center">
                <h3 className="mb-2 text-2xl font-light">{data.title}</h3>
                <p className="text-base font-light">{data.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="dark:block hidden absolute bottom-0 left-0 w-full h-[200px] lg:h-[300px] pointer-events-none">
          <div 
            className="h-full bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: "url('/wave.GIF')"}}
          >
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
