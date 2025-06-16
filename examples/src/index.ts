import AndamioSDK from "@andamiojs/sdk";
import { provider } from "./provider";

const sdk = new AndamioSDK("http://34.46.94.3:50051", "Preprod");

const main = async () => {
    provider(sdk)
}

main()
    .then(() => {
        console.log("Done");
    })
    .catch((err) => {
        console.error("Error: ", err);
    });