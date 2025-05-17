import { PrismaClient } from './generated/client'

const prisma = new PrismaClient()

// Register all models here once
const models = {
    addressToWatch: prisma.addressToWatch,
    // blockAddress: prisma.blockAddress
    // Add more models as needed
}

async function main() {
    console.log('📦 Database Contents\n')

    for (const [name, model] of Object.entries(models)) {
        try {
            let data;
            if (name === 'blockAddress') {
                data = await (model as any).findMany({
                    where: {
                        address: "addr_test1xzvc5pmv7puffjwvu2nva00w3m5hfuaquv8wl3ll389lxzuke8x9mpjf7aerjt3n3nfd5tnzkfhlprp09mpf4sdy8dzq408x7p"
                    },
                    orderBy: {
                        id: 'desc'
                    },
                    take: 10,
                    include: { transactions: true }
                });
            } else {
                data = await (model as any).findMany({
                    where: {
                        // type: "Treasury",
                        // key: "19b37c7b723ab2758481f88f36213256a0e387e537d70ad2acb745d8"
                    },
                    // take: 100,
                });
            }
            console.log(`📄 ${name.toUpperCase()}:`)
            console.dir(data.length, { depth: null })
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
