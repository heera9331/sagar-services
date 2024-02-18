// @ts-ignore
// @ts-nocheck
// @ts-expect-error

import { NextRequest, NextResponse } from 'next/server';
import { conn } from "../utils/index";

export async function GET(req: NextRequest) {
    // Construct the SQL query with parameters to prevent SQL injection
    const sql = `SELECT * FROM services;`;
    const values = [];

    const row = await new Promise<any[]>((resolve, reject) => {
        conn.query(sql, values, (err: any, row: any[]) => {
            if (err) {
                console.error('Error fetching services:', err);
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
        let service = await req.json();
        console.log(service);
        const title = service.title;
        const description = service.description;
        const providerId = service.providerId;
        const district = service.district;
        const categoryId = service.categoryId;
        const address = service.address;
        const contact = service.contact;
        const sql = `
        INSERT INTO services (title, description, contact, district, providerId, categoryId, address)
        values ('${title}', '${description}', '${contact}', '${district}', '${providerId}', '${categoryId}', '${address}');
        `;
        console.log('sql', sql);
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
            return NextResponse.json({ msg: "service added successfully" });
        } else {
            return NextResponse.json({ error: "something went wrong" });
        } 
    } catch (error: any) {
        console.log('error', error);
        return NextResponse.json({ error });
    }
}

