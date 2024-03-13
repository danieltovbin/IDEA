import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs from 'dayjs';
import 'dayjs/locale/he';

dayjs.locale('he');


export default function StaticDatePickerLandscape() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker className="calendar" defaultValue={dayjs("2022-04-17")} />
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo="day"
          value={new Date()}
          orientation="landscape"
        />
      </LocalizationProvider>
    </>
  );
}
