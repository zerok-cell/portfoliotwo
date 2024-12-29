import { Prisma } from "@prisma/client";
import { NextApiResponse} from "next";
import {NextRequest, NextResponse} from "next/server";
import {createBlog} from "@/lib/prisma_requests/inedx";

export async function POST(req: NextRequest, res: NextApiResponse) {

    try {
        const data = await req.json()
        await createBlog(data)
        return NextResponse.json({data}, {status: 200})

    } catch (err) {
        return NextResponse.json({msg: 'Error on server'}, {status: 500})
    }


}