const Task = require("../models/task")
const Products= require( '../models/product.js')
const fs = require('fs');
const path = require('path');
const getPopularProducts = async (req, res) => {
    try {
        let popularData={}
        
        let products=await Products.find()
        const newProducts=[]
        for (let index = 0; index < products.length; index++) {
            const directoryPath = path.join(__dirname,'../uploads/'+products[index]._id);
            fs.readdir(directoryPath, function (err, files) {
                //handling error
              
                if (err) {
                    return console.log('Unable to scan directory: ' + err);
                } 
                //listing all files using forEach
                files.forEach(function (file) {
                    // Do whatever you want to do with the file
                    console.log(file);
                    newProducts.push({...products[index]._doc,img:file})
                });
                popularData['total_size']=products.length
                popularData['type_id']=0
                popularData['offset']=0
                popularData['products']=newProducts
               
                res.status(200).send(popularData)
            });
            // var files = await fs.readdirSync(__dirname+'/../uploads/'+products[index]._id);
            // console.log(files);
            //
        }
      
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
   

}

module.exports={getPopularProducts}