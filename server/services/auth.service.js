const {userService} = require("./")
const {User} = require("../models")
const {CustomError} = require("../utils/customError")

const createUser = async(body) => {
    if(await (userService.findUserByEmail(body.email)))
        throw new CustomError("email already exist", 512);
    if(await (userService.findUserByUsername(body.username)))
        throw new CustomError("username already exist", 512);
    return User.create(body);
}

module.exports = {createUser};