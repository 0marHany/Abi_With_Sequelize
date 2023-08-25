const sequelize = require("sequelize");

const newSequelize = new sequelize("shop", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

const createTables = () => {
    newSequelize.sync({ alter: true })
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        })
}
module.exports = {
    newSequelize,
    createTables
}