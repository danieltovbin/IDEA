import { FC } from "react"

interface BtnProps {
    classname: string;
    onEditClick: () => void;
    onDeleteClick: () => void;
}
const BtnEditAndDelete:FC<BtnProps>= ({onEditClick,onDeleteClick,classname}) => {
   
    return (
        <div className={classname}>
            <button style={{ position: "absolute", bottom: "60px"}} tabIndex={0} type="button" onClick={onEditClick}>
                <span >
                    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" style={{ width: '24px', height: '24px', fill: 'rgb(56, 134, 2)' }}>
                        <path d="M4,20.5a.47.47,0,0,1-.35-.15.49.49,0,0,1-.13-.49L4.91,15A.46.46,0,0,1,5,14.78L15.76,4.05a2,2,0,0,1,2.68,0h0L20,5.56a1.91,1.91,0,0,1,0,2.68L9.22,19a.46.46,0,0,1-.21.13L4.14,20.48Zm1.84-5.11L4.73,19.27l3.88-1.11L19.24,7.53a.89.89,0,0,0,0-1.26L17.73,4.76a.91.91,0,0,0-1.26,0Z"></path>
                        <path d="M8.17,16.33a.5.5,0,0,1-.35-.15.5.5,0,0,1,0-.71l9.74-9.74a.5.5,0,0,1,.71.71L8.53,16.18A.51.51,0,0,1,8.17,16.33Z"></path>
                    </svg>
                </span>
                <span ></span>
            </button>
            <button style={{ position: "absolute", bottom: "15px" }} tabIndex={0} type="button" onClick={onDeleteClick}>
                <span >
                    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" style={{ width: '24px', height: '24px', fill: 'rgb(56, 134, 2)' }}>
                        <path d="M12.4,2c0.4,0,0.6,0.3,0.6,0.7l0,0.5h5.6C20,3.2,21,4.3,21,5.6V8 c-0.1,0.3-0.4,0.7-0.8,0.7l-0.8,0L17,21.5c-0.1,0.3-0.4,0.5-0.6,0.5H8.5c-0.3,0-0.5-0.3-0.6-0.5L5.4,8.7l-0.8,0C4.3,8.7,4,8.4,4,8 V5.6c0-1.3,1-2.4,2.3-2.4h5.5l0-0.5C11.8,2.3,12,2,12.4,2z M18.1,8.7H6.7l2.3,12h6.7L18.1,8.7z M10.5,10.5l1.3,6.7 c0,0.3-0.1,0.7-0.6,0.8c-0.3,0-0.5-0.3-0.6-0.5l-1.3-6.7c-0.1-0.4,0.1-0.7,0.5-0.8S10.4,10.1,10.5,10.5z M15.2,10 c0.4,0.1,0.5,0.4,0.5,0.8l-1.3,6.7C14.3,17.7,14,18,13.7,18c-0.5-0.1-0.6-0.4-0.6-0.8l1.3-6.7C14.5,10.1,14.8,10,15.2,10z M12,4.5 l-5.8,0C5.7,4.7,5.3,5.1,5.3,5.6v1.7h14.3V5.6c0-0.5-0.4-1.1-1-1.1l-5.7,0c-0.1,0.1-0.2,0.1-0.4,0.1C12.3,4.7,12.1,4.6,12,4.5z"></path>
                    </svg>
                </span>
                <span ></span>
            </button>
        </div>
    )
};

export default BtnEditAndDelete