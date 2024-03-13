import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { startProject } from "../../../API/Projects/projectClientCtrl";
import LabelAndNote from "../../../components/labelNoteProps/LabelAndNote";
import "../scss/format.scss";
import { options } from "./OptionsCategories";

const Inputs = () => {
  const navigate = useNavigate();
  const [nameProject, setNameProject] = useState<string>('');
  const [projectCategory, setProjectCategory] = useState<{ category: string; title: string; img: JSX.Element } | null>(null)
  const [isFormComplete, setIsFormComplete] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const plainFormData = Object.fromEntries(formData.entries());

    const { ok } = await startProject(plainFormData);
    if (ok) navigate("/descriptionProject");
  };

  const handleCategoryChange =(_: React.ChangeEvent<{}>, newValue: { category: string; title: string; img: JSX.Element } | null)=>{
    setProjectCategory(newValue);
    setIsFormComplete(!!nameProject && !!newValue);
  };

  const handleNameProjectChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const newName = event?.target.value;
    setNameProject(newName);
    setIsFormComplete(!!newName && !!projectCategory)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="nameProject">שם הפרויקט</label>
          <input
            id="nameProject"
            value={nameProject}
            onChange={handleNameProjectChange}
            name="projectName"
            type="text"
            placeholder="שם יצירתי שייצג את הפרויקט - עד 22 תווים"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <LabelAndNote
              textLabel={"מה הקטגוריה הראשית של הפרויקט שלך?"}
              labelHtmlFor={"format"}
              includeSpan={false}
              iconToolTip={
                "מה הקטגוריה שמתארת את הפרויקט שלך בצורה המדויקת ביותר ? חשוב שהפרויקט יופיע במקומות הכי רלוונטים באתר."
              }
              showTooltip={true}
            />
            <Autocomplete
              sx={{ padding: 0 }}
              value={projectCategory}
              onChange={handleCategoryChange}
              options={options}
              groupBy={(option) => option.category}
              getOptionLabel={(option) => option.title}
              renderOption={(props, option) => (
                <li {...props}>
                  <span style={{ color: "green" }}>{option.img}</span>
                  {option.title}
                </li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="לפתיחת רשימת הקטגוריות"
                  variant="outlined"
                  fullWidth
                  InputProps={{ ...params.InputProps, autoComplete: "off" }}
                  name="projectCategory"
                />
              )}
            />
          </div>
        </div>
        <button type="submit" className="btnNextLevel" style={{backgroundColor: isFormComplete ? 'rgb(72, 173, 2)' : 'white',color: isFormComplete ? 'white' : 'gray'}} disabled={!isFormComplete}>
          שמירה והמשך לשלב הבא
        </button>
      </form>
    </>
  );
};

export default Inputs;
