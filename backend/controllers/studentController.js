const Student = require('../models/StudentModel');
const jwt = require('jsonwebtoken');


// re-use during login and signup
const createToken = (_id) => {
    return jwt.sign({_id},process.env.JWT_SECRET_STRING, {expiresIn: '1d'})
}



// login

const loginStudent = async (req,res) => {
    res.json({message: 'Login'});
}




// signup


const signupStudent = async (req,res) => {
    const {name,email,password} = req.body;

    try {
        // from the static function in the student model
        const student = await Student.signup(name,email,password);

        // create JWT web token
        const token = createToken(student._id)

        res.status(200).json({email,token});
    }

    catch(error) {
        res.status(400).json({error: error.message});
    }

}

module.exports = {loginStudent,signupStudent};