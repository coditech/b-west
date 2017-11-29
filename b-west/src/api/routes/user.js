import jwt from 'jsonwebtoken';
import moment from 'moment';
import User from '../mongo_model/users';
import config from '../config';

const createToken = name => {
    let payload = {
        sub: name,
        exp: moment().add(1, 'day').unix()
    };

    return jwt.sign(payload, config.TOKEN_SECRET);
};
const signup = (req, res) => {
    const {username, email} = req.body;

    User.findOne({
        $or: [{
            email: email
        }, {
            username: username
        }]
    }, (err, existingUser) => {
        let response = {
            success: true,
            errors: {},
            message: ''
        };

        if (existingUser) {
            if (existingUser.email === existingUser) {
                response.errors.email = 'Email already exist';
                response.errors.username = 'Username already exist';
            }
            response = {
                ...response,
                success: false,
            };
            if (existingUser.username === username) {
                response.errors.username = 'Username already exist';
            }
            if (existingUser.email === email) {
                response.errors.email = 'Email already exist';
            }
            response.message = 'check the errors and submit again'
            return res.json(response);
        }

        const token = createToken(req.body.email);
        const user = Object.assign(new User(), {...req.body, token});
        user.save((err, result) => {
            if (err) {
                res.send({
                    err,
                    body: req.body,

                });
            }
            else {
                res.json({
                    success: true,
                    message: 'Welcome to Doggo, you are now logged in',
                    token: user.token,
                    user: result
                });
            }
        });
    });
};
const login = (req, res) => {

    const {email, password} = req.body;
    let response = {
        success: true,
        errors: {},
        message: ''
    };
    User.findOne({
        email
    }, 'password').exec((err, user) => {
        if (!user) {
            response.success = false;
            response.message = 'Invalid email/password 1';
            return res.json(response);
        }
        user.comparePwd(password, (err, isMatch) => {

            if (!isMatch) {
                response.success = false;
                response.message = 'Invalid email/password 2';

                return res.json(response);
            }

            User.findOne({
                email
            }, (err, user) => {

                user.lastLogin = new Date();
                user.save();


                const token = createToken(user.email);
                user.token = token;
                response.token = token;
                response.user = user;
                res.json(response);
            });

        });
    });
};

const verifyAuth = (req, res, next) => {
    // Get the token from the header x-access-token
    const token = req.headers['x-access-token'];
    if (token) {
        // Verifies the token and the expiration
        jwt.verify(token, config.TOKEN_SECRET, function (err, payload) {
            // If the verification fails it returns http status 403
            if (err) {
                return res.status(403).send({
                    message: 'Failed to authenticate token.'
                });
            } else {
                // Goes to the next route since there are no errors

                User.findOne({token}, (err, user) => {

                    if (err) {
                        res.json({
                            success: false,
                            errors: {},
                            message: 'Something wen wrong try to login again'
                        })
                    }
                    req.user = user;
                    next();

                });
            }
        });
    } else {
        // Requests without token return http status 4003
        return res.status(403).send({
            message: 'No token provided.'
        });
    }
};
const checkAuth = (req, res, next) => {
    // Get the token from the header x-access-token
    const token = req.headers['x-access-token'];
    if (token) {
        // Verifies the token and the expiration
        jwt.verify(token, config.TOKEN_SECRET, function (err, payload) {

            // If the verification fails it returns http status 403
            if (err) {
                next();
            } else {
                // Goes to the next route since there are no errors

                User.findOne({token}, (err, user) => {

                    if (err) {
                        // res.json({
                        //     success: false,
                        //     errors: {},
                        //     message: 'Something wen wrong try to login again'
                        // })
                    }
                    req.user = user;
                    next();

                });
                // next();
            }


        });
    } else {
        next();
    }


};
const updateUser = (req, res) => {
    const {id, password} = req.body;
    User.findById(id, (err, user) => {
        if (err) {
            res.send({
                success: false,
                message: 'User not found'
            })
        }

        user.password = password || user.password;
        user.save((err, user) => {
            if (err) {
                res.send({
                    success: false,
                    message: 'Something went wrong',
                    err
                })
            }
            res.status(200).send({
                success: true,
                message: 'User updated',
                data: {
                    user, body: req.body
                }
            });
        });
    })
};

const getUsers = (req, res) => {
    User.find({}, function (err, users) {
        if (err) {
            res.send({
                success: false,
                message: 'some error in users route',
                users: []
            })
        } else {

            res.send({
                success: true,
                users
            });
        }
    });
};
export {
    signup,
    login,
    verifyAuth,
    updateUser,
    checkAuth,
    getUsers
};
