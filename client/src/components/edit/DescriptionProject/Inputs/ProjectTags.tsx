import { Autocomplete, TextField, styled } from "@mui/material";
import LabelAndNote from "../../../labelNoteProps/LabelAndNote";
import { Tag, tags } from "./util/tagsOptions";
import "./scss/ShortDescription.scss";
import { InputProps } from "./InputProps";
import { FC, useEffect, useState } from "react";

const StyledAutocomplete = styled(Autocomplete)({
  "& .MuiAutocomplete-inputRoot": {
    padding: 6,
  },
  "& .MuiAutocomplete-input": {
    height: "12px",
  },
  "& .MuiChip-root": {
    height: "20px",
  },
});

const ProjectTags: FC<InputProps> = ({ addChangeToProject, value }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const addTag = (tag: string) => {
    const tagsArray = [...selectedTags, tag];
    setSelectedTags(tagsArray);
    console.log(selectedTags);
  };
  
  useEffect(()=>{
    addChangeToProject(selectedTags);
  }, [selectedTags])

  return (
    <div>
      <LabelAndNote
        includeSpan={true}
        textInSpan={"(לא חובה)"}
        textLabel={"תגיות הפרויקט"}
        labelHtmlFor={"projectTags"}
        iconToolTip={
          "תגיות הן הדרך שלך לתת ביטוי לכותרות שהכי מתאימות לפרויקט מבחינתך, ולא מצאו מענה ברשימת הקטגוריות. יש לך יד חופשית להמציא תגיות חדשות או לבחור תגיות מתוך הרשימה שתפתח"
        }
        showTooltip={true}
      />
      <StyledAutocomplete
        className="projectTags"
        id="projectTags"
        sx={{
          padding: 0,
          "& .MuiTextField-root": { "& fieldset": { borderColor: "#756e6e" } },
          "& input::placeholder": { fontSize: "14px" },
        }}
        freeSolo
        options={tags}
        onChange={(e) => {
          //@ts-ignore
          addTag(e.target.innerHTML);
        }}
        multiple
        getOptionLabel={(option) => (option as Tag).title}
        renderInput={(params) => (
          <TextField
            name="tags"
            value={value}
            onChange={addChangeToProject}
            {...params}
            placeholder="ניתן לבחור תגיות מהרשימה, או להמציא חדשות. בין תגית לתגית יש ללחוץ ENTER"
            variant="outlined"
          />
        )}
      />
    </div>
  );
};

export default ProjectTags;
