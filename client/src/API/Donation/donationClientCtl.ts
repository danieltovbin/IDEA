import axios from "axios";
import { Donation } from "../../vite-env";

export const addDonation = async (donation:Donation) => {
  try {
    const { data } = await axios.post("/API/donation/addDonation", {
      donation
    });
    if (data.ok) return { ok: true };
    else throw new Error("Could not create project");
  } catch (error) {
    console.log("Failed to start project in client Side:");
    console.error(error);
    return { ok: false };
  }
};

export const getDonationsByProject = async () => {
  try {
    const projectId = sessionStorage.getItem("projectId")
    if(!projectId) throw new Error("No projectId found in getDonationsByProject")
    const { data } = await axios.post("/API/donation/allDonationByProject",{projectId});
    console.log("data in getDonations", data);
    if (data) return data;
    else return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const getAllDonations = async () => {
  try {
    const { data } = await axios.get("/API/donation/getAllDonations");
    console.log("data in getAllDonations", data);
    if (data) return data;
    else return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
