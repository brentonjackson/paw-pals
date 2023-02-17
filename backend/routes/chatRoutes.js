import express from "express";
const router = express.Router();

import { getMessage } from "../controllers/chats.js";
import { getMessages } from "../controllers/chats.js";

router.get("/", getMessages);
router.get("/message", getMessage);

export default router;
