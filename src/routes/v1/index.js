import express from 'express'
import { createTweet, getTweets } from "../../controllers/tweet-controller.js";
import { toggleLike } from '../../controllers/like-controller.js';
import { createComment } from '../../controllers/comment-controller.js';
import { login, signup } from '../../controllers/auth-controller.js';
import {authenticate} from '../../middlewares/authenticate.js'



const router =express.Router()


router.post('/tweet', authenticate, createTweet)
router.post('/likes/toggle',toggleLike)
router.post('/comments',authenticate, createComment)
router.get('/tweets/:id',getTweets)
router.post('/signup', signup)
router.post('/login', login)

export default router;