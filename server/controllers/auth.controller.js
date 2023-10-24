const {authService} = require("../services")
const {wrapper} = require("../utils/async")

exports.register = wrapper(async(req, res) => {
    const user = await authService.createUser(req.body);
    return res.json({user, status:"success"});
})

