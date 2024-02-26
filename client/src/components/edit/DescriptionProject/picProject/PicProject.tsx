import { FC } from 'react';
import SelectAndDropImg from '../../util/selectAndDropImg/SelectAndDropImg';
import SelectFileFromIcon from './SelectFileFromIcon';
import './scss/PicProj.scss'

interface PicProjectProps{
    handleChangeToForm:(e:any)=>void;
    imageFromDB:string|null;
  }

  
const PicProject :FC<PicProjectProps> = ({handleChangeToForm, imageFromDB}) => {
    
    return (
        <div>
        <SelectAndDropImg imageFromDB={imageFromDB} handleChangeToForm={handleChangeToForm} classname={'picProject'} inputId={'picProject'} selectFileComponent={<SelectFileFromIcon />} />
        </div>
    )
}

export default PicProject