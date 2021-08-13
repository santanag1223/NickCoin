const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    userID:        {type: String, require: true, unique: true},
    serverID:      {type: String, require: true},
    nickCoin:      {type: Number, default: 0},
    lastTrans:     {type: Number, default: 0},
    lastTransDate: {type: String, default: "No Past Transactions."}
})

const model = mongoose.model("profileNModels", profileSchema);

module.exports = model;