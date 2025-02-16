import UtxorpcClient from "../src";
import { logger, AndamioConfig, env } from "../src";

// Increase timeout in case of slower network responses
// jest.setTimeout(10000);

describe("UtxorpcClient", () => {
  let client: UtxorpcClient;

  beforeAll(() => {
    client = new UtxorpcClient(env.BASE_URL, env.DMTR_API_KEY, env.REDIS_URL);
  });

  afterAll(async () => {
    await client.disconnect();
  });

  /**
   * ✅ Test Redis Connection
   */
  test("Redis connection test", async () => {
    if (client["redisClient"]) {
      try {
        await client["redisClient"].ping();
        logger.log("Redis is connected and responsive.");
      } catch (error) {
        logger.error(`Redis connection failed: ${error}`);
      }
    } else {
      logger.warn("⚠️ Redis client is not initialized.");
    }

    expect(client["redisClient"]).toBeTruthy();
  });

  /**
   * ✅ Test fetching network parameters
   */
  test("Client should fetch network params", async () => {
    const params = await client.getParams();
    expect(params).toBeTruthy();
  });

  /**
   * ✅ Test fetching UTXOs
   */
  test("Client should fetch utxos", async () => {
    const utxos = await client.getUtxos(AndamioConfig.globalStateS.sCAddress);
    expect(Array.isArray(utxos)).toBe(true);
    expect(utxos.length).toBeGreaterThan(0);
  });

  /**
   * ✅ Stress test: Handle multiple concurrent requests
   */
  test("Stress test: Client should handle multiple requests", async () => {
    const numRequests = 3;
    const requests = Array.from({ length: numRequests }, () =>
      client.getUtxos(AndamioConfig.globalStateS.sCAddress),
    );

    const results = await Promise.all(requests);
    results.forEach((utxos) => {
      expect(Array.isArray(utxos)).toBe(true);
      expect(utxos.length).toBeGreaterThan(0);
    });
  });
});
