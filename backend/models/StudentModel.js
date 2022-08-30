const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');
const validator = require('validator');



const StudentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    }
})

// Static SignUp method for Student Schema

StudentSchema.statics.signup = async function(name, email, password) {

    // validation

    if(!name || !email || !password) {
        throw Error("All boxes must be filled");
    }

    if(!validator.isEmail(email)) {
        throw Error("Please input a valid email address");
    }

    if(!validator.isStrongPassword(password)) {
        throw Error("Password must contain at least 8 letter with symbols");
    }


    const exists = await this.findOne({email})

    if(exists) {
        throw Error("Email already exists")
    }

    /* Hashing the Password
        Need to create a salt
        Important because it adds random characters onto the password before hashing
        This makes it so hackers can't use password matching (figuring out other passwords that are the same)
    */
    var saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    const hashedPassword = await bcrypt.hash(password,salt);

    const Student = await this.create({name,email,password:hashedPassword});

    return Student;
}



module.exports = mongoose.model('Student', StudentSchema);