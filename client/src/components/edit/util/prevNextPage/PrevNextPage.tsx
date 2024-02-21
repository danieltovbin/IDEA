import { Container, Divider, SvgIcon, Typography } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface PrevNextPageProps {
    prevPageName: string;
    nextPageName: string;
    showContinuation?: boolean;
    showContinuationIcon?: boolean;
}


const PrevNextPage: FC<PrevNextPageProps> = ({ prevPageName, nextPageName, showContinuation, showContinuationIcon }) => {
    const navigate = useNavigate();

    return (
        <div><Container sx={{ padding: "0 calc((100% - 818px) / 2) !important", margin: 0 }}>
            <div style={{ display: "flex", maxWidth: "580px" }}>
                <SvgIcon focusable={false} viewBox="0 0 24 24" aria-hidden="true" style={{ width: '24px', height: '24px', fill: 'rgb(66, 66, 66)' }}>
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41"></path>
                </SvgIcon>
                <Typography onClick={() => navigate(`/${prevPageName}`)} style={{
                    color: "#424242", cursor: "pointer", fontSize: " 15px", lineHeight: 1.62, fontFamily: "Open Sans Hebrew, sans-serif !important",
                    fontWeight: 400
                }}>חזרה</Typography>
                <Divider style={{ marginRight: "16px", marginLeft: "16px", width: "1px", backgroundColor: " rgba(0, 0, 0, 0.12)" }} />
                <Typography onClick={() => navigate(`/${nextPageName}`)} style={{ whiteSpace: "nowrap", color: "#388602", cursor: "pointer", fontSize: "15px", fontWeight: "bold" }}>שמירה {showContinuation && <span>והמשך</span>}</Typography>
                {showContinuationIcon && (
                    <SvgIcon focusable={false} aria-hidden="true" style={{ width: '24px', height: '24px', fill: 'rgb(56, 134, 2)' }}>
                        <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41"></path>
                    </SvgIcon>
                )}
            </div>
        </Container></div>
    )
}

export default PrevNextPage