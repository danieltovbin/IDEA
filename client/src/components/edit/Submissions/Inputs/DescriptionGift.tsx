import LabelAndNote from "../../../labelNoteProps/LabelAndNote"
import ValidationTextFields from "../../../validationTextFields/ValidationTextFields"

const DescriptionGift = () => {
  return (
    <div style={{marginTop: "40px"}}>
        <LabelAndNote textLabel={"תיאור התשורה"} labelHtmlFor={"descriptionGift"} includeSpan={false} iconToolTip={""} showTooltip={false} />
        <ValidationTextFields inputId={"descriptionGift"} name="descriptionGift" placeholder={"עד 2500 תווים"} customCondition={(value)=>value.length > 0 && value.length < 2500} customConditionLogic={(value) => value.length > 2500} textError="הטקסט שהוכנס חורג ממגבלת התוים לשדה זה" />
    </div>
  )
}

export default DescriptionGift