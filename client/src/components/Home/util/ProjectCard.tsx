import React, { FC } from 'react'
import './scss/projectCard.scss'

export interface TopProjectProps {
  projectInfo?: {
    location?: string;
    category?: string;
    ownerName?: string;
    shortDescription?: string;
    aid?: number;
    raised?: number;
    supportsNam?: number;
    leftDays?: number;
    projectName?: string;
  };
}

const ProjectCard:FC<TopProjectProps> = ({projectInfo}) => {
  // const percentRaised = parseInt(((raised / aid) * 100).toString());
  return (
    <div
      style={{
        height: 'auto',
        color: 'rgb(66, 66, 66)',
        border: '1px solid rgb(220, 224, 225)',
        borderRadius: '3px',
        overflow: 'hidden',
        position: 'relative',
        minWidth: '242px',
        width: '242px',
        backgroundColor: 'rgb(255, 255, 255)',
        margin: '0px',
        cursor:'pointer',
        fontFamily: 'Open Sans Hebrew, sans-serif',
        
      }}
    >
      <div className="jsx-2612550306 card-image can-blur">
        <img
          data-src="/image/629f2481-01d9-6da3-947d-73405b52fd06.PNG/300"
          className="jss970 ls-is-cached lazyloaded"
          width="100%"
          height="133px"
          src="/image/629f2481-01d9-6da3-947d-73405b52fd06.PNG/300"
        />
      </div>
      <div>
        <p></p>
      </div>
      <div
        style={{
          fontSize: '16px',
          maxHeight: '48px',
          minHeight: '22px',
          fontWeight:'bold',
          padding: '10px 15px 0px'
        }}
      >
        משקמים את משק דרייר
      </div>
      <div
        style={{
          width: 'calc(100% - 16px)',
          padding: '8px 16px 0px',
          display:"flex"
        }}
      >
        <div>
          <button
            tabIndex={-1}
            type="button"
            disabled
            style={{
              padding: '0px',
              cursor: 'unset',
              width: '24px',
              height: '24px',
            }}
          >
            <span>
              <img
                data-src="/image/55210f62-19f9-0997-4589-d8e946b56266.jpg/50"
                className="jss791 jss1104 undefined ls-is-cached lazyloaded"
                width="24px"
                height="24px"
                style={{ borderRadius: '50%' }}
                src="/image/55210f62-19f9-0997-4589-d8e946b56266.jpg/50"
              />
            </span>
          </button>
        </div>
        <div>
          <div style={{ fontWeight: 'normal',padding: '0px 5px',fontSize: '13px', lineHeight: '17px' }}>
            בועז דרייר
          </div>
        </div>
      </div>
      <div
        style={{
          fontSize: '15px',
          height: '78px',
          position: 'relative',
          overflow: 'hidden',
          overflowWrap: 'break-word',
          whiteSpace: 'pre-lin',
          padding: '10px 16px'
        }}
      >
        אנחנו מזמינים אתכם לקחת חלק ולתמוך בכרם בוטיק אשר ניזון מחומרים אורגנים וללא ריסוסים.
        אנו מייצרים יין טבעי כפי שאבותינו עשו לפנינו.
        <div
          style={{ filter: 'none', backgroundColor: 'rgba(255, 255, 255, 0.6)', bottom: '6px' }}
        ></div>
      </div>
      <div>
        <div>
        {/* <div className="progressBar">
            <div
              className={
                percentRaised < 99 ? "progress" : "progress projectCompleted"
              }
              style={{ width: `${percentRaised}%` }}
            ></div>
            <p
              className={
                percentRaised < 99 ? "percentP" : "percentP percentPCompleted"
              }
              style={{
                position: "relative",
                top: "calc(-100% - 20px )",
                right: `calc(${percentRaised}%  - 20px)`,
              }}
            >
              {percentRaised}%
            </p>
          </div> */}
          <div
            style={{ margin: '0px calc(48% - 25px)' }}
          >
            <span>48%</span>
          </div>
          <div role="progressbar" aria-valuenow={48} aria-valuemin={0} aria-valuemax={100}>
            <div style={{ transform: 'translateX(52%)' }}></div>
          </div>
        </div>
        <div style={{display:"flex",padding: '8px 16px 0',justifyContent: 'space-between'}}>
          <div className='number'>
            <p>
              <span>₪</span>9,520
            </p>
            <p>מתוך <span>₪</span>20,000</p>
          </div>
          <div className='number'>
            <p>2</p>
            <p>ימים נותרו</p>
          </div>
          {/* <div>
            <p>0</p>
            <p>תומכים ה.קבע</p>
          </div> */}
          <div className='number'>
            <p>32</p>
            <p>תומכים.ות</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard