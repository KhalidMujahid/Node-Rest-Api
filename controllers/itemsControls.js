const Items = require("../model/database");

const items = {
    //get all items
    getItems: async (req, res) => {
        try {
            const data = await Items.find();
            res.json(data);
        } catch (err) {
            res.json({ msg: err.name })
        }
    },

    //add new item
    addItem: async (req, res) => {
        try {
            const { name,item_id } = req.body;

            const newData = new Items({
                item_id: item_id,
                name: name
            })

            await newData.save();

            res.json({ msg: "Added" });
        } catch (err) {
            res.json({ msg: err.name })
        }
    },

    //get one item
    getItem: async (req, res) => {
        try {
            const { id } = req.params;

            const data = await Items.findById({ _id: id });
            if (data) {
                res.json(data);
            } else {
                res.json({ msg: "Not found" });
            }
        } catch (err) {
            res.json({ msg: err.name });
        }
    },

    //update an item

    updateItem:async (req,res) => {
        try{
            const { id } = req.params;
            const { name } = req.body;

            await Items.findOneAndUpdate({ _id: id}, {
                name: name
            });

            res.json({ msg: "Updated"})
        } catch(err){
            res.json({ msg: err.name})
        }
    },

    //delete items 

    deleteItem: async (req,res) => {
        try{
            const { id } = req.params;
            await Items.findByIdAndDelete({ _id: id});

            res.json({ msg: "Deleted"});

        } catch(err){
            res.json({ msg: err.name})
        }
    }
};


module.exports = items;