const multer=require('multer')
var fs = require('fs');
var path = require('path');


const uploadImage=()=>{
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          console.log(__dirname, '../uploads', req.user._id);
          fs.mkdir(path.join(__dirname, '../uploads', JSON.parse(JSON.stringify(req.user._id))), function(){
            cb(null, path.join( 'uploads', JSON.parse(JSON.stringify(req.user._id))));
         });
        },
        filename: function (req, file, cb) {
          cb(null,'avatar'+file.originalname.slice(file.originalname.indexOf('.'),file.originalname.length))
        }
    })
    var upload = multer({ storage: storage })
    
    return upload
}
module.exports={uploadImage}