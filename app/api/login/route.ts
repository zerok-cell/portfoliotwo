import {NextRequest, NextResponse} from "next/server";
import {RequestData} from "@/types/login/requestData";

export async function POST(request: NextRequest) {
    const data:RequestData = await request.json();
    if (data.password === process.env.ADMIN_PASSWORD && data.username ===process.env.ADMIN_NAME) {
        return NextResponse.json({ message: 'Success' }, { status: 200 });

    }
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });


}