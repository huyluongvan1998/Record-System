const express = require('express');
const router = express.Router();
const { check , validationResult} = require('express-validator');
const User = require('../../models/User');


//@route: Test Route
//@desc: Get hello message
//@access: Public.

router.get('/', async (req, res) => {
    try {
        const user = await User.find()

        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ errors: 'Server Error '});
    }
})

//@route: Post Route
//@desc: Create and Update user
//@access: Private.

router.post('/',[
    check('name', 'Enter your Name').not().isEmpty(),
    check('email', 'Enter your valid Email ').isEmail()
] ,async (req ,res) => {
    //handle errors from Check
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(401).json({errors : errors.array()});
    }

    const {
        name,
        email,
        age,
        gender
    } = req.body;

    const newUser = {}
    if(name) newUser.name = name;
    if(email) newUser.email = email;
    if(age) newUser.age = age;
    if(gender) newUser.gender = gender;

    try {
        const user = await User.findOne({ email });
        // if user existed then UPDATE
        if(user){
            res.json(
                await User.findOneAndUpdate(
                    {email},
                    newUser,
                    {new: true}
                )
            )
        }
        //if not then Create
        const result = new User(newUser);
        res.json(result);
        await result.save();

    } catch (error) {
        console.error(error);
        res.status(500).json({ errors : 'Server Error '});
    }
})

//@route Delete Route
//@desc: Delete a User
//access: PRIVATE

router.delete('/:id', async (req, res ) => {
    try {
        const user = await User.findByIdAndRemove({ _id: req.params.id });
        
        res.send('Delete Successfully');
    } catch (error) {
        console.error(error);
        res.status(500).json({ errors : 'Server Error '});
    }
})



module.exports = router;