const Student = require('../models/StudentModel');

// login

const loginStudent = async (req,res) => {
    res.json({message: 'Login'});
}




// signup


const signupStudent = async (req,res) => {
    const {name,email,password} = req.body;

    try {
        const student = await Student.signup(name,email,password);
        res.status(200).json({name, email,student});
    }

    catch(error) {
        res.status(400).json({error: error.message});
    }

}

module.exports = {loginStudent,signupStudent};