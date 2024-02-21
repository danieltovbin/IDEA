interface CustomInputProps {
  inputMode?: "numeric" | string;
  pattern?: string;
}

export interface ValidateTextProps {
  inputId: string;
  placeholder: string;
  customCondition: (inputValue: string) => boolean;
  isRequired?: boolean;
  customConditionLogic?: (inputValue: string) => boolean;
  textError?: string;
  inputProps?: CustomInputProps | undefined;
  name?: string;
  value: string | number |string[];
  addChangeToProject: (e: any) => void;
}
