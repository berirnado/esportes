const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        let path = "./public/fotos"
        cb(null, path)
    }, filename: function(req,file,cb) {
        let foto = Date.now() + "-" + file.originalname
        cb(null, foto)
    }
})

const upload = multer({storage})