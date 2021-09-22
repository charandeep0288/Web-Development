const jwt = require('jsonwebtoken');
const {JWT_KEY} = require('../secrets');

// --------- using cookies in this function -----------------
// let flag = true; // user logged in
// let flag = false; // user not logged in
function protectRoute(req, res, next) {
    try {
        if (req.cookies) { // cookies exisit karta hai ki nahi check kar raha hai
            
            console.log(req.cookies);
            let isVerified = jwt.verfy(req.cookies.login, JWT_KEY);

            if (isVerified) { // req.cookies.login == '1234'
                next(); // agar user logged in hai tho next fn pai jao -> getUsers() fn 
            }
            else {
                res.json({
                    message: "not authorized",
                });
            }
        }
        else {
            return res.json({
                message: "operation not allowed"
            });
        }
    }
    catch (err) {
        // 500 status code ->  Internal Server Error
        return res.status(500).json({
            message: "operation not allowed",
        });
    }
}

module.export = protectRouter;