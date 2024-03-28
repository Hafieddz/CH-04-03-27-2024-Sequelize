const {Customer} = require("../models");

const getCustomers = async (req,res) => {
    try {
        const customers = await Customer.findAll();
        res.status(200).json({
            status : 'success',
            customers : {
                customers
            }
        })
        
    } catch (error) {
        console.log(error.message);
    }

}

const createCustomer = async (req,res) => {
    const {name,age,email} = req.body;

    try {
        const newCustomer = await Customer.create({
            name,
            age,
            email
        })

        res.status(201).json({
            status : 'success',
            data : {
                newCustomer
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    createCustomer,
    getCustomers,
}