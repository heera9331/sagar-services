
import { NextRequest, NextResponse } from 'next/server';
import { conn } from "../utils/index";
 

export async function POST(req: NextRequest) {
    try {
        // Parse JSON body from the request
        const user : { username: string; password: string }= await req.json();

        console.log(user);

        // Check if username and password are provided
        if (!user.username || !user.password) {
            return NextResponse.json({ error: "fields are missing" }, { status: 400 });
        }

        // Construct the SQL query with parameters to prevent SQL injection
        const sql = `SELECT username, isAdmin FROM users WHERE username=? AND password=? limit 1`;
        const values = [user.username, user.password];
         
        const row = await new Promise<any[]>((resolve, reject) => {
            conn.query(sql, values, (err: any, row: any[]) => {
                if (err) {
                    console.error('Error fetching users:', err);
                    reject(err); // Reject the Promise if there's an error
                } else {
                    resolve(row); // Resolve the Promise with the fetched rows
                }
            });
        }); 
        return NextResponse.json({ user: row });
    } catch (error) {
        console.error('Error parsing JSON from request:', error);
        return NextResponse.json({ error: "Invalid JSON in request body" }, { status: 400 });
    }
}