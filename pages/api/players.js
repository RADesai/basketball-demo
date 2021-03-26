import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
  if (req.method === 'PUT') {
    const tradedPlayer = req.body;
    await prisma.player.update({
      where: { pid: tradedPlayer.pid },
      data: {
        ta: tradedPlayer.ta,
      },
    })
    setTimeout(() => res.status(204).send(), 500) // Timeout to preview loader
  } else {
    const players = await prisma.player.findMany();
    setTimeout(() => res.status(200).json(players), 500) // Timeout to preview loader
  }
}
