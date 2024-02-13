import SelectAndDropImg from '../../util/selectAndDropImg/SelectAndDropImg';
import SelectFileFromIcon from './SelectFileFromIcon';
import './scss/PicProj.scss'


const PicProject = () => {
    
    return (
        <div>
        <SelectAndDropImg classname={'picProject'} inputId={'picProject'} selectFileComponent={<SelectFileFromIcon />} />
        </div>
    )
}

export default PicProject