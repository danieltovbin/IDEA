import { FC } from "react";
import LabelAndNote from "../../../labelNoteProps/LabelAndNote";
import ValidationTextFields from "../../../validationTextFields/ValidationTextFields";
import { InputProps } from "../../DescriptionProject/Inputs/InputProps";

const customInputProps = {
  inputMode: "numeric",
  pattern: "[0-9]*",
};

const Phone: FC<InputProps> = ({ value, addChangeToProject }) => {
  return (
    <div>
      <LabelAndNote
        textLabel={"טלפון"}
        labelHtmlFor={"phone"}
        includeSpan={true}
        textInSpan={"(לשימוש פנימי בלבד)"}
        iconToolTip={""}
        showTooltip={false}
      />
      <ValidationTextFields
        value={value}
        addChangeToProject={addChangeToProject}
        name="phoneNumber"
        inputId={"phone"}
        placeholder={"יש להזין ספרות בלבד."}
        inputProps={customInputProps}
        customCondition={(value) => Number(value) >= 0}
        customConditionLogic={(value) => value.length < 9}
        textError={"אנא הכנס מספר טלפון תקין"}
      />
    </div>
  );
};

export default Phone;
