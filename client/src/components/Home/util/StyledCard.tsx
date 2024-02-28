import { Card } from "@mui/material";
import { FC, ReactNode } from "react";

interface StyledCardProps{
    children: ReactNode;
}

export const StyledCard:FC<StyledCardProps> = ({children})=>{
    return(
    <Card
    style={{
        margin: '0px 6px 16px',
        textDecoration: 'none',
    }}
    >
        {children}
    </Card>
    )
}