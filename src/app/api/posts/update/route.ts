import { NextRequest, NextResponse } from 'next/server';
import { updateBlog } from '@/lib/prisma_requests/inedx';
import { BlogInputType } from '@/types/prismaTypes';

export async function PUT(req: NextRequest) {
  const body: { params: BlogInputType } = await req.json();
  try {
    const { title, content, id } = body.params;
    const data = {
      title,
      content,
    };
    await updateBlog(id, data);
    return NextResponse.json({ id, ...data }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
