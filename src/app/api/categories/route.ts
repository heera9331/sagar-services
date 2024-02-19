// @ts-ignore
// @ts-nocheck
// @ts-expect-error

import { NextRequest, NextResponse } from 'next/server';
import { conn } from "../utils/index";
import { hasCategory } from "@/app/api/utils/functions";

export async function GET(req: NextRequest) {
    // Construct the SQL query with parameters to prevent SQL injection
    const sql = `SELECT * FROM categories;`;
    const values = [];

    const rows = await new Promise<any[]>((resolve, reject) => {
        conn.query(sql, values, (err: any, row: any[]) => {
            if (err) {
                console.error('Error fetching catogories:', err);
                reject(err); // Reject the Promise if there's an error
            } else {
                resolve(row); // Resolve the Promise with the fetched rows
            }
        });
    });
    return NextResponse.json({ categories: rows });
}


export async function POST(req: NextRequest) {
    let category: { name: string, providerId: number, parentCategoryId: number } = await req.json();

    console.log(category);

    let { name, parentCategoryId } = category;


    if (!name) {
        return NextResponse.json({ error: "missing fields" });
    }
    if (hasCategory(name)) {
        return NextResponse.json({ error: "category already exist" });
    }

    const sql = `
        INSERT INTO categories (name, parentCategoryId) values('${name}', '${parentCategoryId}');
    `;

    let ack = new Promise((resolve, reject) => {
        conn.query(sql, (error, ack) => {
            console.log('inside promise error', error);
            console.log('inside promise ack', ack);

            if (error) {
                reject(false);
            } else {
                console.log(ack);
                resolve(true)
            }
        });
    });

    ack = await ack;
    if (ack) {
        return NextResponse.json({ msg: "category added successfully" });
    } else {
        return NextResponse.json({ error: "something went wrong" });
    }

}
