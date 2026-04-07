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
        { name: 'React', category: 'frontend' as const },
        { name: 'TypeScript', category: 'language' as const },
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
    it('shows formatted start and end dates', () => {
      render(<ExpEduCard {...baseProps} />);
      // Both year values should appear in the date string
      expect(screen.getByText(/2022/)).toBeInTheDocument();
      expect(screen.getByText(/2023/)).toBeInTheDocument();
    });

    it('shows "Present" when endDate is null', () => {
      render(<ExpEduCard {...baseProps} endDate={null} />);
      expect(screen.getByText(/Present/)).toBeInTheDocument();
    });
  });

  describe('duration display', () => {
    it('hides duration by default', () => {
      render(<ExpEduCard {...baseProps} />);
      expect(screen.queryByText(/month|year/)).not.toBeInTheDocument();
    });

    it('shows duration when showDuration is true', () => {
      render(<ExpEduCard {...baseProps} showDuration />);
      expect(screen.getByText(/1\.5 years/)).toBeInTheDocument();
    });
  });
});
