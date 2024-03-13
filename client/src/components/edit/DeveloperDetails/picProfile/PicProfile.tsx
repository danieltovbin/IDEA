import { FC } from "react";
import SelectAndDropImg from "../../util/selectAndDropImg/SelectAndDropImg";
import SelectFileFromProfile from "./SelectFileFromProfile";
import "./scss/PicProfile.scss";

interface PicProps{
  handleChangeToForm:(e:any)=>void;
  imageFromDB?:string|null;
}

const PicProfile:FC<PicProps> = ({handleChangeToForm, imageFromDB}) => {
  return (
    <SelectAndDropImg
      classname={"PicProfile"}
      inputId={"picProfile"}
      handleChangeToForm={handleChangeToForm}
      imageFromDB={imageFromDB}
      selectFileComponent={<SelectFileFromProfile />}
    />
  );
};

export default PicProfile;
