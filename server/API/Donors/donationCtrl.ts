import { log } from "console";
import DonationModel from "./donationModel";
import ProjectModel from "../Projects/projectModel";

export async function addDonation(req, res) {
  try {
    const { donation } = req.body;
    if (donation && donation.approvalRegulation) {
      const newDonation = new DonationModel(donation);
      const projectDb= await ProjectModel.findOneAndUpdate(
        { _id: donation.projectId },
        {
          $inc: {
            raised: donation.donationSum,
          },
        }
        );
        
        const giftsDonation = {
          donationId: newDonation._id.toString(), 
          sumOfDonations: newDonation.donationSum
        }

        const giftIndex = projectDb.gifts.findIndex(gift => gift._id == donation.giftId);
        if (giftIndex === -1) {
          throw new Error('Gift not found');
        }
        projectDb.gifts[giftIndex].donations.push(giftsDonation);


        
      await newDonation.save();
      await projectDb.save();

      console.log(newDonation);
      console.log(projectDb)
      res.send({ ok: true, newDonation });
    } else {
      res.send({ ok: false });
      throw new Error("Donation not approved");
    }
  } catch (error) {
    console.error(error);
  }
}


export async function allDonationsByProject(req, res) {
  try {
    const {projectId} = req.body;
    const allDonations = await DonationModel.find({projectId:projectId});
    if (allDonations.length === 0) {
      return res.send({ ok: true, allDonations: [] });
    }
    res.send({ ok: true, allDonations });
  } catch (error) {
    console.error(error);
    res.status(500).send({ ok: false, error: "Internal Server Error" });
  }
}

export async function getAllDonations(req, res) {
  try {
    const allDonations = await DonationModel.find({});
    if (allDonations.length === 0) {
      return res.send({ ok: true, allDonations: [] });
    }
    res.send({ ok: true, allDonations });
  } catch (error) {
    console.error(error);
    res.status(500).send({ ok: false, error: "Internal Server Error" });
  }
}
