// import DeliveryDate from './DeliveryDate';
import DeliveryOptions from './DeliveryOptions/DeliveryOptions';
import './scss/MoreOptions.scss';

const MoreOptions = () => {
    return (
        <div >
          <div className="moreOptions moreOptions__moreOptionsBtn">
            <div >
              <p >אפשרויות נוספות לתשורה (לא חובה)</p>
            </div>
            <div style={{width: "20px", height:"20px"}}>
                <svg focusable="false" viewBox="0 0 24 24" >
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                </svg>
            </div>
          </div>
          <div className='moreOptions moreOptions__moreOptionsContainer'>
           
              
                {/* <DeliveryDate /> */}
                <DeliveryOptions />
            
          </div>
          
        </div>
      );
}

export default MoreOptions