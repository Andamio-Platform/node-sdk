import AndamioSDK from "@andamiojs/sdk";

/**
 * Fetches network state:
 * - All aliases
 * - All instances (course & project policies)
 * - User data for a hardcoded alias
 * 
 * @param sdk - The Andamio SDK instance
 */
export async function Network(sdk: AndamioSDK) {
    const aliases = await sdk.provider.network.getAllAliases();
    const instances = await sdk.provider.network.getAllInstancesList();

    const userData_genesis = await sdk.provider.network.getUserData("  ");

    return {
        aliases,
        instances,
        userData: userData_genesis,
    };
}

/**
 * Logs a summary of the network state returned by `networkState()`
 * @param info - Object with aliases, instances, and userData
 */
export function summarizeNetworkStateInfo(info: any) {
    console.log("Network State Summary:\n");

    // Aliases
    const sampleAliases = info.aliases.slice(0, 5);
    console.log("Aliases:", {
        total: info.aliases.length,
        sample: sampleAliases,
        ...(info.aliases.length > 5 && { note: `...and ${info.aliases.length - 5} more` }),
    });

    // Instances
    const { courses, projects } = info.instances;
    console.log("Instances:", {
        courses: {
            total: courses.length,
            sample: courses.slice(0, 3),
        },
        projects: {
            total: projects.length,
            sample: projects.slice(0, 3),
        },
    });

    // User Data
    const previewInstances = (arr: any[], limit = 2) => {
        return arr.slice(0, limit).map((i, idx) => ({
            index: idx,
            policy: i.policy,
            challenges: i.challenges.slice(0, 3),
            completed: i.completed,
        }));
    };

    const courseCount = info.userData.data.courses.length;
    const projectCount = info.userData.data.projects.length;

    console.log("User Data for Hardcoded Alias:", {
        info: info.userData.info.trim() || "<empty>",
        courses: [
            ...previewInstances(info.userData.data.courses),
            ...(courseCount > 2 ? [`...and ${courseCount - 2} more`] : []),
        ],
        projects: [
            ...previewInstances(info.userData.data.projects),
            ...(projectCount > 2 ? [`...and ${projectCount - 2} more`] : []),
        ],
    });
}

