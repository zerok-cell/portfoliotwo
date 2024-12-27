import { NextRequest, NextResponse } from 'next/server';
import { updateBlog } from '@/lib/prisma_requests/inedx';
import { BlogInputType } from '@/types/prismaTypes';

export async function PUT(req: NextRequest, res: NextResponse) {
  const body: { objFromUpdate: BlogInputType } = await req.json();
  try {
    const data = body.objFromUpdate;
    await updateBlog(data.id, {
      title: data.title,
      content: data.content,
    });
    return NextResponse.json({ ...data }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'error' }, { status: 500 });
  }
}
