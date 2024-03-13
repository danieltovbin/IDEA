import { FC } from 'react'
import LabelAndNote from '../../../labelNoteProps/LabelAndNote'
import ValidationTextFields from '../../../validationTextFields/ValidationTextFields'
import { InputProps } from '../../DescriptionProject/Inputs/InputProps'

const EntrepreneurName: FC<InputProps> = ({addChangeToProject, value})=> {
  return (
    <div>
        <LabelAndNote textLabel={'שם היזם/ת'} labelHtmlFor={'entrepreneurName'} includeSpan={false} iconToolTip={''} showTooltip={false} />
        <ValidationTextFields value={value} name={"ownerName"} addChangeToProject={addChangeToProject} inputId={'entrepreneurName'} placeholder={'עד 30 תווים'} customCondition={(value)=> value.length > 0 && value.length <=30} customConditionLogic={(value)=> value.length > 30} textError={'הטקסט שהוכנס חורג ממגבלת התוים לשדה זה'}/>
    </div>
  )
}

export default EntrepreneurName

