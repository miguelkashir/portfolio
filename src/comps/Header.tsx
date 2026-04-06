import { useEffect, useState } from 'react';

interface HeaderProps {
  name: string;
  role: string;
}

const SCROLL_TRIGGER = 50;

export const Header = ({ name, role }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_TRIGGER);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex flex-col text-center sticky top-0 z-10 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
        {name}
      </h1>
      <p className="text-xl text-pink-600 font-semibold mt-1">{role}</p>
    </header>
  );
};
