const ReviewModel = reqiure("../model/reviewModel");
const PlanModel = require("../model/planModel");
const { protectRoute } = require("./utilFns");
const { createElement, getElement, getElements, updateElement, deleteElement } = require("../helpers/factory");

const upadateReview = updateElement(ReviewModel);
const getReview = getElement(ReviewModel);
const getReviews = getElements(ReviewModel);

// createReview
// review -> put entry
// plan -> reviewId
// deleteReview
ReviewRouter
    .route("/")
    .get(getReview)
    .patch(protectRoute, updateReview)
    .delete(protectRoute, deleteReview);

// ----------------------------------------------------
ReviewRouter
    .route("/")
    .get(getReviews)
    .post(protectRoute, createReview);

model.exports = ReviewRouter;