import LabelAndNote from '../../../../labelNoteProps/LabelAndNote'
import CheckboxList from './CheckboxList'

const DeliveryOptions = () => {
  return (
    <div>
        <LabelAndNote textLabel={'אפשרויות משלוח'} labelHtmlFor={'deliveryOptions'} includeSpan={true} textInSpan='(במידה ויש יותר מאופציה אחת)' iconToolTip={'בחרו באפשרות זו רק במידה וישנן שתי אפשרויות משלוח שונות. במידה ויש רק אפשרות אחת הכניסו אותה לתוך תיאור התשורה (וחסכו לתומכים שלכם קליק בדרך)'} showTooltip={true} />
        <CheckboxList />
    </div>
  )
}

export default DeliveryOptions