import express from "express";
import { addDonation } from "./donationCtrl";
const router = express.Router();
router.post("/addDonation", addDonation);

export default router;
