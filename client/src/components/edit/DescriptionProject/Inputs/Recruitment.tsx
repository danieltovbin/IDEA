import LabelAndNote from "../../../labelNoteProps/LabelAndNote";
import ValidationTextFields from "../../../validationTextFields/ValidationTextFields"

const customInputProps = {
    inputMode: "numeric",
    pattern: "[0-9]*",
};

const Recruitment = () => {
    return (
        <>
        <LabelAndNote textLabel={"סכום הגיוס"} labelHtmlFor={"recruitment"} includeSpan={false} iconToolTip={""} showTooltip={false} />
        <ValidationTextFields inputId={'recruitment'} placeholder={'יש להזין ספרות בלבד.'} inputProps={customInputProps} customCondition={(value) => Number(value) > 0} customConditionLogic={(value) => Number(value) <= 0} textError={'סכום לגיוס חייב להיות חיובי'} />
        </>
    )
}

export default Recruitment