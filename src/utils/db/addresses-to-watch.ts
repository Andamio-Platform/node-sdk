import { PrismaClient } from "../../../prisma/generated/client";

export async function addressesToWatch(prisma: PrismaClient) {
    const addresses = await prisma.addressToWatch.findMany({})
    return addresses
};