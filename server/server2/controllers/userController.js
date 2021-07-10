const { Users } = require('../../models');
const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');

// delete, create userrs accounts

//create user accounts and registration

exports.createAccount = async (req, res) => {
    // get user input from the body
    const { firstname, lastname, email, password } = req.body;
    // Hash the password
    await bcrypt.hash(password, 10).then((hash) => {
         Users.create({
             firstname: firstname,
             lastname: lastname,
             email: email,
             password: hash
        });
    });
    
    res.json("successfully reqistered");
};

// login users
exports.loginUser = async (req, res) => {
    // get details being used to log in from the body
    const { email, password } = req.body;
    // find a user whose details match the ones being used to log in
    const user = await Users.findOne({ where: { email: email } });
    if (!user) {
        res.json("No user found");
    }

    // comparing passwords
    bcrypt.compare(password, user.password).then((match) => {
        if (!match) {
            res.json("the email does not match the password");
        }
        // if there is a match log in the user
        const accessToken = sign({ firstname: user.firstname, lastname: user.lastname, email: user.email, id: user.id }, "importantSecret");
        res.json({ token: accessToken, email: user.email, id: user.id, firstname: user.firstname });
    });
};

// validate user
exports.validateUser = (req, res) => {
    res.json(req.user);
};

