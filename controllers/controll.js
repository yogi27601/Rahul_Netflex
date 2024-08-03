const { modelpost } = require('../models/model');

let createPost = async (req, res) => {
   try {
       let { largeText, smallText } = req.body;
       let saved_data = await modelpost({
           largeText,
           smallText
       }).save();
       res.json(saved_data);
   } catch (error) {
       res.status(500).json({ message: 'Error creating post', error });
   }
}

let get_data = async (req, res) => {
    try {
        let get_data = await modelpost.find()
        res.json(get_data);
    } catch (error) {
        res.status(500).json({ message: 'Error creating get', error });
    }
 }
 
module.exports = { createPost, get_data };
