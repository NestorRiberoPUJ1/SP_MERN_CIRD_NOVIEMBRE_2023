const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        validate: {
            validator: (val) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val),
            message: "Please enter a valid email"
        },
        unique: true,
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: (val) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-=_+{};:'",.<>/?[\]`|~]).{8,}$/.test(val),
            message: "Password must have at least one uppercase, one lowercase, one number, one special character"
        }
    },
    level: {
        type: String,
        required: true,
        enum: ["junior", "mid", "senior"],
        default: "junior"
    }


}, { timestamps: true, versionKey: false });


UserSchema.plugin(uniqueValidator,{ message: 'Email {VALUE} is already taken' });

UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

UserSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});


const User = new mongoose.model("User", UserSchema);

module.exports = User;