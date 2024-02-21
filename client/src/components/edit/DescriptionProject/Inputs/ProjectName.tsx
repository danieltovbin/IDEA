import { FC } from "react";
import LabelAndNote from "../../../labelNoteProps/LabelAndNote";
import ValidationTextFields from "../../../validationTextFields/ValidationTextFields";
import { InputProps } from "./InputProps";

const ProjectName: FC<InputProps> = ({addChangeToProject, value}) => {
  console.log("value:"+value);
  
  return (
    <div>
      <LabelAndNote
        textLabel={"שם הפרויקט"}
        labelHtmlFor={"projectName"}
        includeSpan={false}
        iconToolTip={""}
        showTooltip={false}
      />
      <ValidationTextFields
        name="projectName"
        inputId={"projectName"}
        value={value}
        placeholder={"שם יצירתי שייצג את הפרויקט - עד 22 תווים"}
        customCondition={(value) => value.length > 0 && value.length <= 22}
        customConditionLogic={(value) => value.length > 22}
        textError="הטקסט שהוכנס חורג ממגבלת התוים לשדה זה"
        addChangeToProject={addChangeToProject}
      />
    </div>
  );
};

export default ProjectName;
