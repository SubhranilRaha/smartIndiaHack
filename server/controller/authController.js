const { User } = require("../model/User");
const { School } = require("../model/School");
const { genPassword } = require("../utils/genPassword");

const signupController = async (req, res) => {
    // send message containing uniqueId and password
    try
    {
        const { name, email, phone } = req.body;

        // check existing
        const existingUser = await User.findOne({ phone: phone });
        if(existingUser)
        {
            console.log('[-] User already exists !');
            return res.status(400).json({ message:"User already exists !" });
        }

        // only school can signup, accounts of students and teachers will be created by school
        // and credentials would be sent to phone number (would be implemented in other routes)
        const infoDoc = await School.create({ name, email });
        const password = genPassword();
        const newUser = await User.create({ 
            phone: phone,
            userType: 'School',
            userInfo: infoDoc._id,
            password: password
        });

        // TODO: Use a messaging service to send uniqueId(newUser._id) and password(newUser.password or just password) to phone number(newUser.phone)

        res.status(200).json({ message: "SignUp Successful", user: newUser });
    }
    catch(err)
    {
        console.log('[-] Error while signing up');
        console.dir(err);
        res.status(500).json({ message: "Server Error" });
    }
}

const loginController = (req,res) => {
    res.status(200).json({ message: "Login Successful", user: req.user });
}

module.exports.loginController = loginController;
module.exports.signupController = signupController;