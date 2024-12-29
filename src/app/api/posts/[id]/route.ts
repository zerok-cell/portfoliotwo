import {getOneBlogById, prismaClient, selectAllBlogs} from "@/lib/prisma_requests/inedx";
import {NextApiRequest, NextApiResponse, NextPageContext} from "next";
import {NextRequest, NextResponse} from "next/server";

interface ResponseData{
    id: number;
    title: string;
    content: string;
}

export async function GET(req:NextApiRequest, {params}) {

    try{
        const  {id}= await params;

        const data =  await getOneBlogById(Number(id))
        return NextResponse.json(data, { status: 200 });
    } catch (err){
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 200 });

    }finally {
        await prismaClient.$disconnect()
    }

}
