const User = require("../users/model/User.models")
const Note = require("./model/Note.models")
const getData = async (req, res) => {
    try {
        const data = await Note.findAll({ include: { model: User } })
        res.json({ message: "All Notes", data })
    } catch (error) {
        res.json({ message: "You have some issues", error: error.message })
    }
}
const postData = async (req, res) => {
    try {
        const { title, body, userId } = req.body
        const Find = await User.findAll({
            attributes: ['id'],
            where: {
                id: userId
            }
        })
        if (Find.length == 1) {
            const data = await Note.create({ title, body, userId })
            res.json({ message: "Added New Note", data })
        } else {
            res.json({ Error: "user not found" })
        }
    } catch (error) {
        res.json({ message: "You have some issues", error: error.message })
    }
}
const putData = async (req, res) => {
    try {
        const { id } = req.params
        const { title, body } = req.body
        const Find = await Note.findAll({
            attributes: ['id'],
            where: {
                id
            }
        })
        console.log(Find.length);
        if (Find.length == 1) {
            const data = await Note.update({ title, body }, {
                where: {
                    id
                }
            })
            res.json({ message: "Updataed", data })
        } else {
            res.json({ Error: "Not founded", data: 0 })
        }

    } catch (error) {
        res.json({ message: "You have some issues", error: error.message })
    }
}
const deleteData = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Note.destroy({
            where: {
                id
            }
        })
        res.json({ message: "Deleted Note", data })
    } catch (error) {
        res.json({ message: "You have some issues", error: error.message })
    }
}

module.exports = {
    getData,
    postData,
    putData,
    deleteData
}