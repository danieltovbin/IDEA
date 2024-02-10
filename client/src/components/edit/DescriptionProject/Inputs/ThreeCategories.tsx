import { Autocomplete, Chip, TextField } from '@mui/material'
import { useState } from 'react'
import { options } from '../../../../pages/format/util/OptionsCategories'
import LabelAndNote from '../../../labelNoteProps/LabelAndNote'
import './scss/ShortDescription.scss'

interface Option {
    title: string;
    category: string;
    img: React.ReactNode;
  }
  
const ThreeCategories = () => {
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

    const handleSelecteChange = (_: React.SyntheticEvent<Element, Event>,
        value: string[],)=>{
            setSelectedOptions(value.map((title) => options.find((option) => option.title === title) as Option).slice(0, 3));
    }
    return (
        <>
            <LabelAndNote includeSpan={true} textLabel='קטגוריות נוספות לפרויקט' textInSpan="(סה''כ ניתן להגדיר עד 3 קטגוריות)" iconToolTip="יש קטגוריות נוספות אשר מתארות את הפרויקט בצורה טובה? ניתן להוסיף עוד שתי קטגוריות משנה שיצטרפו לקטגוריה הראשית שכבר נבחרה" labelHtmlFor={'threeCategories'} showTooltip={true} />
            <Autocomplete
                size='small'
                multiple
                value={selectedOptions.map(option => option.title) }
                limitTags={3}
                id="threeCategories"
                options={options.map((option) => option.title)}
                onChange={handleSelecteChange}
                defaultValue={[options[13].title]} // צריכות לשים את הקטגוריה שהמשתמש בחר בעמוד של פורמט כקטגוריה דפולטיבית
                renderTags={(value: readonly string[], getTagProps) =>
                    value.map((option: string, index: number) => (
                        <Chip sx={{ height: "22px", width:"17%"}} variant="filled" label={option} {...getTagProps({ index })} />
                    ))
                }
                renderInput={(params) => (
                    <TextField
                        sx={{
                            '& .MuiInputBase-input': {
                                fontSize: "12px",
                            },
                        }}
                        {...params}
                        placeholder="לפתיחת רשימת הקטגוריות"
                    />
                )}
            />
        </>
    )
}

export default ThreeCategories


