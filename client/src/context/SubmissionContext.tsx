import React, { Dispatch, FC, createContext, useContext, useState } from 'react';

interface SubmissionContextProps {
    showNewSubmission: boolean;
    setShowNewSubmission: Dispatch<React.SetStateAction<boolean>>;
}

interface SubmissionProviderProps {
    children: React.ReactNode;
}


const SubmissionContext = createContext<SubmissionContextProps | undefined>(undefined);

export const SubmissionProvider:FC<SubmissionProviderProps> = ({children}) =>{
    const [showNewSubmission, setShowNewSubmission] = useState(true);

    return(
        <SubmissionContext.Provider value={{showNewSubmission,setShowNewSubmission}}>
            {children}
        </SubmissionContext.Provider>
    );
};

export const useSubmissionContext = ()=>{
    const context = useContext(SubmissionContext);
    if(!context){
        throw new Error('useSubmissionContext must be used within a SubmissionProvider')
    }
    return context;
};