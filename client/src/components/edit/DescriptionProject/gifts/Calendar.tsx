import { createTheme } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs from 'dayjs';
import 'dayjs/locale/he'; // יבוא של תמיכה בשפה העברית לתוך ספריית Day.js

dayjs.locale('he'); // הגדרת שפה העברית עבור ספריית Day.js


export default function StaticDatePickerLandscape() {
  return (
    <>
      <LocalizationProvider  dateAdapter={AdapterDayjs}>
        <StaticDatePicker className="calendar" defaultValue={dayjs("2022-04-17")} />
        <StaticDatePicker
        displayStaticWrapperAs="desktop"
        openTo="day"
        value={new Date()}
        // allowKeyboardControl={false}
        orientation="landscape"
        // renderInput={(params) => <input {...params} />}
        // inputFormat="dd/MM/yyyy"
        // inputProps={{ readOnly: true }}
      />
      </LocalizationProvider>
    </>
  );
}
