import express from "express";
const router = express.Router();

import { getProfiles } from "../controllers/profiles.js";
import { getProfile } from "../controllers/profiles.js";
import { createProfile } from "../controllers/profiles.js";
import { editProfile } from "../controllers/profiles.js";
import { deleteProfile } from "../controllers/profiles.js";
import { deleteProfiles } from "../controllers/profiles.js";

router.get("/", getProfiles);
router.get("/profile", getProfile);
router.post("/", createProfile);
router.put("/profile", editProfile);
router.delete("/profile", deleteProfile);
router.delete("/", deleteProfiles);

export default router;
