
import { NextRequest, NextResponse } from 'next/server';
import {db} from "../utils";

export async function POST(req: NextRequest) {
    req = await req.json();
    console.log(req);
    db.run(`SELECT * FROM users;`, [], (err: object, rows: any[])=>{
        console.log(err)
        console.log(rows);
    })
    return NextResponse.json({msg: "Working"});
}