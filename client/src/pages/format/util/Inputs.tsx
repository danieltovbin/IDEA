import Autocomplete from '@mui/material/Autocomplete';
import '../scss/format.scss';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import { TextField } from '@mui/material';
import { options } from './OptionsCategories';


const Inputs = () => {
    return (
        <>
            <form>
                <div style={{ display: 'flex', flexDirection: "column" }}>
                    <label htmlFor="nameProject">שם הפרויקט</label>
                    <input id="nameProject" name="text" type="text" placeholder="שם יצירתי שייצג את הפרויקט - עד 22 תווים" />
                </div>
                <div style={{ display: 'flex', flexDirection: "column" }}>
                    <div className="note">
                        <AnnouncementOutlinedIcon sx={{ margin: "40px 0px 0px", color: "#52b110" }} />
                        <label htmlFor="category">מה הקטגוריה הראשית של הפרויקט שלך?</label>
                    </div>
                    <Autocomplete
                    sx={{padding:0}}
                        options={options}
                        groupBy={(option) => option.category}
                        getOptionLabel={(option) => option.title}
                        renderOption={(props, option)=>(
                            <li {...props}>
                                <span style={{color:"green"}}>{option.img}</span>
                                {option.title}
                            </li>
                        )}
                        renderInput={(params) => <TextField
                            {...params}
                            placeholder="לפתיחת רשימת הקטגוריות"
                            variant="outlined"
                            fullWidth
                            InputProps={{ ...params.InputProps, autoComplete: 'off' }}
                          />}
                    />
                </div>
                <button className='btnNextLevel'>שמירה והמשך לשלב הבא</button>
            </form>

        </>
    )
}

export default Inputs

