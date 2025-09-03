import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatEther(wei: string | number): string {
  const value = typeof wei === 'string' ? parseFloat(wei) : wei;
  return (value / Math.pow(10, 18)).toFixed(4);
}

export function truncateAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
