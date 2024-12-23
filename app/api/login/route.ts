import {NextRequest, NextResponse} from "next/server";
import {NextApiRequest} from "next";

export async function POST(request: NextRequest) {
    const pasword = await request.json();
    if (pasword.password === process.env.ADMIN_PASSWORD) {
        return NextResponse.json({ message: 'Success' }, { status: 200 });

    }
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });


}