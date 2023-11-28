const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TomSchema = new Schema({
  sentence: String
});
module.exports = mongoose.model("tom", TomSchema);