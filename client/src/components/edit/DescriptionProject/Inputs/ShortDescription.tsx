import { FC } from "react";
import LabelAndNote from "../../../labelNoteProps/LabelAndNote";
import ValidationTextFields from "../../../validationTextFields/ValidationTextFields";
import { InputProps } from "./InputProps";
import './scss/ShortDescription.scss';

const ShortDescription: FC<InputProps> = ({addChangeToProject, value})=> {

  return (
    <>
      <LabelAndNote textLabel={"תיאור קצר של הפרויקט"} iconToolTip={"זה המקום לכתוב בכמה מילים את מטרת הגיוס ולגרום לאנשים להבין שהם הולכים לקחת חלק במשהו גדול. שירגישו שהם לא רוצים לפספס את ההזדמנות לקחת חלק במימושו. המלל יופיע מתחת לתמונת הפרויקט שלך באתר."} labelHtmlFor={"shortDescription"} showTooltip={true} includeSpan={false} />
      <ValidationTextFields value={value} name="shortDescription" inputId={"shortDescription"} placeholder={"עד 140 תווים"} customCondition={(value) => value.length > 0 && value.length <= 140} customConditionLogic={(value) => value.length > 140} textError={'הטקסט שהוכנס חורג ממגבלת התוים לשדה זה'} addChangeToProject={addChangeToProject}/>
    </>
  )
}

export default ShortDescription

