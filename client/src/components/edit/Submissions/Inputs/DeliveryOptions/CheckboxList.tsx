import Checkbox from '@mui/material/Checkbox';
import { FC, useState } from 'react';
import './scss/checkboxList.scss';

interface CheckboxListProps {
  text: string;
  showInput?: boolean;
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CheckboxList: FC<CheckboxListProps> = ({ text, showInput = false }) => {
  const [shippingPrice, setShippingPrice] = useState<number | undefined>(undefined);
  const [isChecked, setIsChecked] = useState(false);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const price = Number(event.target.value);
    setShippingPrice(price)
  }

  const handleCheckboxChange = ()=> {
    setIsChecked(!isChecked);
  }
  
  return (
    <div className='CheckboxContainer'>
      <div className='checkboxList' style={{ display: "flex", alignItems: "center" }}>
        <Checkbox {...label} style={{ color: "rgb(56, 134, 2)" }} checked={isChecked} onChange={handleCheckboxChange}/>
        <p style={{ margin: 0 }}>{text}</p>
      </div>
      {showInput && isChecked &&(
        <div className='inputDeliveryPrice'>
          
          <input type="number" min={1} max={1000000} placeholder='עלות המשלוח' value={shippingPrice !== undefined ? shippingPrice : ''} onChange={handlePriceChange} />
        </div>
      )}
    </div>
  )
}

export default CheckboxList