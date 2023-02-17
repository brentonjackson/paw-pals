import express from "express";
const router = express.Router();

import { getMatch } from "../controllers/matches.js";
import { getMatches } from "../controllers/matches.js";
import { deleteMatch } from "../controllers/matches.js";
import { deleteMatches } from "../controllers/matches.js";

router.get("/", getMatches);
router.get("/match", getMatch);
router.delete("/match", deleteMatch);
router.delete("/", deleteMatches);

export default router;
