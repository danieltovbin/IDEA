import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import LabelAndNote from '../../../components/labelNoteProps/LabelAndNote';
import '../scss/format.scss';
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
                    <LabelAndNote textLabel={'מה הקטגוריה הראשית של הפרויקט שלך?'} labelHtmlFor={'format'} includeSpan={false} iconToolTip={'מה הקטגוריה שמתארת את הפרויקט שלך בצורה המדויקת ביותר ? חשוב שהפרויקט יופיע במקומות הכי רלוונטים באתר.'} showTooltip={true} />
                    <Autocomplete
                        id='format'
                        sx={{ padding: 0 }}
                        options={options}
                        groupBy={(option) => option.category}
                        getOptionLabel={(option) => option.title}
                        renderOption={(props, option) => (
                            <li {...props}>
                                <span style={{ color: "green" }}>{option.img}</span>
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

