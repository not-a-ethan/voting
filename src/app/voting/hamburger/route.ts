import { NextRequest, NextResponse } from 'next/server'

import sql from "../postgres";

export async function GET() {
    const hamburger = await sql`SELECT * FROM votes WHERE vote='hamburger';`;
    const total = await sql`SELECT COUNT(*) FROM votes;`;

    const times = [];

    for (let i = 0; i < hamburger.length; i++) {
        times.push(hamburger[i]["id"])
    }

    return NextResponse.json(
        JSON.stringify({
            "votes": hamburger.length,
            "percent": (hamburger.length / total[0]['total']) * 100,
            "times": times
        }),
        { status: 200 }
    )
}