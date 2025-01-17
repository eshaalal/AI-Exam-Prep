import { STUDY_MATERIAL_TABLE } from '../../../configs/schema';
import { NextResponse } from "next/server";
import { db } from '../../../configs/db';
import { eq } from 'drizzle-orm'; // Assuming you are using Drizzle ORM.

export async function POST(req) {
    try {
        const { createdBy } = await req.json();
        
        if (!createdBy) {
            return NextResponse.json({ error: 'createdBy is required' }, { status: 400 });
        }

        const result = await db
            .select()
            .from(STUDY_MATERIAL_TABLE)
            .where(eq(STUDY_MATERIAL_TABLE.createdBy, createdBy));
        
        return NextResponse.json({ result });
    } catch (error) {
        console.error('Database query error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
