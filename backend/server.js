const express = require('express')
const {client} = require('./db')
const cors = require('cors')
const app = express()

const corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200,
};

app.use(express.json())
app.use(cors(corsOptions))

client.connect()

const table_create = async () => {
    const table_1 = `
    CREATE TABLE IF NOT EXISTS "User" (
      id SERIAL PRIMARY KEY,
      name varchar(225) NOT NULL
    );`
    const create1 = await client.query(table_1)

    const table_2 = `
    CREATE TABLE IF NOT EXISTS "Address" (
       id SERIAL PRIMARY KEY,
       userid integer,
       address json NOT NULL,
       constraint user_add
         foreign key (userid)
         REFERENCES "User" (id)
    );`
    const create2 = await client.query(table_2)
}

table_create()

app.listen(3000, () => {
    console.log('Server is running at port 3000')
})

app.post('/register', async(req, res) => {
    const {uname, address} = req.body
    const {home, area, city, district, state, country, pin} = address
    const insert_user = `INSERT INTO "User" (name) VALUES ('${uname}')`
    const response1 = await client.query(insert_user)
    const find_user_id = `select id from "User" where name = '${uname}'`
    const response_id = await client.query(find_user_id)
    const user_id = response_id.rows[0].id
    const insert_user_add = `INSERT INTO "Address" (userid, address) VALUES (${user_id}, '{"home" : "${home}", "area": "${area}", "city": "${city}", "district": "${district}", "state": "${state}", "country": "${country}", "pin": ${pin}}')`
    const response2 = await client.query(insert_user_add)
    if (response2.rowCount > 0){
        console.log(response2)
        res.send({data: "Data is succesfully added"})
    }
})
