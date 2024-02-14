import Autocomplete from "@mui/material/Autocomplete";
import "../scss/format.scss";
import AnnouncementOutlinedIcon from "@mui/icons-material/AnnouncementOutlined";
import { TextField } from "@mui/material";
import { options } from "./OptionsCategories";
import { useState } from "react";
import { startProject } from "../../../API/Projects/projectClientCtrl";
import { useNavigate } from "react-router-dom";

const Inputs = () => {
  const navigate = useNavigate();
  const [formContent, setFormContent] = useState({});

  //   const handleInputChange = (e) => {};ru
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const plainFormData = Object.fromEntries(formData.entries());
    const { ok } = await startProject(plainFormData);
    if (ok) navigate("/descriptionProject");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="nameProject">שם הפרויקט</label>
          <input
            id="nameProject"
            name="projectName"
            type="text"
            placeholder="שם יצירתי שייצג את הפרויקט - עד 22 תווים"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="note">
            <AnnouncementOutlinedIcon
              sx={{ margin: "40px 0px 0px", color: "#52b110" }}
            />
            <label htmlFor="category">מה הקטגוריה הראשית של הפרויקט שלך?</label>
          </div>
          <Autocomplete
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
        <button className="btnNextLevel">שמירה והמשך לשלב הבא</button>
      </form>
    </>
  );
};

export default Inputs;
