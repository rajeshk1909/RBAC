import { Link } from "react-router-dom"
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  ListItemIcon,
} from "@mui/material"
import { Dashboard, Person, Security, Lock } from "@mui/icons-material"

interface SidebarProps {
  open: boolean
  toggleDrawer: () => void
}

const sidebarItems = [
  {
    to: "/",
    icon: <Dashboard />,
    text: "Dashboard",
  },
  {
    to: "/users",
    icon: <Person />,
    text: "Manage Users",
  },
  {
    to: "/roles",
    icon: <Security />,
    text: "Manage Roles",
  },
  {
    to: "/login",
    icon: <Lock />,
    text: "Login",
  },
]

type sidebarItemsTypes = (typeof sidebarItems)[0]

const Sidebar = ({ open, toggleDrawer }: SidebarProps) => {
  return (
    <div>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            borderRight: 0,
            backgroundColor: "#2C3E50", 
            color: "#ECF0F1",
            paddingTop: "20px",
          },
        }}
        variant='temporary'
        anchor='left'
        open={open}
        onClose={toggleDrawer}
        PaperProps={{
          style: {
            transition: "all 0.3s ease-in-out",
          },
        }}>
        <div
          style={{
            padding: "16px",
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "#ECF0F1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
          }}>
          RBAC
        </div>
        <Divider sx={{ backgroundColor: "#7F8C8D" }} />
        <List>
          {sidebarItems.map((item: sidebarItemsTypes, index: number) => {
            return (
              <ListItemButton
                key={index}
                component={Link}
                to={item.to}
                onClick={toggleDrawer}
                sx={{
                  "&:hover": {
                    backgroundColor: "#1E3A8A", // Deep blue for background
                    color: "#60A5FA", // Light blue for text/icon
                  },
                }}>
                <ListItemIcon sx={{ color: "#ECF0F1" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            )
          })}
        </List>
      </Drawer>
    </div>
  )
}

export default Sidebar
