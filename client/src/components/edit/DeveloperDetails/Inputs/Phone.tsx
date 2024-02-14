import LabelAndNote from "../../../labelNoteProps/LabelAndNote"
import ValidationTextFields from "../../../validationTextFields/ValidationTextFields";

const customInputProps = {
    inputMode: "numeric",
    pattern: "[0-9]*",
};

const Phone = () => {
  return (
    <div>
        <LabelAndNote textLabel={"טלפון"} labelHtmlFor={"phone"} includeSpan={true} textInSpan={"(לשימוש פנימי בלבד)"} iconToolTip={""} showTooltip={false} />
        <ValidationTextFields inputId={'phone'} placeholder={'יש להזין ספרות בלבד.'} inputProps={customInputProps} customCondition={(value) => value.length >= 9} customConditionLogic={(value) => value.length < 9} textError={'אנא הכנס מספר טלפון תקין'} />
    </div>
  )
}

export default Phone