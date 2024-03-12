import { Box, Stepper } from "@mui/material";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { FC, useState } from "react";
import { Donation, Gift, Project } from "../../../vite-env";
import PaymentDetails from "./PaymentDetails";
import PersonalDetails from "./PersonalDetails";
import SumOfSupport from "./SumOfSupport";
import "./chosenGiftDisplay.scss";
import { log } from "console";
import { addDonation } from "../../../API/Donation/donationClientCtl";

interface GiftCompProps {
  gift: Gift;
  project: Project;
}

const ChosenGiftDisplay: FC<GiftCompProps> = ({ gift, project }) => {
  const steps = ["סכום תמיכה", "פרטים אישיים", "פרטי עסקה"];
  const [activeStep, setActiveStep] = useState(0);
  const [donation, setDonation] = useState<Donation>({
    giftId: gift._id,
    projectId: sessionStorage.getItem("projectId") || "",
    name: "",
    email: "",
    address: "",
    city: "",
    userToken: sessionStorage.getItem("userToken") || "",
    rewardAmount: 0,
    donationSum: 0,
    noteToOwner: "",
    comment: "",
    approvalRegulation: false,
    anonymous: false,
  });

  const totalSteps = () => {
    return steps.length;
  };

  const handleNext = (index: number) => {
    if (index < totalSteps()) setActiveStep(index);
    else setActiveStep(0);
  };

  const handleDonationChanges = (donationChanges: any) => {
    const updatedDonation = { ...donation };

    for (const key in donationChanges) {
      if (Object.prototype.hasOwnProperty.call(donationChanges, key)) {
        if (
          typeof donationChanges[key] === "object" &&
          donationChanges[key] !== null
        ) {
          for (const subKey in donationChanges[key]) {
            if (
              Object.prototype.hasOwnProperty.call(donationChanges[key], subKey)
            ) {
              //@ts-ignore
              if (subKey in updatedDonation[key]) {
                //@ts-ignore
                updatedDonation[key][subKey] = donationChanges[key][subKey];
              }
            }
          }
        } else {
          if (key in updatedDonation) {
            //@ts-ignore
            updatedDonation[key] = donationChanges[key];
          }
        }
      }
    }

    setDonation(updatedDonation);
    console.log(updatedDonation);
  };

  const handleSubmitDonation = async () => {
    await addDonation(donation);
  };

  return (
    <div className="chosenGiftDiv" dir="ltr">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {(() => {
          switch (activeStep) {
            case 0:
              return (
                <SumOfSupport
                  gift={gift}
                  project={project}
                  next={handleNext}
                  handleDonationChange={handleDonationChanges}
                />
              );
            case 1:
              return (
                <PersonalDetails
                  gift={gift}
                  project={project}
                  next={handleNext}
                  handleDonationChange={handleDonationChanges}
                />
              );
            case 2:
              return (
                <PaymentDetails
                  gift={gift}
                  donation={donation}
                  next={handleNext}
                  handleDonationChange={handleSubmitDonation}
                />
              );
            default:
              return (
                <PaymentDetails
                  gift={gift}
                  donation={donation}
                  next={handleNext}
                  handleDonationChange={handleSubmitDonation}
                />
              );
          }
        })()}
      </Box>
    </div>
  );
};

export default ChosenGiftDisplay;
