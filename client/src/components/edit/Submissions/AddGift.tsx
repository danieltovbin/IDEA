import { IconButton, Paper, SvgIcon } from '@mui/material'
import NameGift from './Inputs/NameGift'
import PriceGift from './Inputs/PriceGift'
import DescriptionGift from './Inputs/DescriptionGift'
import MoreOptions from './Inputs/MoreOptions'
import { FC } from 'react'
import './scss/stillNoOffers.scss'
import SavedGifts from './SavedGifts'

interface AddGiftProps {
    showAddGift: () => void;
}

const AddGift: FC<AddGiftProps> = ({ showAddGift }) => {
    return (
        <div>
            <Paper elevation={2} style={{ maxWidth: "580px", padding: "0 25px",paddingBottom:"20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p style={{ fontSize: "16px", fontWeight: "bold", lineHeight: "22px" }}>הוספת תשורה לפרויקט:</p>
                    <IconButton style={{ outline: "none" }} tabIndex={0} type="button" onClick={showAddGift}>
                        <span>
                            <SvgIcon focusable={false} viewBox="0 0 24 24" aria-hidden="true" style={{ width: '20px', height: '20px', fill: 'rgb(154, 154, 154)' }}>
                                <path d="M20,20.5a.47.47,0,0,1-.35-.15l-16-16a.49.49,0,0,1,.7-.7l16,16a.48.48,0,0,1,0,.7A.47.47,0,0,1,20,20.5Z"></path>
                                <path d="M4,20.5a.47.47,0,0,1-.35-.15.48.48,0,0,1,0-.7l16-16a.49.49,0,0,1,.7.7l-16,16A.47.47,0,0,1,4,20.5Z"></path>
                            </SvgIcon>
                        </span>
                    </IconButton>
                </div>
                <NameGift />
                <PriceGift />
                <DescriptionGift />
                <MoreOptions />
                <div className='AddBtn'>
                    <button tabIndex={-1} type="button" disabled><span>הוספת תשורה זו לפרויקט</span></button>
                    <a onClick={showAddGift}>ביטול</a>
                </div>
            </Paper>
            <SavedGifts nameGift={''} priceGift={0} descriptionGift={''}/>
        </div>
    )
}

export default AddGift