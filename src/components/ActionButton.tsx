import { IconButton } from "@mui/material"
import { Edit, Delete } from "@mui/icons-material"
import Tooltip from "../components/Tooltip"

interface ActionButtonProps {
  type: "edit" | "delete"
  onClick: () => void 
  index: number
}

const ActionButton: React.FC<ActionButtonProps> = ({
  type,
  onClick,
  index,
}) => {
  const config: Record<
    ActionButtonProps["type"],
    {
      tooltip: string
      color: "primary" | "error"
      icon: JSX.Element
      bgColor: string
      hoverBgColor: string
    }
  > = {
    edit: {
      tooltip: "Edit",
      color: "primary",
      icon: <Edit />,
      bgColor: "rgba(25, 118, 210, 0.1)",
      hoverBgColor: "rgba(25, 118, 210, 0.2)",
    },
    delete: {
      tooltip: "Delete",
      color: "error",
      icon: <Delete />,
      bgColor: "rgba(211, 47, 47, 0.1)",
      hoverBgColor: "rgba(211, 47, 47, 0.2)",
    },
  }

  const { tooltip, color, icon, bgColor, hoverBgColor } = config[type]

  return (
    <Tooltip title={tooltip}>
      <IconButton
        color={color}
        onClick={onClick}
        aria-label={`${tooltip} item ${index}`}
        sx={{
          backgroundColor: bgColor,
          "&:hover": { backgroundColor: hoverBgColor },
        }}>
        {icon}
      </IconButton>
    </Tooltip>
  )
}

export default ActionButton
