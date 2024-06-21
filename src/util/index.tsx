import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import dayjs from 'dayjs';

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const formatDate = (date: Date | string, format: string) =>
  dayjs(date).format(format ?? 'DD MMM YYYY');

export { cn, formatDate };
