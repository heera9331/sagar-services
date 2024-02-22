import { NextRequest, NextResponse } from 'next/server';
import { conn } from "@/utils/index";

export async function POST(req: NextRequest) {
    try {
        let provider = await req.json();

        return NextResponse.json({ msg: "working" });
    } catch (error) {
        console.error('Fetching error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}


export async function GET(req: NextRequest) {
    // Construct the SQL query with parameters to prevent SQL injection
    const sql = `SELECT id, name FROM providers;`;
    const values: any[] = [];

    const rows = await new Promise<any[]>((resolve, reject) => {
        conn.query(sql, values, (err: any, row: any[]) => {
            if (err) {
                console.error('Error fetching users:', err);
                reject(err); // Reject the Promise if there's an error
            } else {
                resolve(row); // Resolve the Promise with the fetched rows
            }
        });
    });
    return NextResponse.json({ providers: rows });
}