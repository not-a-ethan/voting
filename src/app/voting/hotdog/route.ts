import { NextRequest, NextResponse } from 'next/server'

import sql from "../postgres";

export async function GET() {
    const hotdog = await sql`SELECT * FROM votes WHERE vote='hotdog';`;
    const total = await sql`SELECT COUNT(*) FROM votes`;

    console.log(hotdog)

    const times = [];

    for (let i = 0; i < hotdog.length; i++) {
        times.push(hotdog[i]["id"])
    }

    return NextResponse.json(
        JSON.stringify({
            "votes": hotdog.length,
            "percent": (hotdog.length / total[0]['total']) * 100,
            "times": times
        }),
        { status: 200 }
    )
}