const {Client} = require('pg')
const conn_str = "postgresql://neondb_owner:IX0c8gsnfSJv@ep-aged-recipe-a5vpfnil.us-east-2.aws.neon.tech/neondb?sslmode=require"

const client = new Client({
    connectionString: conn_str
})

module.exports = {client}