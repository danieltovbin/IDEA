import ValidationTextFields from "../../../validationTextFields/ValidationTextFields";

const ShortDescription = () => {

  return (
    <>
      <ValidationTextFields labelText={"תיאור קצר של הפרויקט"} labelHtmlFor={"shortDescription"} inputId={"shortDescription"} placeholder={"עד 140 תווים"} customCondition={(value) => value.length > 0 && value.length <= 140} customConditionLogic={(value) => value.length > 140} textError={'הטקסט שהוכנס חורג ממגבלת התוים לשדה זה'} />
    </>
  )
}

export default ShortDescription

