import React from "react";
import GiftStepsDisplay from "./GiftStepsDisplay";
import { TextField } from "@mui/material";

const SumOfSupport = () => {
  return (
    <div>
      <GiftStepsDisplay gift={{}} project={{}} />
      <div className="amountOfGiftsAndSupport">
        <TextField
          label="כמות תשורות"
          name="giftAmount"
          type="number"
          inputProps={{ min: 1}}
          variant="standard"
          //   onChange={handleChange}
        />
        <TextField
          label="סכום לתשלום"
          type="number"
          name="noteToOwner"
          variant="standard"
          //   onChange={handleChange}
        />

        <button>המשך</button>
      </div>
    </div>
  );
};

export default SumOfSupport;
