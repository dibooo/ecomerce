const Task = require("../models/task")
const Products= require( '../models/product.js')
const getPopularProducts = async (req, res) => {
    try {
        let popularData={}
        
        let products=await Products.find()
        const newProducts=[]
        for (let index = 0; index < products.length; index++) {
            
            var fs = require('fs');
            var files = await fs.readdirSync(__dirname+'../../uploads/'+products[index]._id);
            console.log(files);
            newProducts.push({...products[index]._doc,img:files[0]})
        }
        popularData['total_size']=products.length
        popularData['type_id']=0
        popularData['offset']=0
        popularData['products']=newProducts
       
        res.status(200).send(popularData)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
   

}

module.exports={getPopularProducts}