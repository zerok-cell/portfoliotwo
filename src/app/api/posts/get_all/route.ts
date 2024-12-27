import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { prismaClient, selectAllBlogs } from '@/lib/prisma_requests/inedx';

interface ResponseData {
  id: number;
  title: string;
  content: string;
}

export async function GET(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  try {
    const data = await selectAllBlogs();
    return NextResponse.json({ data }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } finally {
    await prismaClient.$disconnect();
  }
}
