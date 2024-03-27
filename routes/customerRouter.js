const router = require('express').Router();

const Customer = require('../contollers/customerContoller');

router.post("/", Customer.createCustomer);

module.exports = router;