export const logger = {
    log: (message: string) => console.log(`\x1b[36m[SDK]\x1b[0m ${message}`),
    error: (message: string) => console.error(`\x1b[31m[SDK ERROR]\x1b[0m ${message}`),
    warn: (message: string) => console.warn(`\x1b[33m[SDK WARNING]\x1b[0m ${message}`),
};