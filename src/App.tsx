import { useEffect, useState } from 'react';
import { Header } from './comps/Header';

const SCROLL_TRIGGER = 50;

export const App = () => {
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
    <div>
      <Header isScrolled={isScrolled} />
    </div>
  );
};
