import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';
import { Box, Toolbar } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const icon = (name) => `/assets/navbar/${name}.svg`

const links = [
    {
        title: "Dashboard",
        url: "/stock",
        // icon:"/assets/navbar/ic_analytıcs.svg"
        icon: icon("ic_analytics")
    },
    {
        title: "Firms",
        url: "/stock/firms",
        // icon:"/assets/navbar/firms.svg"
        icon: icon("firms")
    },
    {
        title: "Brands",
        url: "/stock/brands",
        // icon:"/assets/navbar/brand.svg"
        icon: icon("brand")
    },
    {
        title: "Products",
        url: "/stock/products",
        // icon:"/assets/navbar/ic_cart.svg"
        icon: icon("ic_cart")
    },
    {
        title: "Sales",
        url: "/stock/sales",
        // icon:"/assets/navbar/sales.svg"
        icon: icon("sales")
    },
    {
        title: "Purchases",
        url: "/stock/purchases",
        // icon:"/assets/navbar/purchase.svg"
        icon: icon("purchase")
    },
]

const btnStyle = {
  color:"secondary.main", 
  borderRadius:"1rem",
  transition: "all 0.6s ease-in-out",
  "&:hover": {
    backgroundColor: "secondary.main",
    color: "white",
  }
}
const selectedStyle = {
  backgroundColor:"secondary.second", 
  color:"white",
  borderRadius:"1rem",
  "&:hover": {
    backgroundColor: "secondary.main",
    color: "white",
  }
}

const MenuListItems = () => {

    const navigate = useNavigate()
    const location = useLocation()
    // const {pathname} = useLocation()
    console.log(location);
    
    
  return (
    <div>
      <Toolbar />
      {/* <Divider /> */}
      <List>
        {links.map((item, index) => (

          <ListItem key={item.title} disablePadding>
            <ListItemButton
              onClick={() => navigate(item.url)}
              sx={item.url === location.pathname ? selectedStyle : btnStyle}
              // sx={{
              //   color:"secondary.main", 
              //   borderRadius:"1rem",
              //   transition: "all 0.6s ease-in-out",
              //   "&:hover": {
              //     backgroundColor: "secondary.main",
              //     color: "white",
              //   }
              // }}
            >
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              {/* <Box
                sx={{
                  backgroundImage:`url(${item.icon})`,
                  backgroundPosition:"center",
                  backgroundSize:"cover",
                  backgroundRepeat:"no-repeat",
                  width: "24px",
                  height: "24px",
                  backgroundColor:"red",
                  mr:2
                }}
              /> */}
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  mr:2,
                  mask: `url(${item.icon}) no-repeat center / contain `,
                  bgcolor:"currentcolor",
                }}
              />
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default MenuListItems