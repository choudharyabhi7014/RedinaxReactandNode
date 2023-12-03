const UserData = require('../modles/Usermodel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret_key = "My name Abhishek"

exports.register = async (req, res, next) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new UserData({ email, password: hashedPassword })
    user.save();
    res.status(201).json({ message: 'User registered successfully' });
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body
    const user = await UserData.findOne({ email })
    if (!user) {
        return res.status(401).json({ message: 'Invalid user1' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid User1' });
    }
    const token = jwt.sign({ userId: user._id }, secret_key, { expiresIn: '1d' })
    res.status(200).json({ message: 'Login successful', token });

}