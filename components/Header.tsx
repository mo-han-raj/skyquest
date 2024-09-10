'use client';
import React, { useState, useEffect } from "react";
// components
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import ShinyButton from "@/components/magicui/shiny-button";
import Link from "next/link";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Update header style on scroll
      if (window.scrollY > 50) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      // Determine if the button is visible
      const button = document.querySelector("#hero-button");
      if (button) {
        const rect = button.getBoundingClientRect();
        setIsButtonVisible(rect.top >= 0 && rect.bottom <= window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <header className="py-2 bg-accent/10  backdrop-filter backdrop-blur-sm   sticky top-0 z-30 transition-all">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
              onClick={handleClick}
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            {!isButtonVisible && (
              <Link href="/tours">
                <ShinyButton
                  text="Book Now"
                  className="rounded-full bg-gradient-to-r from-cyan-400 to-green-600 dark:bg-gradient-to-r"
                />
              </Link>
            )}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
