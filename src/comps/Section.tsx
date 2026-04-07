import type { ReactNode } from 'react';

interface SectionProps {
  children?: ReactNode;
  headerAction?: ReactNode;
  icon?: ReactNode;
  title: string;
}

export const Section = ({
  children,
  headerAction,
  icon,
  title,
}: SectionProps) => {
  return (
    <section className="p-4 sm:p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100/30 dark:border-gray-700/30 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="flex items-center text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 gap-2">
          {icon && <span className="text-pink-600">{icon}</span>}
          {title}
        </h2>
        {headerAction}
      </div>

      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
};
