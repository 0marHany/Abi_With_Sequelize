
const routes = require("express").Router();
const {
    getData,
    postData,
    putData,
    deleteData
} = require("./controller");

routes.get("/getNotes", getData)
routes.post("/addNotes", postData)
routes.put("/updateNotes/:id", putData)
routes.delete("/deleteNotes/:id", deleteData)

module.exports = routes