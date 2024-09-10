// MobileNav.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';
import Nav from './Nav';
import Logo from './Logo';
import Socials from './Socials';

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuItemClick = () => {
    setIsOpen(false); // Close the sheet
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <AlignJustify
          className='cursor-pointer'
          onClick={() => setIsOpen(true)}
        />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-32'>
            <Logo />
            <Nav
              containerStyles='flex flex-col items-center gap-y-6'
              linkStyles='text-lg md:text-xl relative hover:text-primary transition-all'
              onClick={handleMenuItemClick} // Ensure the handler is passed here
            />
          </div>
          <Socials
            containerStyles='flex gap-x-4'
            iconsStyles='text-2xl'
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
