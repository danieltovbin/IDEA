import { SvgIcon, Tooltip, TooltipProps, tooltipClasses } from "@mui/material"
import { FC } from "react"
import './scss/labelAndNote.scss'
import { styled } from '@mui/material/styles';
import { LabelNoteProps } from "./LabelNoteProps";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#e3f0d3",
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 13,
    direction: "rtl"
  },
}));


const LabelAndNote: FC<LabelNoteProps> = ({ textLabel, labelHtmlFor, includeSpan = false, textInSpan, iconToolTip, showTooltip=false }) => {
  return (
    <>
      <div className="note">
        {showTooltip && (
          <LightTooltip title={iconToolTip} placement="left-start">
            <SvgIcon sx={{ margin: "40px 0px 0px", color: "#52b110" }}>
              <path d="M12,5.24a1.22,1.22,0,1,0,1.21,1.22A1.22,1.22,0,0,0,12,5.24Z"></path>
              <path d="M12,8.48a.91.91,0,0,0-.91.91v5.46a.91.91,0,1,0,1.82,0V9.39A.91.91,0,0,0,12,8.48Z"></path>
              <path d="M12,19a10.61,10.61,0,0,1-3.94-.75a.42.42,0,0,0-.45.09l-3,2.74,1-3.84a.52.52,0,0,0-.16-.54,8,8,0,0,1-3.07-6.2C2.37,5.81,6.69,2,12,2s9.62,3.81,9.62,8.5S17.31,19,12,19ZM12,1C6.19,1,1.46,5.26,1.46,10.5a9.08,9.08,0,0,0,3.18,6.79L3.31,22.36a.52.52,0,0,0,.19.56.46.46,0,0,0,.25.08A.46.46,0,0,0,4,22.89l4-3.6A11.55,11.55,0,0,0,12,20c5.81,0,10.54-4.26,10.54-9.5S17.81,1,12,1Z"></path>
            </SvgIcon>
          </LightTooltip>
        )}
        {includeSpan ? (
          <label htmlFor={labelHtmlFor} >{textLabel}<span>{textInSpan}</span></label>
        ) :
          <label htmlFor={labelHtmlFor} >{textLabel}</label>
        }
      </div>

    </>
  )
}

export default LabelAndNote