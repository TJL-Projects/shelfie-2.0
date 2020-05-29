require('dotenv').config()
const express =  require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const port = SERVER_PORT
const ctrl = './controller.js'
const app = express()


massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('db connected')
})

app.use(express.json())


app.listen(port, console.log(`Server is running on port: ${port}`))