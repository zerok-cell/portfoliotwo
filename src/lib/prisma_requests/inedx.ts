import { Prisma, PrismaClient } from '@prisma/client';

export const prismaClient = new PrismaClient();

export async function createBlog(data:Prisma.BlogCreateInput) {
  return  prismaClient.blog.create({
    data: {
      content: data.content,
      title: data.title,
    },
  });
}

export async function selectAllBlogs() {
  return prismaClient.blog.findMany();
}

export async function getOneBlogById(id: number) {
  return prismaClient.blog.findMany({
    where: {id},
  });
}

export async function deleteBlog(id: number) {
  await prismaClient.blog.delete({
    where: {
      id,
    },
  });
}

export async function updateBlog(id:number,data:Prisma.BlogUpdateInput) {

    return prismaClient.blog.update({
        where: {id},
        data

    });



}