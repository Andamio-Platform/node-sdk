import { PrismaClient } from './generated/client'

const prisma = new PrismaClient()

// Register all models here once
const models = {
    // addressToWatch: prisma.addressToWatch,
    // blockAddress: prisma.blockAddress
    addressToWatchSyncTip: prisma.addressToWatchSyncTip,
    // transaction: prisma.transaction,
    transactionSyncTip: prisma.transactionSyncTip,
    // Add more models as needed
}

async function main() {
    console.log('📦 Database Contents\n')

    for (const [name, model] of Object.entries(models)) {
        try {

            const data = await (model as any).findMany({
                where: {
                    // type: "Escrow",
                    // key: "19b37c7b723ab2758481f88f36213256a0e387e537d70ad2acb745d8"
                },
                orderBy: {
                    id: 'desc'
                },
                take: 1,
                // If you need to include relations, uncomment and specify properly:
                // include: {
                //     addresses: true
                // }
            });

            console.log(`📄 ${name.toUpperCase()}:`)
            console.dir(data, { depth: null })
            console.log('\n---\n')

        } catch (err) {
            console.error(`⚠️ Failed to fetch model "${name}":`, err)
        }
    }
}

main()
    .catch((e) => {
        console.error('❌ Unexpected error:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
