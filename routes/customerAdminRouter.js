const router = require('express').Router();

const CustomerAdmin = require('../contollers/customerAdminContoller');

router.get("/", CustomerAdmin.customerPage);
router.get("/create", CustomerAdmin.customerCreatePage);
router.post("/admin/create", CustomerAdmin.createCustomer);
router.get("/edit/:id", CustomerAdmin.customerEditPage);
router.post("/admin/edit/:id", CustomerAdmin.editCustomer);
router.post("/admin/delete/:id", CustomerAdmin.deleteCustomer)

module.exports = router;