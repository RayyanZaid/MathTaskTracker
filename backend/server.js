const express = require('express');
const app = express();
const taskRoutes = require('./routes/tasks');
const mongoose = require('mongoose');


require('dotenv').config();




// Getting requests from SERVER
// SENDING responses to FRONTEND

// Middleware is what happens in between the 2 aforementioned facts


// MIDDLEWARE below: 

// this middleware will just log the path of the request and the type of request
app.use((req,res,next) => {
    console.log(req.path, req.method);
 
    next();
})



app.use(express.json());

// another middleware to access tasks.js
// register the routes
app.use('/api/tasks',taskRoutes);


// connect to DB

mongoose.connect(process.env.DATABASE_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            var database = process.env.DATABASE_URI;
            var atName = false;
            var databaseName = "";
            for (var i = 0; i < database.length; i++) {
                if(database.charAt(i) === '.') {
                    atName = false;
                }
                if(atName) {
                    databaseName+=database.charAt(i);
                }
                if(database.charAt(i) === '@') {
                    atName = true;
                }
                
              }
            console.log("Connected to database:" , databaseName);
            console.log("Listening on port" , process.env.PORT);
        })
    })
    .catch((error) => {
        console.log("Error" , error);
    })

// where app will listen from:




