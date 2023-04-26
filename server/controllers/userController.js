const { User } = require("../models/models");
const ApiError = require("../error/ApiError");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const generateJWT = (id, email, role) => {
    return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
        expiresIn: "24h",
    });
};

class UserController {
    async registration(req, res, next) {
        const { email, password, role } = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest("Некорректный пароль или почта"));
        }
        const candidate = await User.findOne({ where: { email } });
        if (candidate) {
            return next(
                ApiError.badRequest("Пользователь стаким email уже существует")
            );
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({ email, role, password: hashPassword });
        const token = generateJWT(user.id, user.email, user.role);
        return res.json({ token });
    }

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if(!user) {
            return next(ApiError.badRequest('Пользователь не найден'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if(!comparePassword){
            return next(ApiError.badRequest('Не верный пароль'));
        }
        const token = generateJWT(user.id, user.email, user.role);
        return res.json({ token });
    }

    async check(req, res, next) {}
    async delete(req, res) {}
}

module.exports = new UserController();
