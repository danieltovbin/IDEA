import { FC } from 'react'
import LabelAndNote from '../../../labelNoteProps/LabelAndNote'
import ValidationTextFields from '../../../validationTextFields/ValidationTextFields'
import './scss/WordsAboutYou.scss'
import { InputProps } from '../../DescriptionProject/Inputs/InputProps'

const WordsAboutYou: FC<InputProps> = ({value, addChangeToProject}) => {
  return (
    <div style={{height:"160px"}} className='WordsAboutYou'>
        <LabelAndNote textLabel={'כמה מילים עליך'} labelHtmlFor={'WordsAboutYou'} includeSpan={false} iconToolTip={'כדאי לכתוב מספר מילים אישיות על מנת לאפשר לקהל הרחב להיחשף, להתרשם ולהתחבר אליך ממקום אישי יותר'} showTooltip={true} />
        <ValidationTextFields value={value} addChangeToProject={addChangeToProject}  inputId={'WordsAboutYou'} name='ownerDescription' placeholder={'עד 140 תווים'} customCondition={(value)=> value.length > 0 && value.length <=140} customConditionLogic={(value)=> value.length > 140} textError={'הטקסט שהוכנס חורג ממגבלת התוים לשדה זה'}/>
    </div>
  )
}

export default WordsAboutYou