import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toCurrency(value: number, unit: 'ko') {
  return value.toLocaleString() + CURRENCY_UNIT[unit];
}
const CURRENCY_UNIT = {
  ko: '원',
};
