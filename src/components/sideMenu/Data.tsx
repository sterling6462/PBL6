import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";

export const menus = [
  {
    icon: <DashboardIcon />,
    title: "Dashboard",
    path: "/",
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
