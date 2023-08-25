const { newSequelize } = require("../../../config/configration");
const { DataTypes } = require("sequelize");
const User = require("../../users/model/User.models");
const Note = newSequelize.define("note", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING
    },
    body: {
        type: DataTypes.STRING
    }
}, {
    timeStamps: true
});
User.hasMany(Note);
Note.belongsTo(User);
module.exports = Note;