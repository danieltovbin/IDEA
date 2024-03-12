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
            raised: 5,
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
