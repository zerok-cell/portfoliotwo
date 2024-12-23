import { PrismaClient } from '@prisma/client'
import {NextApiRequest} from "next";
import {BlogType} from "@/types/prismaTypes";

export const prismaClient = new PrismaClient()

export async function createBlog() {
    const allUsers = await prismaClient.blog.create({
        data:{
            content:"Init post",
            title:'Init post'
        }
    })
    console.log(allUsers)
}

export async function selectAllBlogs() {
    const all_blog = await prismaClient.blog.findMany()
    return all_blog
}

export async function getOneBlogById(id: number) {

    const instanceBlog = await prismaClient.blog.findMany({
        where:{id}
    })
    console.log(instanceBlog)
    return instanceBlog
}

export async function deleteBlog(id: number) {
    await prismaClient.blog.delete({
        where:{
            id
        }
    })
}

// createBlog()
//     .then(async () => {
//         await prisma.$disconnect()
//     })
//     .catch(async (e) => {
//         console.error(e)
//         await prisma.$disconnect()
//         process.exit(1)
//     })

// deleteBlog(1)
//     .then(async () => {
//         await prisma.$disconnect()
//     })
//     .catch(async (e) => {
//         console.error(e)
//         await prisma.$disconnect()
//         process.exit(1)
//     })
// selectAllBlogs()
//     .then(async () => {
//         await prisma.$disconnect()
//     })
//     .catch(async (e) => {
//         console.error(e)
//         await prisma.$disconnect()
//         process.exit(1)
//     })
