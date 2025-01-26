import { NextRequest, NextResponse } from 'next/server'

import sql from "../postgres";

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    const vote = body.vote;

    if (vote === "hamburger") {
        const result = await sql`INSERT INTO votes (vote) value ("hamburger")`
    } else if (vote === "hotdog") {
        const result = await sql`INSERT INTO votes (vote) value ("hotdog")`
    } else {
        return NextResponse.json(
            JSON.stringify({
                "error": "Please enter 'hamburger' or 'hotdog' in the vote field in the body"
            }),
            { status: 422 }
        )
    }

    return NextResponse.json(
        JSON.stringify({
            "response": "Thank you for your vote!"
        })
    )
}