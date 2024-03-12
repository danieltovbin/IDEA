import Svg from './util/Svg'
import './scss/supporter.scss'

const Supporters = () => {
    return (
        <div className='supporter'>
            <ul>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <img style={{ width: '40px', height: '40px', fill: 'rgb(255, 13, 144)' }} src="https://headstart.co.il/static/anonymousUserAvatars/headstart/anonymous5Support.webp" alt="" />
                        <div style={{ marginRight: '5px' }}>
                            <p style={{ fontSize: '11px', fontWeight: 'bold' }}>תומך אנונימי</p>
                            <p style={{ fontSize: '11px' }}>הד-סטאר</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', paddingLeft: '30%' }}>
                        <div style={{ display: 'flex', margin: '0 18px', marginTop: '5px' }}>
                            <Svg />
                            <div style={{ marginRight: '5px' }}>
                                <p style={{ fontSize: '11px' }}>הצטרפ.ה ב:</p>
                                <p style={{ fontSize: '11px', fontWeight: 'bold' }}>27/12/2012</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', margin: '0 18px', marginTop: '5px' }}>
                            <div style={{ margin: 'auto' }}>
                                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" style={{ width: '24px', height: '24px', fill: 'rgb(72, 173, 2)' }}>
                                    <path d="M12.59,20.5a5.54,5.54,0,0,1-3.92-1.62l-4.5-4.5a1.53,1.53,0,0,1-.43-1.05,1.48,1.48,0,0,1,1.48-1.48,2.32,2.32,0,0,1,1,.23l1.69.85V6.43A1.55,1.55,0,0,1,9.46,4.89,1.4,1.4,0,0,1,10,5a1.55,1.55,0,0,1,3.09,0,1.4,1.4,0,0,1,.54-.1,1.54,1.54,0,0,1,1.54,1.49,1.68,1.68,0,0,1,.55-.1,1.54,1.54,0,0,1,1.54,1.54v8A4.68,4.68,0,0,1,12.59,20.5ZM5.22,12.85a.48.48,0,0,0-.34.82l4.5,4.5a4.47,4.47,0,0,0,3.21,1.33,3.68,3.68,0,0,0,3.67-3.68v-8a.54.54,0,0,0-.54-.54.55.55,0,0,0-.55.54V11a.5.5,0,0,1-.5.5.51.51,0,0,1-.5-.5V6.43a.54.54,0,1,0-1.08,0V11a.51.51,0,0,1-.5.5.5.5,0,0,1-.5-.5V5a.55.55,0,0,0-.55-.54A.54.54,0,0,0,11,5V11a.5.5,0,0,1-1,0V6.43a.54.54,0,0,0-.54-.54.55.55,0,0,0-.55.54v7.31a.49.49,0,0,1-.72.44L5.77,13A1.17,1.17,0,0,0,5.22,12.85Z">
                                    </path>
                                </svg>
                            </div>
                            <div style={{ marginRight: '5px' }}>
                                <p style={{ fontSize: '11px' }}>תמכ.ה ב:</p>
                                <p style={{ fontSize: '11px', fontWeight: 'bold' }}>6  פרויקטים</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Supporters