import { Card } from "@mui/material";
import { FC, ReactNode } from "react";

interface StyledCardProps{
    children: ReactNode;
}

export const StyledCard:FC<StyledCardProps> = ({children})=>{
    return(
    <Card variant="outlined"
    style={{
        margin: 0,
        textDecoration: 'none',
        border:'none'
    }}
    >
        {children}
    </Card>
    )
}