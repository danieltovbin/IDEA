import LabelAndNote from '../../../labelNoteProps/LabelAndNote'

const ProjectTags = () => {
    return (
        <div>
            <LabelAndNote includeSpan={true} textInSpan={"(לא חובה)"} textLabel={'תגיות הפרויקט'} labelHtmlFor={'projectTags'} iconToolTip={'תגיות הן הדרך שלך לתת ביטוי לכותרות שהכי מתאימות לפרויקט מבחינתך, ולא מצאו מענה ברשימת הקטגוריות. יש לך יד חופשית להמציא תגיות חדשות או לבחור תגיות מתוך הרשימה שתפתח'} showTooltip={true} />
            <input style={{width:"100%"}} type="text" id='projectTags'/>
        </div>
    )
}

export default ProjectTags