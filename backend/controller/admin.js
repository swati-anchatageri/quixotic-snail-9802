const { AdminModel } = require("../models/admin.model")

exports.adminGoogleSignup = async (req, res, next) => {
    try {
        const {name, email} = req.body;
        const existingUserEmail = await AdminModel.findOne({email});
        if (existingUserEmail) {
            return res.status(400).json({ msg:'Admin Already Exists'});
        }
        const adminuser=new AdminModel({name,email})
        await adminuser.save()
        return res.status(200).json({
            message: "Admin signup Sucessfully", 
            status: 1
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal server error", 
            status: 0
        });
    }
}