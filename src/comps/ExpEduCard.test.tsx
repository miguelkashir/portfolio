import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ExpEduCard } from './ExpEduCard';

const baseProps = {
  title: 'Software Engineer',
  subtitle: 'Acme Corp',
  description: 'Built cool things.',
  startDate: new Date('2022-01-01'),
  endDate: new Date('2023-07-01'),
};

describe('ExpEduCard', () => {
  describe('content rendering', () => {
    it('renders title, subtitle, and description', () => {
      render(<ExpEduCard {...baseProps} />);
      expect(screen.getByText('Software Engineer')).toBeInTheDocument();
      expect(screen.getByText('Acme Corp')).toBeInTheDocument();
      expect(screen.getByText('Built cool things.')).toBeInTheDocument();
    });

    it('renders logo when provided', () => {
      render(<ExpEduCard {...baseProps} logo="/logo.png" />);
      const img = screen.getByRole('img');
      expect(img).toHaveAttribute('src', '/logo.png');
      expect(img).toHaveAttribute('alt', 'Acme Corp');
    });

    it('does not render an img when logo is omitted', () => {
      render(<ExpEduCard {...baseProps} />);
      expect(screen.queryByRole('img')).not.toBeInTheDocument();
    });

    it('renders skill tags when provided', () => {
      const skills = [
        { category: 'frontend' as const, name: 'React' },
        { category: 'language' as const, name: 'TypeScript' },
      ];
      render(<ExpEduCard {...baseProps} skills={skills} />);
      expect(screen.getByText('React')).toBeInTheDocument();
      expect(screen.getByText('TypeScript')).toBeInTheDocument();
    });

    it('does not render skill tags when skills is empty', () => {
      render(<ExpEduCard {...baseProps} skills={[]} />);
      expect(screen.queryByText('React')).not.toBeInTheDocument();
    });

    it('does not render skill tags when skills is omitted', () => {
      const { container } = render(<ExpEduCard {...baseProps} />);
      expect(container.querySelector('.rounded-full')).not.toBeInTheDocument();
    });
  });

  describe('date range display', () => {
    it('renders start and end dates as time elements with datetime attributes', () => {
      render(<ExpEduCard {...baseProps} />);
      const timeEls = document.querySelectorAll('time');
      expect(timeEls[0]).toHaveAttribute('dateTime', '2022-01');
      expect(timeEls[0]).toHaveTextContent('January 2022');
      expect(timeEls[1]).toHaveAttribute('dateTime', '2023-07');
      expect(timeEls[1]).toHaveTextContent('July 2023');
    });

    it('shows "Present" when endDate is null', () => {
      render(<ExpEduCard {...baseProps} endDate={null} />);
      expect(screen.getByText(/Present/)).toBeInTheDocument();
    });

    it('does not render a time element for Present', () => {
      render(<ExpEduCard {...baseProps} endDate={null} />);
      expect(document.querySelectorAll('time')).toHaveLength(1);
    });
  });
});
