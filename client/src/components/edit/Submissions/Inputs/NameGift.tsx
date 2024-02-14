import LabelAndNote from "../../../labelNoteProps/LabelAndNote"
import ValidationTextFields from "../../../validationTextFields/ValidationTextFields"

const NameGift = () => {
  return (
    <div style={{marginTop: "10px"}}>
        <LabelAndNote textLabel={"שם התשורה (עד 60 תווים)"} labelHtmlFor={"nameGift"} includeSpan={false} iconToolTip={""} showTooltip={false} />
        <ValidationTextFields inputId={"nameGift"} placeholder={"שם התשורה"} customCondition={(value)=> value.length > 0 && value.length <= 60} customConditionLogic={(value)=> value.length > 60} textError={'הטקסט שהוכנס חורג ממגבלת התוים לשדה זה'}/>
    </div>
  )
}

export default NameGift

