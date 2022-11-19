import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import ListIcon from "@mui/icons-material/List";

export const menus = [
  {
    icon: <DashboardIcon />,
    title: "Dashboard",
    path: "/",
  },
  {
    icon: <ListIcon />,
    title: "List",
    path: "/list",
  },
  {
    icon: <ImageSearchIcon />,
    title: "Classified",
    path: "/classified",
  },
  {
    icon: <DescriptionIcon />,
    title: "Detail",
    path: "/detail",
  },
];
