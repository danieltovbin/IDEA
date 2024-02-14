import SelectAndDropImg from "../../util/selectAndDropImg/SelectAndDropImg"
import SelectFileFromProfile from "./SelectFileFromProfile"
import './scss/PicProfile.scss'

const PicProfile = () => {
  return (
    <SelectAndDropImg classname={"PicProfile"} inputId={"picProfile"} selectFileComponent={<SelectFileFromProfile />}  />
    
  )
}

export default PicProfile