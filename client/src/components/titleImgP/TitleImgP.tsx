import { FC, ReactNode } from "react";

interface TitleImgPProps {
    title: string;
    img: ReactNode;
    paragraph: string;
}

export const TitleImgP: FC<TitleImgPProps> = ({ title, img, paragraph }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: "center", marginTop: " 27px" }}>
            <div style={{ border: "2px solid rgb(115 111 111)", borderRadius: '50px', padding: '11px 14px' }}>
                {img}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
                <h5 style={{
                    color: " #424242",
                    margin: "0",
                    fontSize: "13px",
                    fontWeight: "bold"
                }}>{title}</h5>
                <p style={{
                    color: "#424242",
                    fontSize: "13px",
                    maxWidth: "244px",
                    lineHeight: "17px", margin: "0"
                }}>{paragraph}</p>
            </div>
        </div>
    )
}
