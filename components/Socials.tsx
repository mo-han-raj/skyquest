'use client';

import { RiYoutubeFill, RiLinkedinFill, RiGithubFill, RiFacebookFill, RiInstagramFill } from "react-icons/ri";
import Link from "next/link";

interface Icon {
  path: string;
  name: JSX.Element;
  hoverColor: string;  // Add hoverColor to store the hover class
}

interface SocialsProps {
  containerStyles?: string;
  iconsStyles?: string;
}

const icons: Icon[] = [
  { path: '/', name: <RiYoutubeFill />, hoverColor: 'hover:text-red-600' },
  { path: '/', name: <RiLinkedinFill />, hoverColor: 'hover:text-blue-600' },
  { path: '/', name: <RiGithubFill />, hoverColor: 'hover:text-gray-800' },
  { path: '/', name: <RiFacebookFill />, hoverColor: 'hover:text-blue-700' },
  { path: '/', name: <RiInstagramFill />, hoverColor: 'hover:text-pink-500' },
];

const Socials: React.FC<SocialsProps> = ({ containerStyles = '', iconsStyles = '' }) => {
  return (
    <div className={containerStyles}>
      {icons.map((icon, index) => (
        <Link href={icon.path} key={index}>
          <div className={`${iconsStyles} ${icon.hoverColor} transition-colors duration-300`}>
            {icon.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
