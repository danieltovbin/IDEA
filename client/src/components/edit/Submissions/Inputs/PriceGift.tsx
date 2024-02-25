import { FC } from "react";
import LabelAndNote from "../../../labelNoteProps/LabelAndNote"
import ValidationTextFields from "../../../validationTextFields/ValidationTextFields"
import { FormComplete } from "./modelGifts";

const customInputProps = {
    inputMode: "numeric",
    pattern: "[0-9]*",
};

const PriceGift:FC<FormComplete> = ({onChange}) => {
  return (
    <div style={{marginTop: "40px"}}>
        <LabelAndNote textLabel={"עלות התשורה"} labelHtmlFor={"priceGift"} includeSpan={false} iconToolTip={""} showTooltip={false} />
        <ValidationTextFields inputId={"priceGift"} placeholder={"יש להזין ספרות בלבד"} inputProps={customInputProps} customCondition={(value) => Number(value) >= 0 && Number(value) < 1000000} customConditionLogic={((value) => Number(value) > 1000000)} textError="ערך לא יכול להיות גדול מ-₪1000000" isRequired={false}  addChangeToProject={onChange}/> 
    </div>
  )
}

export default PriceGift