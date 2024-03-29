// dependencies -------------------------------------------
// express
const express = require("express");
const planModel = require("../model/planModel");
const { protectRoute, bodyChecker, isAuthorized } = require("./utilFns");
const { createElement, getElement, getElements, updateElement, deleteElement } = require("../helpers/factory");


// router ----------------------------------------------
const planRouter = express.Router();

// functions ----------------------------------------------
const createPlan = createElement(planModel);
const deletePlan = deleteElement(planModel);
const updatePlan = updateElement(planModel);
const getPlan = getElement(planModel);
const getPlans = getElements(planModel);

// routes ---------------------------------------
planRouter.use(protectRoute);

planRouter
    .route('/')
    .post(bodyChecker, isAuthorized(["admin"]), createPlan)
    // localhost/plan -> get
    .get(bodyChecker, isAuthorized(["admin"]), getPlans);

console.log("2");

planRouter.route("/:id")
    .route('/')
    .post(bodyChecker, isAuthorized(["admin", "ce"]), updatePlan)
    .delete(bodyChecker, isAuthorized(["admin"]), deletePlan);


module.exports = planRouter;
