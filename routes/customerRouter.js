const router = require('express').Router();

const Customer = require('../contollers/customerContoller');

router.post("/", Customer.createCustomer);
router.get("/", Customer.getCustomers);

module.exports = router;