import React from 'react'
import LabelAndNote from '../../../labelNoteProps/LabelAndNote'
import ValidationTextFields from '../../../validationTextFields/ValidationTextFields'

const Residence = () => {
  return (
    <div>
        <LabelAndNote textLabel={'מקום מגורים'} labelHtmlFor={'Residence'} includeSpan={false} iconToolTip={''} showTooltip={false} />
        <ValidationTextFields inputId={'Residence'} placeholder={'עד 30 תווים'} customCondition={(value)=> value.length > 0 && value.length <= 30} customConditionLogic={(value)=> value.length > 30} textError={'הטקסט שהוכנס חורג ממגבלת התוים לשדה זה'}/>
    </div>
  )
}

export default Residence