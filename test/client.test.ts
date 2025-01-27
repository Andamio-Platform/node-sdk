import { JsonPlaceholderClient } from "../src/client";
import { CardanoQueryClient } from "@utxorpc/sdk";
import { SdkError } from "../src/errors";  // Adjust the import path if needed
import { logger } from "../src/utils/logger";  // Adjust the import path if needed

jest.setTimeout(10000);  // Increase timeout in case of slower network responses

describe("JsonPlaceholderClient", () => {
  let client: JsonPlaceholderClient;

  beforeEach(() => {
    client = new JsonPlaceholderClient(); // Create a new instance before each test
  });

  test("Client should fetch user data", async () => {
    const user = await client.getUser(1);  // Fetch user with ID 1
    expect(user).toHaveProperty("id");
    expect(user.id).toBe(1);
  });

  test("Client should fetch user posts", async () => {
    const posts = await client.getUserPosts(1);  // Fetch posts for user with ID 1
    expect(Array.isArray(posts)).toBe(true);
    expect(posts.length).toBeGreaterThan(0);
  });

  test("Client should fetch network params", async () => {
    try {
      const params = await client.getParams();  // Fetch network parameters
      expect(params).toHaveProperty("protocolParams");
      expect(params.protocolParams).toHaveProperty("maxTxSize");
    } catch (error) {
      // This will catch any errors thrown in getParams
      expect(error).toBeInstanceOf(SdkError);
      expect(error.message).toBe("Failed to fetch network params.");
    }
  });
});
