import { FC } from 'react'
import LabelAndNote from '../../../labelNoteProps/LabelAndNote'
import ValidationTextFields from '../../../validationTextFields/ValidationTextFields'
import { InputProps } from '../../DescriptionProject/Inputs/InputProps'

const Residence:FC<InputProps> = ({value, addChangeToProject}) => {
  return (
    <div>
        <LabelAndNote textLabel={'מקום מגורים'} labelHtmlFor={'Residence'} includeSpan={false} iconToolTip={''} showTooltip={false} />
        <ValidationTextFields value={value}  name={"location"} addChangeToProject={addChangeToProject} inputId={'Residence'} placeholder={'עד 30 תווים'} customCondition={(value)=> value.length > 0 && value.length <= 30} customConditionLogic={(value)=> value.length > 30} textError={'הטקסט שהוכנס חורג ממגבלת התוים לשדה זה'}/>
    </div>
  )
}

export default Residence