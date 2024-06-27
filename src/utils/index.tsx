import dayjs from 'dayjs';

const formatDate = (date: Date | string, format?: string) =>
  dayjs(new Date(date)).format(format ?? 'DD MMM YYYY');

const formatNumberAbbreviation = (number: number) => {
  // Handle non-numeric input
  if (typeof number !== 'number') {
    return number;
  }

  // Handle zero
  if (number === 0) {
    return '0';
  }

  const thresholds = [1e3, 1e6, 1e9];
  const abbreviations = ['K', 'M', 'B'];

  for (let i = thresholds.length - 1; i >= 0; i--) {
    const threshold = thresholds[i];
    const abbreviation = abbreviations[i];

    if (Math.abs(number) >= threshold) {
      const formatted = (number / threshold).toFixed(0);
      return `${formatted}${abbreviation}`;
    }
  }

  // If number is less than 1000, return it without formatting
  return number;
};

export { formatDate, formatNumberAbbreviation };
