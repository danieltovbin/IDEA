import { Schema, model } from "mongoose";
import UserModel from "../Users/usersModel";


export const DonationSchema = new Schema({
  userId:{type: String, default:"none"},
  projectId: String,
  userLevel:{type:Number, default:0},
  donorName: {type: String, default:"תומך אנונימי"},
  amount:Number,
  date:Date,
  Comment:String
});

const DonationModel = model("donation", DonationSchema);
export default DonationModel;
