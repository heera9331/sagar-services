import { NextRequest, NextResponse } from 'next/server';
import db from '../utils/db';

export async function POST(req: NextRequest) {
    try {
        console.log('request body', await req.json());

//        const sql = "CREATE TABLE IF NOT EXISTS users (name varchar(32), username varchar(32), password varchar(32), isAdmin int,createAt datetime default CURRENT_TIMESTAMP);";
//        db.run(sql, [], async(error: any, data: any) => {
//            console.log('error', error);
//            console.log('data', data);
//        })
        
        return NextResponse.json({msg: "working"});
    } catch (error) {
        console.error('Fetching error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

