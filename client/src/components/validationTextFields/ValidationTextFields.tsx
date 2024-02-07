import { Box, StandardTextFieldProps, TextField } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import { ValidateTextProps } from "./validationModels";

const ValidationTextFields: FC<ValidateTextProps> = ({ labelText, labelHtmlFor, inputId, placeholder, customCondition,customConditionLogic,textError,inputProps }) => {
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        try {
            if (inputValue.trim().length === 0) {
                setErrorMessage('שדה זה מוגדר כשדה חובה')
            } else if (customCondition(inputValue)) {
                setInputValue(inputValue);
                setErrorMessage('');
            } else if(customConditionLogic && customConditionLogic(inputValue)) {
                setErrorMessage(textError || '')
            }else {
                setInputValue(inputValue);  
                setErrorMessage('');
              }
        } catch (error) {
            console.error("Something wrong with handleChange function",error)
        }
    }

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { '& fieldset': { borderColor: '#756e6e' } },
                    '& input::placeholder': { fontSize: "14px" },
                }}
                noValidate
                autoComplete="off"
            >
                <label htmlFor={labelHtmlFor}>{labelText}</label>
                {customCondition(inputValue) ? (
                    <TextField
                    variant="outlined"
                    color="success"
                    focused
                    sx={{ width: "100%", '& .MuiFormHelperText-root': { textAlign: "right", margin: 0, fontSize: "11px" } }}
                    error={errorMessage !== ""}
                    id={inputId}
                    onChange={handleChange}
                    helperText={errorMessage}
                    placeholder={placeholder}
                    inputProps={inputProps as StandardTextFieldProps["inputProps"]}
                />
            ) : (
                <TextField
                    sx={{ width: "100%", '& .MuiFormHelperText-root': { textAlign: "right", margin: 0, fontSize: "11px" } }}
                    error={errorMessage !== ""}
                    id={inputId}
                    onChange={handleChange}
                    helperText={errorMessage}
                    placeholder={placeholder}
                />)
                }
            </Box>
        </>
    )
}

export default ValidationTextFields
