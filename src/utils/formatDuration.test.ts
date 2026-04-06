import { describe, it, expect } from 'vitest';
import { formatDuration } from './formatDuration';

describe('formatDuration', () => {
  it('returns "1 month" for a very short span', () => {
    expect(formatDuration(new Date('2023-01-01'), new Date('2023-01-05'))).toBe('1 month');
  });

  it('returns months when less than a year', () => {
    expect(formatDuration(new Date('2023-01-01'), new Date('2023-04-01'))).toBe('3 months');
  });

  it('returns "1 year" (singular) for exactly 1 year', () => {
    expect(formatDuration(new Date('2022-06-01'), new Date('2023-06-01'))).toBe('1 year');
  });

  it('returns whole years for exact multiples', () => {
    expect(formatDuration(new Date('2021-01-01'), new Date('2023-01-01'))).toBe('2 years');
  });

  it('returns fractional years (e.g. 1.5 years)', () => {
    expect(formatDuration(new Date('2022-01-01'), new Date('2023-07-01'))).toBe('1.5 years');
  });

  it('uses current date when endDate is null', () => {
    const result = formatDuration(new Date('2020-01-01'), null);
    expect(result).toMatch(/year|month/);
  });
});
