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
