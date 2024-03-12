import React from 'react'
import './scss/comments.scss'

const Comments = () => {
  return (
    <div>
        <div style={{paddingBottom: '8px'}}>
        <p className='header'>תומכים בלבד משתתפים בתגובות!</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '25px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div>
                <img width="40px"
          height="40px"
          style={{ borderRadius: '50%' }} src="https://headstart.co.il/static/anonymousUserAvatars/headstart/anonymous1Support.webp" alt="" />
                </div>
                <div style={{ padding: '0px 14px'}}>
                    <h2 style={{fontSize: '13px', padding:0}}>שם</h2>
                    <p style={{fontSize: '11px', color: 'rgb(125, 125, 125)'}}>הגיב לפני שעות</p>
                </div>
            </div>
            <div className='comment' style={{backgroundColor: 'rgba(214, 214, 214, 0.5)'}}><span style={{fontSize: '13px'}}>פרוייקט מדהים אלופה מרגשת ומוכשרת</span></div>
        </div>
    </div>
  )
}

export default Comments

// 20 comments