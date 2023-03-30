const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const dotenv = require('dotenv');

dotenv.config();

router.post(
    '/register',
    [
        check('email', 'Please enter a valid email address').isEmail(),
        check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { email, password } = req.body;

            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
            }

            user = new User({  email, password });
            await user.save();

            const payload = { user: { id: user.id } };
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.status(200).json({ status: 200, token });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

router.post(
    '/login',
    [
        check('email', 'Please enter a valid email address').isEmail(),
        check('password', 'Password is required').exists(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const { email, password } = req.body;

            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
            }
            console.log('user', user);
            const payload = { user: { id: user.id } };
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.status(200).json({ status: 200, token, user });
        }

        catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;