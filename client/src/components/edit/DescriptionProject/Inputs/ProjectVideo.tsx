import LabelAndNote from "../../../labelNoteProps/LabelAndNote"
import ValidationTextFields from "../../../validationTextFields/ValidationTextFields"

const ProjectVideo = () => {
    const isValidVideoUrl = (value:string) => {
        const videoUrlRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})|(https?:\/\/)?(www\.)?(vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:|\/\?))/;
        return videoUrlRegex.test(value)
    }

    return (
        <div>
            <LabelAndNote textLabel={"סרטון הפרויקט"} labelHtmlFor={"projectVideo"} includeSpan={true} textInSpan={"(לא חובה)"} iconToolTip={"מטרת הסרט היא להיות טיזר, למשוך את תשומת הלב כדי שימשיכו לעמוד הפרויקט,לכן, שימוש בהומור, בקצב מהיר, באלמנטים גרפיים מעניינים, מוזיקה וכו'- יעשו את העבודה. אבל... חכו עם הסרטון, קודם שלחו את הפרויקט לאישור"} showTooltip={true} />
            <ValidationTextFields inputId={"projectVideo"} placeholder={"קישור לסרטון שלך ל youtube או vimeo"} customCondition={isValidVideoUrl} customConditionLogic={(value)=> !isValidVideoUrl(value)} textError="לינק לסרטון אינו תקין"/>
        </div>
    )
}

export default ProjectVideo