import { Autocomplete, TextField, styled } from '@mui/material'
import LabelAndNote from '../../../labelNoteProps/LabelAndNote'
import { Tag, tags } from './util/tagsOptions'
import './scss/ShortDescription.scss'

const StyledAutocomplete = styled(Autocomplete)({
    '& .MuiAutocomplete-inputRoot': {
      padding: 6,
    },
    '& .MuiAutocomplete-input': {
      height: '12px', 
    },
    '& .MuiChip-root': {
      height: '20px', 
    },
  });
  
const ProjectTags = () => {
    return (
        <div>
            <LabelAndNote includeSpan={true} textInSpan={"(לא חובה)"} textLabel={'תגיות הפרויקט'} labelHtmlFor={'projectTags'} iconToolTip={'תגיות הן הדרך שלך לתת ביטוי לכותרות שהכי מתאימות לפרויקט מבחינתך, ולא מצאו מענה ברשימת הקטגוריות. יש לך יד חופשית להמציא תגיות חדשות או לבחור תגיות מתוך הרשימה שתפתח'} showTooltip={true} />
                    <StyledAutocomplete
                    className='projectTags'
                        id='projectTags'
                        sx={{ padding: 0, 
                            '& .MuiTextField-root': { '& fieldset': { borderColor: '#756e6e' } },
                            '& input::placeholder': { fontSize: "14px" },
                          
                        }}
                        freeSolo
                        options={tags}
                        multiple
                        getOptionLabel={(option) => (option as Tag).title}
                        renderInput={(params) => <TextField
                      
                            {...params}
                            placeholder='ניתן לבחור תגיות מהרשימה, או להמציא חדשות. בין תגית לתגית יש ללחוץ ENTER'
                            variant="outlined"
                        />}
                    />
                </div>
    )
}

export default ProjectTags
