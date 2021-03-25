const { PrismaClient } = require('@prisma/client')
const players = require('./players')
const teams = require('./teams')

const prisma = new PrismaClient()

async function main() {
    console.log('seeding players...', players.length)
    for (let player of players) {
        await prisma.player.create({
            data: player
        })
    }

    console.log('seeding teams...', teams.length)
    for (let team of teams) {
        await prisma.team.create({
            data: team
        })
    }
}

main().catch(e => {
    console.error('Seed Error \n', e);
    process.exit(1);
}).finally(() => {
    prisma.$disconnect();
})
