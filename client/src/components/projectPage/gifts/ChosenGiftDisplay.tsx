import {
    Box,
    Stepper
} from "@mui/material";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import React, { FC } from "react";
import PersonalDetails from "./PersonalDetails";
import "./chosenGiftDisplay.scss"

interface GiftCompProps {
  gift: Gift;
  project: Project;
}

const ChosenGiftDisplay: FC<GiftCompProps> = ({ gift, project }) => {
  const steps = ["סכום תמיכה", "פרטים אישיים", "פרטי עסקה"];
  const [activeStep, setActiveStep] = React.useState(0);

  const totalSteps = () => {
    return steps.length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = (index: number) => {
    if (index < totalSteps()) setActiveStep(index);
    else setActiveStep(0);
  };

  return (
    <div className="chosenGiftDiv">
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
                <PersonalDetails gift={gift} project={project}/>
              );
            case 1:
              return <div>Step 1 content</div>;
            default:
              return <div>No content for this step</div>;
          }
        })()}
      </Box>
    </div>
  );
};

export default ChosenGiftDisplay;
