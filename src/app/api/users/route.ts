
import { NextRequest, NextResponse } from 'next/server';
import { conn } from "@/utils/index";

export async function GET(req: NextRequest) {
    try {
        // Fetch users from the database
        const selectDataSQL = `SELECT * FROM users`;

        // Use await with a Promise to wait for the asynchronous operation to complete
        const rows = await new Promise<any[]>((resolve, reject) => {
            conn.all(selectDataSQL, [], (err: any, rows: any[]) => {
                if (err) {
                    console.error('Error fetching users:', err);
                    reject(err); // Reject the Promise if there's an error
                } else {
                    resolve(rows); // Resolve the Promise with the fetched rows
                }
            });
        });

        // Return the response with the fetched rows
        return NextResponse.json({ users: rows });
    } catch (error) {
        console.error('Fetching error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

async function POST(req: NextRequest) {
    try {
        console.log(await req.json());
        // const sql = "INSERT INTO users (name, username, password, isAdmin), VALUE()"
        return NextResponse.json({ msg: "Working" });
    } catch (error: any) {
        return NextResponse.json({ error });
    }
}

