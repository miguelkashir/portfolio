export const formatDuration = (startDate: Date, endDate: Date | null): string => {
  const durationDays =
    Math.floor((endDate || new Date()).getTime() - startDate.getTime()) /
    (1000 * 60 * 60 * 24);

  if (durationDays < 365) {
    const months = Math.max(1, Math.round(durationDays / 30.4375));
    return `${months} month${months > 1 ? 's' : ''}`;
  }

  const roundedYears = Math.round((durationDays / 365) * 10) / 10;

  if (roundedYears % 1 === 0) {
    const years = Math.round(roundedYears);
    return `${years} year${years > 1 ? 's' : ''}`;
  }

  return `${roundedYears.toFixed(1)} year${roundedYears > 1 ? 's' : ''}`;
};
