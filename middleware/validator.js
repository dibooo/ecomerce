const validator = require('../helpers/validate');
    const {registerValidation, loginValidation}=require('../constents/user');
const { partOfObject } = require('../helpers/functions');
const registerValidator = async (req, res, next) => {
    await validator(req.body, registerValidation, {}, async(err, status) => {
        if (!status) {
         
           
            res.status(400)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    }).catch( err => console.log(err))
}
const loginValidator = async (req, res, next) => {
    await validator(req.body, loginValidation, {}, async(err, status) => {
        if (!status) { 
            res.status(400)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    }).catch( err => console.log(err))
}
const updateProfileValidator = async (req, res, next) => {
    await validator(req.body, partOfObject(req.body,registerValidation), {}, async(err, status) => {
        if (!status) {
            res.status(400)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    }).catch( err => console.log(err))
}
module.exports={registerValidator,loginValidator,updateProfileValidator}