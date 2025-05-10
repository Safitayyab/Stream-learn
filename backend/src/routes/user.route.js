import express from 'express';
import { protectRoute } from '../middleware/auth.middleware';
import { getRecommendedUsers, getFriends } from '../controllers/user.controller.js';

const router = express.Router();
router.use(protectRoute);

router.get("/", getRecommendedUsers);
router.get("/friends", getFriends);


export default router;