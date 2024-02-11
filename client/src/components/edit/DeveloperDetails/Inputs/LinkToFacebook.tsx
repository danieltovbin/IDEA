import LabelAndNote from "../../../labelNoteProps/LabelAndNote"
import ValidationTextFields from "../../../validationTextFields/ValidationTextFields"

const LinkToFacebook = () => {
    const isUrlValid = (value:string) => {
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        return urlRegex.test(value)
    }

  return (
    <div>
        <LabelAndNote textLabel={"קישור לעמוד הפייסבוק שלך"} labelHtmlFor={"linkToFacebook"} includeSpan={true} textInSpan={"(לא חובה)"} iconToolTip={""} showTooltip={false} />
        <ValidationTextFields inputId={"linkToFacebook"} placeholder={"העתק קישור לכאן"} customCondition={isUrlValid} customConditionLogic={(value:string)=> !isUrlValid(value)} textError={"הקישור שהכנסת אינו תקין"}/>
    </div>
  )
}

export default LinkToFacebook