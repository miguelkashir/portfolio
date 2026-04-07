import type { ReactNode } from 'react';

interface ParagraphProps {
  children: ReactNode;
}

export const Paragraph = ({ children }: ParagraphProps) => (
  <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">{children}</p>
);
