import type { ReactNode } from 'react';

interface SectionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}

export const Section = ({ title, icon, children }: SectionProps) => {
  return (
    <section className="p-4 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100/30 mb-8 transition-all duration-300 hover:shadow-xl">
      <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-4 gap-2">
        {icon && <span className="text-pink-600">{icon}</span>}
        {title}
      </h2>

      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
};
