import { Box, StandardTextFieldProps, TextField } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import { ValidateTextProps } from "./validationModels";

const ValidationTextFields: FC<ValidateTextProps> = ({
  inputId,
  placeholder,
  customCondition,
  isRequired = true,
  name,
  customConditionLogic,
  textError,
  inputProps,
  value,
  addChangeToProject,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    try {
      if (isRequired && inputValue.trim().length === 0) {
        setErrorMessage("שדה זה מוגדר כשדה חובה");
      } else if (customCondition(inputValue)) {
        setInputValue(inputValue);
        setErrorMessage("");

        addChangeToProject(e);
      } else if (customConditionLogic && customConditionLogic(inputValue)) {
        setErrorMessage(textError || "");
      } else {
        setInputValue(inputValue);
        setErrorMessage("");
      }
    } catch (error) {
      console.error("Something wrong with handleChange function", error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        sx={{
          "& .MuiTextField-root": { "& fieldset": { borderColor: "#756e6e" } },
          "& input::placeholder": { fontSize: "14px" },
        }}
        noValidate
        autoComplete="off"
      >
        {customCondition(inputValue) ? (
          <TextField
            variant="outlined"
            color="success"
            focused
            name={name}
            value={value}
            sx={{
              width: "100%",
              "& .MuiFormHelperText-root": {
                textAlign: "right",
                margin: 0,
                fontSize: "11px",
              },
            }}
            error={errorMessage !== ""}
            id={inputId}
            onChange={handleChange}
            helperText={errorMessage}
            placeholder={placeholder}
            inputProps={inputProps as StandardTextFieldProps["inputProps"]}
          />
        ) : (
          <TextField
            name={name}
            value={value}
            sx={{
              width: "100%",
              "& .MuiFormHelperText-root": {
                textAlign: "right",
                margin: 0,
                fontSize: "11px",
              },
            }}
            error={errorMessage !== ""}
            id={inputId}
            onChange={handleChange}
            helperText={errorMessage}
            placeholder={placeholder}
          />
        )}
      </Box>
    </>
  );
};

//    return (
//         <>
//             <Box
//                 component="form"
//                 sx={{
//                     '& .MuiTextField-root': { '& fieldset': { borderColor: '#756e6e' } },
//                     '& input::placeholder': { fontSize: "14px" },
//                 }}
//                 noValidate
//                 autoComplete="off"
//             >
//                 {customCondition(inputValue) ? (
//                     <TextField
//                     variant="outlined"
//                     color="success"
//                     focused
//                     name={name}
//                     value={value}
//                     sx={{ width: "100%", '& .MuiFormHelperText-root': { textAlign: "right", margin: 0, fontSize: "11px" } }}
//                     error={errorMessage !== ""}
//                     id={inputId}
//                     onChange={handleChange}
//                     helperText={errorMessage}
//                     placeholder={placeholder}
//                     inputProps={inputProps as StandardTextFieldProps["inputProps"]}
//                     />
//                     ) : (
//                         <TextField
//                         name={name}
//                         value={value}
//                     sx={{ width: "100%", '& .MuiFormHelperText-root': { textAlign: "right", margin: 0, fontSize: "11px" } }}
//                     error={errorMessage !== ""}
//                     id={inputId}
//                     onChange={handleChange }
//                     helperText={errorMessage}
//                     placeholder={placeholder}
//                 />)
//                 }
//             </Box>
//         </>
//     )
// }
export default ValidationTextFields;
