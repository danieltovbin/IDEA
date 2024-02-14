import DeliveryDate from './DeliveryDate';
import './scss/MoreOptions.scss';

const MoreOptions = () => {
    return (
        <div >
          <div className="moreOptions" role="button" aria-controls="projectRewardFormAccordion">
            <div >
              <p >אפשרויות נוספות לתשורה (לא חובה)</p>
            </div>
            <div style={{width: "20px", height:"20px"}}>
                <svg focusable="false" viewBox="0 0 24 24" >
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                </svg>
            </div>
          </div>
          <div style={{ minHeight: 0, height: 0, transitionDuration: '363ms' }}>
            <div>
              <div>
                <div>
                <DeliveryDate />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      );
}

export default MoreOptions