import { NextRequest, NextResponse } from 'next/server'

import sql from "../postgres";

export async function GET() {
    const hotdog = await sql`SELECT vote FROM votes WHERE vote='hotdog';`;
    const hamburger = await sql`SELECT vote FROM votes WHERE vote='hamburger';`;
    const total = await sql`SELECT COUNT(*) FROM votes`;

    let hotdogPercent;
    let hamburgerPercent;

    if (hotdog.length === 0 || total['count'] === 0) {
        hotdogPercent = 0
    } else {
        hotdogPercent = (hotdog.length / total[0]['count']) * 100
    }

    if (hamburger.length === 0  || total['count'] === 0) {
        hamburgerPercent = 0;
    } else {
        hamburgerPercent = (hamburger.length / total[0]['count']) * 100
    }

    return NextResponse.json(
        JSON.stringify({
            "hamburger": hamburger.length,
            "hamburger percent": hamburgerPercent,
            "hotdog": hotdog.length,
            "hotdog percent": hotdogPercent
        }),
        { status: 200 }
    )
}