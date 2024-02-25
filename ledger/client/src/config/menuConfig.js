import DashboardIcon from "@mui/icons-material/Dashboard";
import BookIcon from "@mui/icons-material/Book";
import BarChartIcon from "@mui/icons-material/BarChart";
import ListAltIcon from "@mui/icons-material/ListAlt";



const menu = [
  {
    id: 1,
    label: "Dashboard",
    icon: <DashboardIcon />,
    path: "/",
    show: { topNavBar: false, sideBar: true, footer: true },
  },
  {
    id: 2,
    label: "Accounts",
    icon: <BookIcon />,
    path: "/accounts",
    show: { topNavBar: false, sideBar: true, footer: true },
  },
  {
    id: 3,
    label: "Entries",
    icon: <ListAltIcon />,
    path: "/entries",
    show: { topNavBar: false, sideBar: true, footer: true },
  },
  {
    id: 4,
    label: "Reports",
    icon: <BarChartIcon />,
    path: "/reports",
    show: { topNavBar: false, sideBar: true, footer: true },
  },
  {
    id: 5,
    label: "Home",
    icon: <i className="fa-solid fa-house"></i>, // Font Awesome icon for Home
    path: "/",
    show: { topNavBar: true, sideBar: false, footer: false },
  },
  {
    id: 6,
    label: "Info",
    icon: <i className="fas fa-info-circle"></i>, // Font Awesome icon for Info
    path: "/info",
    show: { topNavBar: true, sideBar: false, footer: false },
  },
  {
    id: 7,
    label: "Help",
    icon: <i className="fas fa-question-circle"></i>, // Font Awesome icon for Help
    path: "/help",
    show: { topNavBar: true, sideBar: false, footer: false },
  },
];


export default menu;