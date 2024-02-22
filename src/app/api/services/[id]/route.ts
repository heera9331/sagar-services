import { NextResponse } from "next/server";
import { conn } from "@/utils/index";

export const GET = async (request, { params }) => {
    const { id } = params;





    return new NextResponse(JSON.stringify(post), { status: 200 });

    return new NextResponse("Database Error", { status: 500 });

};