const router = require("express").Router();
const items = require("../controllers/itemsControls")

//router for get all items and create new/ add new item to the database
router.route("/")
    .get(items.getItems)
    .post(items.addItem)


//router for delete,update and get one item from the database

router.route("/:id")
    .get(items.getItem)
    .delete(items.deleteItem)
    .put(items.updateItem)

module.exports = router;