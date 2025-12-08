import prisma from "@/libs/prisma";

export async function GET(request: Request) {
  const users = await prisma.user.findMany();
  return Response.json({ users });
}
