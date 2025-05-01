import postgres from 'postgres'

const url = process.env.url || "";

const sql = postgres(url, {})

export default sql
