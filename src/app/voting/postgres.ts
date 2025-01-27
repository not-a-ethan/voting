import postgres from 'postgres'

const sql = postgres({
    host                 : process.env.sqlHost,        // Postgres ip address[s] or domain name[s]
    port                 : 5432,                       // Postgres server port[s]
    database             : process.env.sqlName,        // Name of database to connect to
    username             : process.env.sqlUsername,    // Username of database user
    password             : process.env.sqlPassword,    // Password of database user
})

export default sql