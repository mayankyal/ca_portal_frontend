import express = require('express');
import User = require('../models/user');
import Post = require('../models/post');
import { authRequest } from "../helpers/req";


export function getPosts (req: authRequest, res: express.Response) {
    const user = User.findById(req.userID);
    if (!user) {
        res.status(403).json({
            Error: "User does not exist"
        })
        return;
    }
    const p = {
        fbId: "dskdddd",
        expTime: new Date(),
        maxShare: 10
    }
    new Post(p).save();
    
    const allPosts = Post.find({});
    console.log("Posts", allPosts);
}