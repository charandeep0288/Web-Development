// dependency ------------------------------------
// express
const express = require("express");
const userModel = require("../model/userModel");

// router ---------------------------------------
const userRouter = express.Router();
const { protectRoute, bodyChecker } = require("./utilFns");

// routes -----------------------------------------
userRouter
  .route("/")
  // localhost/user -> post
  .post(bodyChecker, createUser)
  // localhost/user -> get
  .get(protectRoute, getUsers);

userRouter
  .route("/:id")
  .get(getUser)
  .patch(bodyChecker, updateUser) // post
  .delete(bodyChecker, deleteUser);

// functions ----------------------------------------

async function createUser(req, res) {
  try {
    let user = await userModel.create(req.body);
    res.status(200).json({
      user: user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server error",
    });
  }
}

async function getUser(req, res) {
  let { id } = req.params;
  try {
    let users = await userModel.findById(id);
    console.log(users);
    res.status(200).json({
      message: users,
    });
  } catch (err) {
    res.status(502).json({
      message: err.message,
    });
  }
}

async function getUsers(req, res) {
  let id = req.body;
  try {
    let users = await userModel.find();
    res.status(200).json({
      message: users,
    });
  } catch (err) {
    console.log(err);
    res.status(502).json({
      message: err.message,
    });
  }
}

async function updateUser(req, res) {
  let { id } = req.params;
  try {
    // if(res.body.password || req.body.confirmPassword) {
    //   return res.json({
    //     message: "use forget password instead"
    //   });
    // }

    let user = await userModel.findById(id);
    console.log(user);
    if (user) {
      for (let key in req.body) {
        user[key] = req.body[key];
      }

      // save  -> confirmPassword, password
      await user.save({
        validateBeforeSave: false
      });

      res.status(200).json({
        user: user,
      });

    } else {
      
      res.status(404).json({
        message: "user not found",
      });
    }
  } catch (err) {
    
    console.log(err);
    res.status(500).json({
      message: "Server error",
    });
  }
}

async function deleteUser(req, res) {
  let { id } = req.user;
  try {
    let users = await userModel.findByIdAndDelete(id);
    
    res.status(200).json({
      user: users,
    });

  } catch (err) {
    
    console.log(err);
    res.status(500).json({
      message: "Server error",
    });
  }
}

module.exports = userRouter;
