import { Divider, IconButton, Paper, SvgIcon } from '@mui/material'
import NameGift from './Inputs/NameGift'
import PriceGift from './Inputs/PriceGift'
import DescriptionGift from './Inputs/DescriptionGift'
import MoreOptions from './Inputs/MoreOptions'
import { ChangeEvent, FC, useState } from 'react'
import './scss/stillNoOffers.scss'
import SavedGifts from './SavedGifts'

interface AddGiftProps {
    showAddGift: () => void;
}
interface Gift{
    name: string;
    price: string;
    description: string;
    id:string | number;
}

const AddGift: FC<AddGiftProps> = ({ showAddGift }) => {
    const [isFormComplete, setIsFormComplete] = useState(false);
    const [nameGift, setNameGift] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const [nameIsValid, setNameIsValid] = useState(false);
    const [priceIsValid, setPriceIsValid] = useState(false);
    const [descriptionIsValid, setDescriptionIsValid] = useState(false);
    const [giftAdded, setGiftAdded] = useState<Gift[]>([])

    const handleInputChange = (inputName: string, inputValue: string) => {
        const isInputValid = inputValue.trim() !== '';

        switch (inputName) {
            case 'name':
                setNameGift(inputValue)
                setNameIsValid(isInputValid);
                break;
            case 'price':
                setPriceValue(inputValue)
                setPriceIsValid(isInputValid);
                break;
            case 'description':
                setDescriptionValue(inputValue)
                setDescriptionIsValid(isInputValid);
                break;
        }
        setIsFormComplete(nameIsValid && priceIsValid && descriptionIsValid);
    }
    // const handleAddGift = ()=>{
    //     if(isFormComplete){
    //         setGiftAdded(true)
    //         showAddGift
    //     }
    // }
    const updateGiftAdded = () => {
        setGiftAdded([...giftAdded, { name: nameGift, price: priceValue, description: descriptionValue,id:generateUniqueId() }])
    }

    const generateUniqueId = ():string | number=>{
        return Math.random();
    }

    return (
        <div>
            <Paper elevation={2} style={{ maxWidth: "580px", padding: "0 25px", paddingBottom: "20px" }}>
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
                <NameGift addChangeToProject={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('name', e.target.value)} value={nameGift} />
                <PriceGift addChangeToProject={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('price', e.target.value)} value={priceValue} />
                <DescriptionGift addChangeToProject={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('description', e.target.value)} value={descriptionValue} />
                <MoreOptions />
                <div className='AddBtn'>
                    <button onClick={updateGiftAdded} type="button" disabled={!isFormComplete} style={{ backgroundColor: isFormComplete ? '#48ad02' : 'white', color: isFormComplete ? 'white' : 'gray', fontSize: "13px", height: "40px" }}><span>הוספת תשורה זו לפרויקט</span></button>
                    <a onClick={showAddGift}>ביטול</a>
                </div>
            </Paper>
            {giftAdded.length > 0 && (
                <>
                    <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "580px" }}>
                        <p className='title'>
                            תשורות שנשמרו
                        </p>
                        <Divider sx={{ width: "calc(100% - 275px)", borderBottom: "1px solid #d6d6d6", marginBottom: "9px" }} />
                    </div>
                    {giftAdded.map((gift) => (
                        (<div key={gift.id}>
                            <SavedGifts nameGift={gift.name} priceGift={gift.price} descriptionGift={gift.description}  />
                        </div>
                        )
                    ))}

                </>
            )}

        </div>
    )
}

export default AddGift