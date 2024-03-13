import axios from "axios";
import { environment } from "../Projects/projectClientCtrl";

export const addDonation = async (donation:Donation) => {
  try {
    const { data } = await axios.post(`${environment}/API/donation/addDonation`, {
      donation
    });
    if (data.ok) return { ok: true };
    else throw new Error("Could not create donation");
  } catch (error) {
    console.error("Failed to start project in client Side:"+error);
    return { ok: false };
  }
};

export const getDonationsByProject = async () => {
  try {
    const projectId = sessionStorage.getItem("projectId")
    if(!projectId) throw new Error("No projectId found in getDonationsByProject")
    const { data } = await axios.post(`${environment}/API/donation/allDonationByProject`,{projectId});
    if (data) return data;
    else return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const getAllDonations = async () => {
  try {
    const { data } = await axios.get(`${environment}/API/donation/getAllDonations`);
    if (data) return data;
    else return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
