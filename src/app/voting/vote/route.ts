import { NextRequest, NextResponse } from 'next/server'

import sql from "../postgres";

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    const vote = body.vote;

    const id = Math.floor(Date.now() / 1000);

    if (vote === "hamburger") {
        const result = await sql`INSERT INTO votes (id, vote) values (${id}, 'hamburger');`
    } else if (vote === "hotdog") {
        const result = await sql`INSERT INTO votes (id, vote) values (${id}, 'hotdog');`
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