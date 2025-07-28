import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

  // Determine the appropriate unit by calculating the log
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  // Format with 2 decimal places and round
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

export const generateUUID = () => crypto.randomUUID();

// Security utility functions
export function sanitizeInput(input: string): string {
  if (!input) return "";
  
  // Remove potentially dangerous characters
  return input
    .trim()
    .replace(/[<>]/g, "") // Remove < and > to prevent basic XSS
    .replace(/javascript:/gi, "") // Remove javascript: protocol
    .replace(/data:/gi, "") // Remove data: protocol
    .substring(0, 5000); // Limit length
}

export function validateFileType(file: File): boolean {
  // Check MIME type and file extension
  const allowedTypes = ['application/pdf'];
  const allowedExtensions = ['.pdf'];
  
  const fileExtension = file.name.toLowerCase().slice(file.name.lastIndexOf('.'));
  
  return allowedTypes.includes(file.type) && allowedExtensions.includes(fileExtension);
}

export function validateFileSize(file: File, maxSizeInBytes: number = 20 * 1024 * 1024): boolean {
  return file.size <= maxSizeInBytes;
}
