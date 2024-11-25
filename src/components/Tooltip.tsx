import { styled } from "@mui/material/styles"
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip"

const ButtonTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    {...props}
    arrow
    classes={{ popper: className }}
    enterDelay={100}
    leaveDelay={50}
    placement='top'
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
    fontSize: "0.875rem",
    padding: "8px 12px",
    transition: "transform 0.2s ease, opacity 0.2s ease",
    opacity: 0,
    transform: "scale(0.8)",

    "&:hover, &:focus": {
      opacity: 1,
      transform: "scale(1)",
    },
  },
}))

export default ButtonTooltip
