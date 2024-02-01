const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const User = require("../models/user.model");

const secretKey = process.env.JWT_SECRET_KEY;



/* Controladores Basicos CRUD */
module.exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(200);
        res.json(newUser);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
};
module.exports.findAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200);
        res.json(users);
    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};
module.exports.findUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id });
        if (user) {
            res.status(200);
            res.json(user);
            return;
        }
        res.status(404);
        res.json({ error: "Producto not found" });
    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};
module.exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true });
        res.status(200);
        res.json(updatedUser);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
};
module.exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.deleteOne({ _id: req.params.id });
        res.status(200);
        res.json(deletedUser);

    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};


/* METODO DE LOGIN */

module.exports.login = async (req, res) => {
    try {
        /* Buscar el usuario */
        const user = await User.findOne({ email: req.body.email });
        /* Si no existe paro y retorno resultado */
        if (user === null) {
            res.status(404);
            res.json({
                errors: {
                    email: {
                        message: "user not found"
                    }
                }
            });
            return
        }
        /* Si existe revisamos contraseñas */
        const validatePassword = await bcrypt.compare(req.body.password, user.password);
        /* Si contraseña no coincide paro y retorno resultado */
        if (validatePassword === false) {
            res.status(400);
            res.json({
                errors: {
                    password: {
                        message: "Wrong Password"
                    }
                }
            });
            return
        }
        /* Si contraseña ok generar jwt y cookie */
        const newJWT = jwt.sign({
            _id: user._id,
            level:user.level
        }, secretKey, { expiresIn: '10m' });

        res.cookie("userToken", newJWT, { httpOnly: true });
        res.status(200);
        res.json({ msg: "logged ok" });
    }

    catch (error) {
        res.status(500);
        res.json({
            errors: {
                server: {
                    message: error
                }
            }
        });
    }
};
module.exports.cookie = async (req, res) => {
    try {
        res.cookie("mycookie", "mydata", { httpOnly: true })
        res.json({ message: "ok" })
    } catch (error) {
        res.json(error)
    }
};
module.exports.logout = async (req, res) => {
    try {
        res.clearCookie('userToken');
        res.status(200);
        res.json({ msg: 'Logout successful.' });
    } catch (error) {

    }
};