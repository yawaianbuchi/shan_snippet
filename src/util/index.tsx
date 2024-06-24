import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import dayjs from 'dayjs';

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const formatDate = (date: Date | string, format: string) =>
  dayjs(date).format(format ?? 'DD MMM YYYY');

const formatAmount = (val: number) => {
  return `${
    val
      ? Number(val)
          .toFixed(0)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      : 0
  }`;
};

export { cn, formatDate, formatAmount };
