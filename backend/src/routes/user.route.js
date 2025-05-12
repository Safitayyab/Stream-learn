import express from 'express';
import { protectRoute } from '../middleware/auth.middleware';
import { getRecommendedUsers, getFriends, sendFriendRequest, acceptFriendRequest } from '../controllers/user.controller.js';

const router = express.Router();
router.use(protectRoute);

router.get("/", getRecommendedUsers);
router.get("/friends", getFriends);

router.post("/friend-request/:id", sendFriendRequest);
router.put("/friend-request/:id/accept", acceptFriendRequest);


export default router;