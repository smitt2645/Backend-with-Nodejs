import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../public/temp') // static folder where we will store the file temporarily!
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,file.originalname)
    }
  })
  
//   const upload = multer({ storage: storage })

export const upload = multer({
    storage: storage,
    // limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB limit
    // fileFilter: function (req, file, cb) {
    //   // Accept images only
    //   if (!file.mimetype.startsWith('image/')) {
    //     return cb(new Error('Only images are allowed'), false);
    //   }
    //   cb(null, true);
    // }
  });

// app.post('/profile', upload.single('avatar'), function (req, res, next) {
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
// })