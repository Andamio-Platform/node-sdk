require("dotenv").config();

import { NetworkId } from "./network";
import { logger } from "./utils/logger";

const requiredEnvVars = ["BASE_URL", "NETWORK"];

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
  NETWORK: process.env.NETWORK!,
  NETWORK_ID: NetworkId[process.env.NETWORK as keyof typeof NetworkId],
  DMTR_API_KEY: process.env.DMTR_API_KEY,
  REDIS_URL: process.env.REDIS_URL,
};
