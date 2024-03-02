const User = require('../Models/User')

const updateUserQuestionCount = async (req, res, next) => {
    try {
        const user = await User.findOne({ name: req.user.name });

        user.questionCount = (user.questionCount || 0) + 1;

        await user.save();

        next();
    } catch (error) {
        console.error('Error updating user question count:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports =  { updateUserQuestionCount }