const multer = require('multer');
const path = require ('path')


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/uploads/img_products'))
    },
    filename: function (req, file, cb) {
      let nameClear = req.body.name.toLowerCase().split(' ').join('-')
      cb(null, nameClear + Date.now() + path.extname(file.originalname))

    }
  })
  
  


  var upload = multer({ storage: storage })

  module.exports=upload