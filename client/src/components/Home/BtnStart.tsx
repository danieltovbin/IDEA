import { MdDoubleArrow } from "react-icons/md";
import "./btnStart.scss";

import { useNavigate } from 'react-router-dom';

const BtnStart = () => {
    const navigate = useNavigate()
    function startProject(){
      if(sessionStorage.getItem("userToken"))
        navigate("/format")
      else{
        alert("על מנת ליצור פרוייקט עליך להיות מחובר")
        navigate("/login")
      }
    }
  return (
    <div className='btnStartDiv'>
        <button onClick={startProject}>Start here <MdDoubleArrow className="icon"/></button>
    </div>
  )
}

export default BtnStart