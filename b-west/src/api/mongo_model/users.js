import mongoose, {Schema} from 'mongoose'
import bcrypt from 'bcrypt';
import uniqueValidator from 'mongoose-unique-validator';
import mongoosePaginate from 'mongoose-paginate';
import {valideEmail} from "../../utils/index";

let defaultDate = new Date();
defaultDate.setFullYear(defaultDate.getFullYear() - 2);
const userSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exist'], lowercase: true, trim: true
    },
    password: {type: String, select: false},
    username: {type: String, unique: [true, 'Username already exist'], lowercase: true, trim: true},
    token: {type: String, default: ''},
    lastLogin: {type: Date, default: '12/10/1990'},
    createdAt: {type: Date, default: Date.now()},
});
userSchema.pre('save', function (next) {
    let user = this;
    // only hash the password if it has been modified (or is new)
    if (!this.isModified('password')) {
        next();

    } else {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) return next(err);
            bcrypt.hash(user.password, salt, function (err, hash) {
                user.password = hash;
                next();
            });
        });
    }

});

userSchema.path('email').validate(function (email) {
    return valideEmail(email);
}, 'The e-mail is invalid.');
userSchema.methods.comparePwd = function (password, done) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        done(err, isMatch);
    });
};
userSchema.plugin(uniqueValidator);
mongoosePaginate.paginate.options = {
    lean: true,
    limit: 12
};
userSchema.plugin(mongoosePaginate);
export default mongoose.model('User', userSchema);