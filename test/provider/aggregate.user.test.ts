require("dotenv").config();

import { AndamioProvider } from "../../src";

jest.setTimeout(200000);

describe("Aggregate Project", () => {
    let provider: AndamioProvider;

    beforeAll(() => {
        provider = new AndamioProvider({
            baseUrl: process.env.BASE_URL
                ? process.env.BASE_URL
                : "http://localhost:50051",
            dmtr_api_key: process.env.DMTR_API_KEY,
            redisUrl: process.env.REDIS_URL,
        });
    });

    test("Provider should fetch user info", async () => {
        const result = await provider.aggregate.userInfo.joined(
            "jerry",
        );

        console.log(result);
        expect(result).toBeTruthy();
    });

});
