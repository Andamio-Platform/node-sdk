require("dotenv").config();

import { AndamioProvider } from "../../src";

jest.setTimeout(20000);

describe("Aggregate Course", () => {
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

    test("Provider should fetch course enrolled info", async () => {
        const result = await provider.aggregate.courseInfo.enrolled(
            "95151ed73bbae6f4b992731e09a4b3c6a7fac0368649caad8a166fc8",
        );

        console.log(result);
        expect(result).toBeTruthy();
    });

    test("Provider should fetch course modules info", async () => {
        const result = await provider.aggregate.courseInfo.modules(
            "95151ed73bbae6f4b992731e09a4b3c6a7fac0368649caad8a166fc8",
        );

        console.log(result);
        expect(result).toBeTruthy();
    });
});
