// dependencies -------------------------------------------
// express
const express = require("express");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../secrets");
const userModel = require("../model/userModel");
const { bodyChecker } = require("./utilFns");

// router ----------------------------------------------
const authRouter = express.Router();

// routes ---------------------------------------
authRouter.route("/signup").post(bodyChecker, signupUser);

authRouter.route("/login").post(bodyChecker, loginUser);

// routes -> functions ----------------------------------------
async function signupUser(req, res) {
  try {
    let newUser = await userModel.create(req.body);

    res.status(201).json({
      message: "user created sucessfully",
      user: newUser,
    });
  } catch (err) {
    console.log("signup User error: ", err);
    res.status(500).json({
      message: err.message,
    });
  }
}

async function loginUser(req, res) {
  // JWT
  try {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (user) {
      // password
      if (user.password == password) {

        let token = jwt.sign({ id: user["_id"] }, JWT_SECRET);
        res.cookie("JWT", token);

        res.status(200).json({
          data: user,
          message: "user logged In",
        });
      } else {
        
        res.status(404).json({
          message: "email or password incorrect",
        });
      }
      //jwt
      // response
    } else {
      
        res.status(404).json({
        message: "user not found with creds",
      });
    }
  } catch (err) {
    
    console.log("login User error: ", err);
    res.status(500).json({
      message: err.message,
    });
  }
}


// function tempLoginUser(req, res) {
//   let { email, password } = req.body;
//   let obj = content.find((obj) => {
//     return obj.email == email;
//   });

//   if (!obj) {
//     return res.status(404).json({
//       message: "User not found",
//     });
//   }
//   if (obj.password == password) {
//     let token = jwt.sign({ email: obj.email }, JWT_SECRET);
//     console.log(token);
//     //header
//     res.cookie("JWT", token);

//     // sign with RSA SHA256
//     // res body
//     res.status(200).json({
//       message: "user logged In",
//     });
//   } else {
//     res.status(422).json({
//       message: "password dosen't match",
//     });
//   }
// }

module.exports = authRouter;
