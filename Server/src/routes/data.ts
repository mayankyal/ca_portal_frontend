import User = require('../models/user');
import jwt = require('jsonwebtoken');
import express = require('express');
import passport = require('passport');
import { authEnsureLogin } from "../controllers/auth";
import { getPosts } from "../controllers/userdata";

const router = express.Router();

router.route('/posts').get(
    authEnsureLogin,
    getPosts
);


export = router;