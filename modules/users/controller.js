const User = require("./model/User.models")

const getData = async (req, res) => {
    try {
        const data = await User.findAll({});
        res.json({ message: "All Users", data })
    } catch (error) {
        res.json({ Message: "You have some issues", error: error.message })
    }
}
const postData = async (req, res) => {
    try {
        const { firstname, lastname, email } = req.body
        const Find = await User.findAll({
            attributes: ['email'],
            where: {
                email
            }
        })
        if (Find.length == 0) {
            const data = await User.create({ firstname, lastname, email })
            res.json({ message: "Added New User", data })
        }
        else {
            res.json({ Error: "Email is already exist", email })
        }
    } catch (error) {
        res.json({ Message: "You have some issues", error: error.message })
    }
}
const putData = async (req, res) => {
    try {
        const { id } = req.params;
        const { firstname, lastname, email } = req.body
        const Find = await User.findAll({
            attributes: ['id'],
            where: {
                id
            }
        })
        if (Find.length == 1) {
            const data = await User.update({ firstname, lastname, email }, {
                where: {
                    id
                }
            })
            res.json({ message: "Updataed", data })
        } else {
            res.json({ Error: "Not founded", data: 0 })
        }
    } catch (error) {
        res.json({ Message: "You have some issues", error: error.message })
    }
}
const deleteData = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await User.destroy({
            where: {
                id
            }
        })
        res.json({ message: "Deleted User", data })
    } catch (error) {
        res.json({ Message: "You have some issues", error: error.message })
    }
}

module.exports = {
    getData,
    postData,
    putData,
    deleteData
}