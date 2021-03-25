import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
  const teams = await prisma.team.findMany();
  console.log('found teams ->', teams?.length);
  res.status(200).json(teams);
};
