import { FC } from "react";
import LabelAndNote from "../../../labelNoteProps/LabelAndNote";
import ValidationTextFields from "../../../validationTextFields/ValidationTextFields"
import { InputProps } from "./InputProps";

const customInputProps = {
    inputMode: "numeric",
    pattern: "[0-9]*",
};
// interface RecruitmentProps {
//     handleChange:(ev:any) => void;
// }
const Recruitment:FC<InputProps> = ({addChangeToProject, value})=> {
    
    return (
        <>
        <LabelAndNote textLabel={"סכום הגיוס"} labelHtmlFor={"recruitment"} includeSpan={false} iconToolTip={""} showTooltip={false} />
        <ValidationTextFields value={value} addChangeToProject={addChangeToProject} name= "aid" inputId={'recruitment'} placeholder={'יש להזין ספרות בלבד.'} inputProps={customInputProps} customCondition={(value) => Number(value) > 0} customConditionLogic={(value) => Number(value) <= 0} textError={'סכום לגיוס חייב להיות חיובי'} />
        </>
    )
}

export default Recruitment