const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');
const validator = require('validator');



const StudentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    username: {
        type: String,
        required: true,
        unique: true,  
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

StudentSchema.statics.signup = async function(name, username, email, password) {

    // validation

    if(!name || !username || !email || !password) {
        throw Error("All boxes must be filled");
    }

    if(!validator.isEmail(email)) {
        throw Error("Please input a valid email address");
    }

    if(!validator.isStrongPassword(password)) {
        throw Error("Password must contain at least 8 letter with symbols");
    }


    const exists = await this.findOne({username})

    if(exists) {
        throw Error("Username already exists. Please input a different one.")
    }

    /* Hashing the Password
        Need to create a salt
        Important because it adds random characters onto the password before hashing
        This makes it so hackers can't use password matching (figuring out other passwords that are the same)
    */
    var saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    const hashedPassword = await bcrypt.hash(password,salt);

    const Student = await this.create({name,username,email,password:hashedPassword});

    return Student;
}

// Static method for the login page

StudentSchema.statics.login = async function(username,password) {
    if(!username || !password) {
        throw Error("All boxes must be filled");
    }

    const findStudent = await this.findOne({username});

    if(!findStudent) {
        throw Error("Incorrect username");
    }

    const isPasswordMatch = await bcrypt.compare(password,findStudent.password);

    if(!isPasswordMatch) {
        throw Error("Incorrect password");
    }

    return findStudent
    
}

module.exports = mongoose.model('Student', StudentSchema);