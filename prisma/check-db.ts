import { PrismaClient } from './generated/client'

const prisma = new PrismaClient()

// Register all models here once
const models = {
    addressToWatch: prisma.addressToWatch,
    blockAddress: prisma.blockAddress
    // Add more models as needed
}

async function main() {
    console.log('📦 Database Contents\n')

    for (const [name, model] of Object.entries(models)) {
        try {
            let data;
            if (name === 'blockAddress') {
                data = await (model as any).findMany({
                    // orderBy: {
                    //     id: 'desc'
                    // },
                    take: 10,
                    include: { transactions: true }
                });
            } else {
                data = await (model as any).findMany({
                    take: 10,
                });
            }
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
