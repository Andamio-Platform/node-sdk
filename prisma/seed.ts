import { PrismaClient } from './generated/client'
import AndamioConfigPreprod from "../src/andamio-config-preprod.json";

const prisma = new PrismaClient()

async function main() {
    console.log('🧹 Truncating Tables...')

    await prisma.$executeRawUnsafe(`
    TRUNCATE TABLE "AddressToWatch", "Transaction", "BlockAddress", "Blocks" RESTART IDENTITY CASCADE;
  `)

    console.log('🌱 Seeding fresh AddressToWatch entries...')

    await prisma.addressToWatch.createMany({
        data: [
            { key: 'alias_index', value: AndamioConfigPreprod.indexMS.mSCAddress },
            { key: 'global_state', value: AndamioConfigPreprod.globalStateS.sCAddress },
            { key: 'governance_validator', value: AndamioConfigPreprod.governanceS.sCAddress },
            { key: 'instance_validator', value: AndamioConfigPreprod.instanceMS.mSCAddress },
        ]
    })

    console.log('✅ Seed complete.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
