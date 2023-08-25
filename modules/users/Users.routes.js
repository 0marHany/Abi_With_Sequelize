
const routes = require("express").Router();
const {
    getData,
    postData,
    putData,
    deleteData
} = require("./controller");

routes.get("/getUsers", getData)
routes.post("/addUsers", postData)
routes.put("/updateUsers/:id", putData)
routes.delete("/deleteUsers/:id", deleteData)

module.exports = routes