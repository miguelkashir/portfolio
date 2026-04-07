import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import type { ContactLink } from '../types';
import { useTheme } from '../context/useTheme';

interface HeaderProps {
  avatar: string;
  links: ContactLink[];
  name: string;
  role: string;
}

const SCROLL_TRIGGER = 150;

const ICONS: Record<string, React.ReactNode> = {
  GitHub: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
    </svg>
  ),
  LinkedIn: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
    </svg>
  ),
};

export const Header = ({ avatar, links, name, role }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_TRIGGER);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const nav = (
    <nav aria-label="Contact links" className="flex items-center gap-4">
      {links.map(link => (
        <div key={link.label} className="relative group/tooltip">
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200"
          >
            {ICONS[link.label]}
            {link.label}
          </a>
          <div
            className={`hidden sm:block absolute left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-700 dark:bg-gray-600 rounded whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none ${isScrolled ? 'top-full mt-2' : 'bottom-full mb-2'}`}
          >
            Go to {link.url.replace(/^https?:\/\/(www\.)?/, '')}
          </div>
        </div>
      ))}
      <div className="relative group/tooltip">
        <button
          aria-label="Toggle dark mode"
          onClick={toggleTheme}
          className="cursor-pointer text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200"
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </button>
        <div
          className={`hidden sm:block absolute left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-700 dark:bg-gray-600 rounded whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none ${isScrolled ? 'top-full mt-2' : 'bottom-full mb-2'}`}
        >
          {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        </div>
      </div>
    </nav>
  );

  return (
    <header
      className={`sticky top-0 z-10 w-full px-4 sm:px-6 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-3'
          : 'bg-gray-50 dark:bg-gray-900 py-6'
      }`}
    >
      {isScrolled ? (
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              alt={name}
              className="w-9 h-9 rounded-full object-cover object-top shrink-0"
              src={avatar}
            />
            <div className="leading-tight">
              <p className="text-sm font-bold text-gray-900 dark:text-gray-50">
                {name}
              </p>
              <p className="text-xs text-pink-600 font-semibold">{role}</p>
            </div>
          </div>
          {nav}
        </div>
      ) : (
        <div className="flex flex-col items-center text-center">
          <img
            alt={name}
            className="w-28 h-28 rounded-full object-cover object-top mb-4 ring-2 ring-pink-200 dark:ring-pink-900"
            src={avatar}
          />
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-50 tracking-tight">
            {name}
          </h1>
          <p className="text-base sm:text-lg text-pink-600 font-semibold mt-1">
            {role}
          </p>
          <div className="mt-3">{nav}</div>
        </div>
      )}
    </header>
  );
};
