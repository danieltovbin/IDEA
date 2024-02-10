 interface CustomInputProps {
    inputMode?: "numeric" | string;
    pattern?: string;
}

export interface ValidateTextProps {
    inputId: string;
    placeholder: string;
    customCondition: (inputValue:string) => boolean;
    children?: React.ReactNode;
    customConditionLogic?: (inputValue:string) => boolean;
    onChange?: () => void;
    textError?: string;
    inputProps?: CustomInputProps | undefined;
}