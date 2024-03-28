const { Customer } = require("../models");

const customerPage = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.render("customers/index.ejs", {
      customers,
      message : req.flash("message", "")
    });
  } catch (error) {
    res.render("error.ejs", {
      message: error.message,
    });
  }
};

const customerCreatePage = async (req, res) => {
  try {
    res.render("customers/create.ejs");
  } catch (error) {
    res.render("error.ejs", {
      message: error.message,
    });
  }
};

const createCustomer = async (req, res) => {
  try {
    await Customer.create(req.body);
    req.flash("message", "ditambahkan")
    res.redirect("/customers");
  } catch (error) {
    console.log(error.message);
  }
};

const customerEditPage = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    res.render("customers/edit.ejs", {
      customer,
    });
  } catch (error) {
    res.render("error.ejs", {
      message: error.message,
    });
  }
};

const editCustomer = async (req, res) => {
  try {
    await Customer.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    req.flash("message", "diedit")
    res.redirect("/customers");
  } catch (error) {
    console.log(error.message);
  }
};

const deleteCustomer = async (req,res) => {
  try {
    await Customer.destroy({
      where : {
        id : req.params.id
      }
    })
    req.flash("message", "dihapus")
    res.redirect("/customers");
  } catch (error) {
      console.log(error.message);
  }
}

module.exports = {
  customerPage,
  customerCreatePage,
  createCustomer,
  customerEditPage,
  editCustomer,
  deleteCustomer
};
