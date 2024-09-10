import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href='/'>
      <div className="hover:scale-115 transition-transform duration-300 dark:bg-white/60 backdrop-blur-sm rounded-full">
        <Image 
          src='/ASQ.png' 
          width={54} 
          height={54} 
          priority
          alt="Arctic SkyQuest"
        />
      </div>
    </Link>
  );
}

export default Logo;
