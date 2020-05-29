module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')
        db.get_inventory()
        .then(products => res.status(200).send(products))
        .catch( err => {
            res.status(500).send({errorMessage: 'No Worky'})
            console.log(err)
        } )
    },

    addProduct: (req, res) => {
        const db = req.app.get('db')
        const {name, price, img} = req.body

        // console.log(req.body)

        db.add_product([name, price, img])
        .then(() => res.sendStatus(200))
        .catch( err => {
            res.status(500).send({errorMessage: 'No Worky'})
            console.log(err)
        } )
    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch( err => {
            res.status(500).send({errorMessage: 'No Worky'})
            console.log(err)
        } )

    }

}