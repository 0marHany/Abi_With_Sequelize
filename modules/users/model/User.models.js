const { newSequelize } = require("../../../config/configration");
const { DataTypes } = require("sequelize")
const User = newSequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timeStamps: true
});


module.exports = User;