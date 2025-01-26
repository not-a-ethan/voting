import { NextRequest, NextResponse } from 'next/server'

import sql from "../postgres";

export async function GET(req: NextRequest, res: NextResponse) {
    const hamburger = await sql`SELECT vote FROM votes WHERE vote=hamburger;`
    const total = await sql`SELECT COUNT(*) FROM votes`

    return NextResponse.json(
        JSON.stringify({
            "votes": hamburger.length,
            "percent": (hamburger.length / total[0]['total']) * 100
        }),
        { status: 200 }
    )
}