const mongoose = require("mongoose");

const itemsSchema = mongoose.Schema({
   name: {
       type: String,
       required: true
   },
   item_id: {
       type: String,
       unique: true
   }
});

module.exports = mongoose.model("Items", itemsSchema);