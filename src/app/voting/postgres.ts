import postgres from 'postgres'

const sql = postgres(process.env.url, {})

export default sql
