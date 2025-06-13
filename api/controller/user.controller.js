const User = require("./../model/user.model.js");

exports.getAll = async (req, res, next) => {
    let userList = await User.findAll({attributes: ['nickname']});
    res.status(200).json(userList);
}

exports.getById = async (req, res, next) => {
    let user = await User.findByPk(req.params.id);
    if (!user) {
        return res.status(404).json({message: "User not found"});
    }
    res.status(200).json(user);
}