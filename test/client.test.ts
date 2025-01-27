import { JsonPlaceholderClient } from "../src/client";

test("Client should fetch user data", async () => {
  const client = new JsonPlaceholderClient();
  const user = await client.getUser(1);
  expect(user).toHaveProperty("id");
});

test("Client should fetch user posts", async () => {
  const client = new JsonPlaceholderClient();
  const posts = await client.getUserPosts(1);
  expect(Array.isArray(posts)).toBe(true);
});
