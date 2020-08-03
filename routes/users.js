const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.json({message: err});
    }
});

router.get('/:postId', async (req, res) => {
    try{
        // i love you infinite amounts 
        const user = await User.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message: err});
    }
});

router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.title
    });
    try{
        const savedUser = await user.save();
        res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
});

router.delete('/:userId', async (req, res) => {
    try{
        const removedUser = await User.deleteOne({_id: req.params.postId});
        res.json({message: err});
    }catch(err){
        res.json({message: err});
    }
});

router.patch('/:postId', async (req, res) => {
    try{
        const updatedUser = await User.updateOne({_id: req.params.postId}, {$set: {title: req.body.title}});
        res.json(updatedUser);
    }catch(err){
        res.json({message});
    }
});

module.exports = router;