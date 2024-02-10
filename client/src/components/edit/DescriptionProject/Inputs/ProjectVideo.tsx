import LabelAndNote from "../../../labelNoteProps/LabelAndNote"

const ProjectVideo = () => {
    return (
        <div>
            <LabelAndNote textLabel={"סרטון הפרויקט"} labelHtmlFor={"projectVideo"} includeSpan={true} textInSpan={"(לא חובה)"} iconToolTip={"מטרת הסרט היא להיות טיזר, למשוך את תשומת הלב כדי שימשיכו לעמוד הפרויקט,לכן, שימוש בהומור, בקצב מהיר, באלמנטים גרפיים מעניינים, מוזיקה וכו'- יעשו את העבודה. אבל... חכו עם הסרטון, קודם שלחו את הפרויקט לאישור"} showTooltip={true} />
            <input style={{width:"100%"}} id="projectVideo" type="text" />
        </div>
    )
}

export default ProjectVideo