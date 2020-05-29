module.exports = {
    getInventory: (req, res) => {
        const {db} = req.app.get('db')

        db.get_inventory()
        .then(res.status(200).send())
    },


}