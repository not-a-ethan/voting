import { NextRequest, NextResponse } from 'next/server'

import sql from "../postgres";

export async function GET(req: NextRequest, res: NextResponse) {
    const hotdog = await sql`SELECT vote FROM votes WHERE vote=hotdog;`
    const hamburger = await sql`SELECT vote FROM votes WHERE vote=hamburger;`
    const total = await sql`SELECT COUNT(*) FROM votes`

    return NextResponse.json(
        JSON.stringify({
            "hamburger": hamburger.length,
            "hamburger percent": (hamburger.length / total[0]['total']) * 100,
            "hotdog": hotdog.length,
            "hotdog percent": (hotdog.length / total[0]['total']) * 100
        }),
        { status: 200 }
    )
}