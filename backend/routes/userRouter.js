import express from 'express';
import data from '../data.js';
import User from '../models/userModel.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils.js';

/// lay image
import multer from 'multer';
// vào images
// const upload = multer({ dest: 'backend/images/users/' });


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/images/users/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    //reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}


const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter,
});

///
const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    await User.remove({});  //fix loi 
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
})
);

userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                image: user.image,
                token: generateToken(user)
            });
            return;
        }
    }
    res.status(401).send({ message: 'Email hoặc Mật khẩu không đúng !' });
})
);


userRouter.post('/register', upload.single('image'), expressAsyncHandler(async (req, res) => {

    console.log('cho nay o register');
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        image: req.file.path,
        password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdUser = await user.save();

    res.send({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
        image: createdUser.image,
        token: generateToken(createdUser),
    });
})
);

export default userRouter;