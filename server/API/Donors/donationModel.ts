import { Schema, model } from "mongoose";
import UserModel from "../Users/usersModel";


export const DonationSchema = new Schema({
  giftId: String,
  projectId: String,
  userToken:String,
  name: String,
  email: String,
  address: String,
  city: String,
  rewardAmount: Number,
  donationSum: Number,
  noteToOwner: String,
  comment: String,
  approvalRegulation: {type: Boolean, required:true},
  anonymous: {type: Boolean, default: false},
  date: {type:Date, default:new Date()},
});

const DonationModel = model("donation", DonationSchema);
export default DonationModel;
