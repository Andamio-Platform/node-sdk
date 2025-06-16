import AndamioSDK from "@andamiojs/sdk";

export async function Project(sdk: AndamioSDK, projectNftPolicy: string) {
    const policy = await sdk.provider.network.project.getTreasuryTokenPolicy(projectNftPolicy);

    return policy;
}