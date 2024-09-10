import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

// Define the prop types for the Nav component
interface NavProps {
  containerStyles?: string;
  linkStyles?: string;
  underlineStyles?: string;
  onClick: () => void; // Correctly typed onClick function
}

// Define the links array with a specific type
const links: { path: string; name: string }[] = [
  { path: '/', name: 'Home' },
  { path: '/tours', name: 'Tours' },
  { path: '/contact', name: 'Contact' }
];

const Nav: React.FC<NavProps> = ({ containerStyles = '', linkStyles = '', underlineStyles = '', onClick }) => {
  const path = usePathname();

  return (
    <nav className={containerStyles}>
      {links.map((link) => (
        <Link 
          key={link.path} 
          href={link.path}
          className={`capitalize ${linkStyles}`}
          onClick={onClick} // Call the onClick function when the link is clicked
        >
          {link.path === path && (
            <motion.span 
              initial={{ y: '-100%' }} 
              animate={{ y: 0 }}
              transition={{ type: 'tween' }} 
              className={underlineStyles}
            />
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
