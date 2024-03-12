import express from "express";
import { addDonation, allDonationsByProject, getAllDonations } from "./donationCtrl";
const router = express.Router();
router.post("/addDonation", addDonation)
router.post("/allDonationByProject", allDonationsByProject)
router.get("/getAllDonations", getAllDonations)

export default router;
