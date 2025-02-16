require("dotenv").config();

import { logger } from "./utils/logger";

const requiredEnvVars = ["BASE_URL"];

const missingVars = requiredEnvVars.filter((key) => !process.env[key]);

if (missingVars.length > 0) {
  logger.error(
    `❌ Missing required environment variables: ${missingVars.join(", ")}`,
  );
  process.exit(1); // Stop the application
}

// Export environment variables
export const env = {
  BASE_URL: process.env.BASE_URL!,
  DMTR_API_KEY: process.env.DMTR_API_KEY,
  REDIS_URL: process.env.REDIS_URL,
};
