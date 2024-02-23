import { NextResponse } from "next/server";
import { conn } from "@/utils/index";

export const GET = async (request: any, { params }: any) => {
    try { 
        const { id } = params;

        let sql = `SELECT services.id, title, description, district, categories.name as category, providers.name as provider FROM services
    join categories on categories.id = services.categoryId
    join providers on providers.id = services.providerId    
     WHERE id=${id};`;
        console.log(sql);

        const values: any[] = [];

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
        return new NextResponse({ service: row }, { status: 200 });
        
    } catch (error) {
        return new NextResponse("Database Error", { status: 500 });
    }

};