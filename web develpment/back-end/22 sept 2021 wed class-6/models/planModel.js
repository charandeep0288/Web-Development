
const mongoose = require('mongoose');

// const {db_link} = require('../secrets.js');

mongoose.connect(db_link).then(function(db){
    console.log('db conected');
})
.catch(function(err){
    console.log(err);
});


const planSchema = new mongoose.schema({
    id: {
        type: Number, 
        required: true,
    },
    name: {
        type: String, 
        required: true,
    },
    ratings: {
        type: Number, 
        required: true,
    }, 
    price: {
        type: Number, 
        required: true,
    }, 
    delivery: {
        type: Boolean, 
        required: true,
    }, 
    meals: {
        type: Number, 
        required: true,
    },
    description: {
        type: String, 
        required: true,
    }, 
    createdAt: {
        type: Date,
    },
});

//                               model_name
const planModel = mongoose.model('planModel', planSchema);

model.exports = planModel;