import {getOneBlogById, prismaClient, selectAllBlogs} from "@/lib/prisma_requests/inedx";
import {NextApiRequest, NextApiResponse} from "next";
import {NextResponse} from "next/server";

interface ResponseData{
    id: number;
    title: string;
    content: string;
}

export async function GET(req:NextApiRequest, res: NextApiResponse<ResponseData>){
    console.log(req.body)
    try{
        const data =  await getOneBlogById(2)
        return NextResponse.json({ data }, { status: 200 });
    } catch {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });

    }finally {
        await prismaClient.$disconnect()
    }

}