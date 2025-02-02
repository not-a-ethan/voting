import { NextRequest, NextResponse } from 'next/server'

import sql from "../postgres";

export async function GET() {
    const hotdog = await sql`SELECT vote FROM votes WHERE vote=hotdog;`
    const total = await sql`SELECT COUNT(*) FROM votes`

    return NextResponse.json(
        JSON.stringify({
            "votes": hotdog.length,
            "percent": (hotdog.length / total[0]['total']) * 100
        }),
        { status: 200 }
    )
}