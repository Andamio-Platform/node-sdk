export const logger = {
  log: (message: string) => console.log(`[SDK] ${message}`),
  error: (message: string) => console.error(`[SDK ERROR] ${message}`),
  warn: (message: string) => console.warn(`[SDK WARNING] ${message}`),
};
