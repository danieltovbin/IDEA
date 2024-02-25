import { FC } from "react"
import LabelAndNote from "../../../labelNoteProps/LabelAndNote"
import ValidationTextFields from "../../../validationTextFields/ValidationTextFields"
import { InputProps } from "../../DescriptionProject/Inputs/InputProps"

const NameGift:FC<InputProps> = ({value,addChangeToProject}) => {
  return (
    <div style={{marginTop: "10px"}}>
        <LabelAndNote textLabel={"שם התשורה (עד 60 תווים)"} labelHtmlFor={"nameGift"} includeSpan={false} iconToolTip={""} showTooltip={false} />
        <ValidationTextFields inputId={"nameGift"} name="nameGift" placeholder={"שם התשורה"} customCondition={(value) => value.length > 0 && value.length <= 60} addChangeToProject={addChangeToProject} value={value} />
    </div>
  )
}

export default NameGift

