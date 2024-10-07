import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'Username is required'],
        trim: true,
        index: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        trim: true,
        // index: true
    },
    fullname: {
        type: String,
        required: [true, 'Fullname is required'],
    },
    videoHistory: {
        type: Schema.Types.ObjectId,
        ref: 'Video',
    },
    profileImage: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
})

UserSchema.pre('save', function (next) {
    if (!this.isModified('password')) return next();
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

UserSchema.methods.comparePassword = function (plaintext, callback) {
    return callback(null, bcrypt.compareSync(plaintext, this.password));
};

UserSchema.methods.generateRefreshToken = function () {
    return jwt.sign({ id: this._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.env.REFRESH_TOKEN_SECRET_EXPIRE });
};
UserSchema.methods.generateAccessToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.ACCESS_TOKEN_SECRET_EXPIRE });
};


export const User = mongoose.model('User', UserSchema);