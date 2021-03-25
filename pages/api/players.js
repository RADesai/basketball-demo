import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
  if (req.method === 'PUT') {
    const tradedPlayer = req.body;
    const player = await prisma.player.update({
      where: { pid: tradedPlayer.pid },
      data: {
        ta: tradedPlayer.ta,
      },
    })
    return res.status(204).send()
  } else {
    const players = await prisma.player.findMany();
    console.log('found players ->', players?.length)
    setTimeout(() => res.status(200).json(players), 1000) // Timeout to preview loader
  }
}
