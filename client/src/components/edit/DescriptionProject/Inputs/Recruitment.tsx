import { FC } from "react";
import ValidationTextFields from "../../../validationTextFields/ValidationTextFields"

const customInputProps = {
    inputMode: "numeric",
    pattern: "[0-9]*",
};
interface RecruitmentProps {
    handleChange:(ev:any) => void;
}
const Recruitment:FC<RecruitmentProps> = ({handleChange}) => {
    
    return (
        <ValidationTextFields labelText={'סכום הגיוס'} labelHtmlFor={'recruitment'} inputId={'recruitment'} placeholder={'יש להזין ספרות בלבד.'} inputProps={customInputProps} customCondition={(value) => Number(value) > 0} customConditionLogic={(value) => Number(value) <= 0} textError={'סכום לגיוס חייב להיות חיובי'} />
    )
}

export default Recruitment