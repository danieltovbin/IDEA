import { FC } from 'react';
import './scss/categoryAndBtnMore.scss';

interface CategoryAndBtnMoreProps{
    categoryName: string;

}

const CategoryAndBtnMore:FC<CategoryAndBtnMoreProps> = ({categoryName}) => {
  return (
    <div className='categoryAndBtnMore' style={{display:"flex",justifyContent: "space-between",cursor:'pointer', alignItems: 'center'}}>
        <div>
        <h1 style={{fontSize: "18px",fontWeight: "bold",fontFamily: "Open Sans Hebrew, sans-serif !important", color: "rgba(0, 0, 0, 0.87)"}}>{categoryName}</h1>
        </div>
        <div>
        <button
      type="button"
    >
      <span style={{display: 'flex',alignItems: 'center'}}>
      עוד
        <svg
          className="MuiSvgIcon-root"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          style={{ width: '15px', height: '15px', fill: 'rgba(0, 0, 0, 0.87)',marginTop:'3px' }}
        >
          <path d="M15.72,20a.51.51,0,0,1-.36-.15l-7.43-7.5a.48.48,0,0,1,0-.7l7.43-7.5a.5.5,0,0,1,.71,0,.5.5,0,0,1,0,.71L9,12l7.08,7.15a.5.5,0,0,1,0,.71A.52.52,0,0,1,15.72,20Z"></path>
        </svg>
      </span>
    </button>
        </div>
    </div>
  )
}

export default CategoryAndBtnMore