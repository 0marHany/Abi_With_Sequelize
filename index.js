const express = require("express");
const { createTables } = require("./config/configration");
const UserRoutes = require("./modules/users/Users.routes");
const NoteRoutes = require("./modules/notes/Notes.routes")

const app = express();

app.use(express.json());
createTables();

app.use(UserRoutes);
app.use(NoteRoutes);

app.listen(5000, () => {
    console.log("server run on : http://localhost:5000/");
})
