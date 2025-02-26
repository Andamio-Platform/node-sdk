require("dotenv").config();

import { AndamioProvider } from "../../src";

jest.setTimeout(20000);

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

    test("Provider should fetch project commitments info", async () => {
        const result = await provider.aggregate.projectInfo.commitments(
            "5f40046e0c6a7c06425c66606b0d31fb89eba6402c33a97e411667bc",
        );

        console.log(result);
        expect(result).toBeTruthy();
    });

    test("Provider should fetch project contributors info", async () => {
        const result = await provider.aggregate.projectInfo.contributors(
            "19b37c7b723ab2758481f88f36213256a0e387e537d70ad2acb745d8",
        );

        console.log(result);
        expect(result).toBeTruthy();
    });
    

    test("Provider should fetch project funds info", async () => {
        const result = await provider.aggregate.projectInfo.funds(
            "5f40046e0c6a7c06425c66606b0d31fb89eba6402c33a97e411667bc",
        );

        console.log(result);
        expect(result).toBeTruthy();
    });
});
