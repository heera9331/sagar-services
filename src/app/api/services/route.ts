// @ts-ignore
// @ts-nocheck
// @ts-expect-error

import { NextRequest, NextResponse } from 'next/server';
import {conn} from "../utils/index";

export async function GET(req: NextRequest) {
    // Construct the SQL query with parameters to prevent SQL injection
    const sql = `SELECT * FROM services;`;
    const values = [];
     
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
}

export async function POST(req: NextRequest) {
    try {
        const sql = "INSERT INTO services (id, title, description, contact, district, providerId, categoryId)";
        const values = [];

        
    } catch(error: any) {
        return NextResponse.json({error});
    }
}

