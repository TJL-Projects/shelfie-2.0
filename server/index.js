require('dotenv').config()
const express =  require('express')
const massive = require('massive')
const cors = require('cors')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const port = SERVER_PORT
const ctrl = require('./controller')
const app = express()


massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('db connected')
})

app.use(express.json())
app.use(cors())

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.addProduct)
app.delete('/api/inventory/:id', ctrl.deleteProduct)


app.listen(port, console.log(`Server is running on port: ${port}`))