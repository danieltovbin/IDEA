import LabelAndNote from '../../../labelNoteProps/LabelAndNote'
import ValidationTextFields from '../../../validationTextFields/ValidationTextFields'

const ProjectName = () => {
  return (
    <div>
        <LabelAndNote textLabel={'שם הפרויקט'} labelHtmlFor={'projectName'} includeSpan={false} iconToolTip={''} showTooltip={false} />
        <ValidationTextFields inputId={'projectName'} placeholder={'שם יצירתי שייצג את הפרויקט - עד 22 תווים'} customCondition={(value)=> value.length > 0 && value.length <= 22} customConditionLogic={(value) => value.length > 22} textError='הטקסט שהוכנס חורג ממגבלת התוים לשדה זה'/>
    </div>
  )
}

export default ProjectName