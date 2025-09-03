import { format } from 'date-fns';
import { formatInTimeZone, toZonedTime } from 'date-fns-tz';

const IST_TIMEZONE = 'Asia/Kolkata';

/**
 * Format a date to IST timezone with specified format
 */
export function formatToIST(date: Date | string | number, formatStr: string = 'dd/MM/yyyy hh:mm a'): string {
  const dateObj = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
  return formatInTimeZone(dateObj, IST_TIMEZONE, formatStr);
}

/**
 * Convert UTC date to IST timezone
 */
export function toIST(date: Date | string | number): Date {
  const dateObj = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
  return toZonedTime(dateObj, IST_TIMEZONE);
}

/**
 * Get current date/time in IST
 */
export function nowIST(): Date {
  return toZonedTime(new Date(), IST_TIMEZONE);
}

/**
 * Format timestamp for display (user-friendly IST format)
 */
export function formatTimestamp(timestamp: string | Date): string {
  return formatToIST(timestamp, 'dd MMM yyyy, hh:mm a');
}

/**
 * Format date for forms or compact display
 */
export function formatDate(date: string | Date): string {
  return formatToIST(date, 'dd/MM/yyyy');
}

/**
 * Format time for display
 */
export function formatTime(time: string | Date): string {
  return formatToIST(time, 'hh:mm a');
}