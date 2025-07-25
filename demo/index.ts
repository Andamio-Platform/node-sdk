import AndamioSDK from "@andamiojs/sdk";
import fs from "fs";
import path from "path";
import pino from "pino";
require("dotenv").config();

// Ensure logs directory exists
const logDir = path.join(process.cwd(), "logs");
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

// Create a logger that writes to both file and terminal
const logger = pino({
    level: "debug",
    transport: {
        targets: [
            {
                target: "pino-pretty", // Pretty output in terminal
                options: { colorize: true },
            },
            {
                target: "pino/file", // Structured logs to file
                options: { destination: path.join(logDir, "step5.log") },
            },
        ],
    },
});

// Mirror console.log and console.error to logger
const originalLog = console.log;
const originalError = console.error;

console.log = (...args) => {
    logger.info(args.map(arg => (typeof arg === "string" ? arg : JSON.stringify(arg))).join(" "));
    originalLog(...args); // still output to terminal
};

console.error = (...args) => {
    logger.error(args.map(arg => (typeof arg === "string" ? arg : JSON.stringify(arg))).join(" "));
    originalError(...args); // still output to terminal
};

// Initialize SDK
const sdk = new AndamioSDK(
    "https://preprod.utxorpc-v0.demeter.run:443",
    "Preprod",
    process.env.DMTR_API_KEY || ""
);

async function main() {
    try {

        // // Step 1: Query Credential Data

        // const credentials = await sdk.provider.overview.getUserData("Zeus");
        // console.log("Credentials at Start:", JSON.stringify(credentials, null, 2));









        // // Step 2: Course Creator Publishes a Module

        // const moduleTx = await sdk.transaction.courseCreator.mintModuleTokens({
        //     alias: "meshTx",
        //     courseId: "cb69f0e1aa2c2173df2bb5274c7ce628883fb031e9161107285eaddd",
        //     listOfModuleDetails: [{
        //         moduleTokenName: "200",
        //         slts: [{
        //             sltId: "0",
        //             sltDescription: "Learn To Demo"
        //         }],
        //         assignment: {
        //             assignmentDescription: "Do a Demo",
        //             prerequisites: []
        //         }
        //     }]
        // });
        // console.log("Unsigned Transaction:", JSON.stringify(moduleTx, null, 2));









        // // Step 3: Student Commit to an Assignment

        // const commitAssignmentTx = await sdk.transaction.student.commitAssignment({
        //     alias: "Zeus",
        //     courseId: "cb69f0e1aa2c2173df2bb5274c7ce628883fb031e9161107285eaddd",
        //     moduleTokenName: "200",
        //     assignmentEvidenceInHex: Buffer.from("I did a demo").toString("hex")
        // })
        // console.log("Unsigned Transaction:", JSON.stringify(commitAssignmentTx, null, 2));









        // // Step 4: Course Creator Approves Assignment as Complete

        // const approveAssignmentTx = await sdk.transaction.courseCreator.acceptAssignment({
        //     approverAlias: "meshTx",
        //     studentAlias: "Zeus",
        //     courseId: "cb69f0e1aa2c2173df2bb5274c7ce628883fb031e9161107285eaddd",
        //     moduleTokenName: "200"
        // });
        // console.log("Unsigned Transaction:", JSON.stringify(approveAssignmentTx, null, 2));








        // Step 5: Student Credential is Updated

        const updatedCredentials = await sdk.provider.overview.getUserData("Zeus");
        console.log("Credentials After Assignment:", JSON.stringify(updatedCredentials, null, 2));


    } catch (error) {
        console.error(error);
    }
}

main();
