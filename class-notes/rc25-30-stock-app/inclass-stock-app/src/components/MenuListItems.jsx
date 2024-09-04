import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';
import { Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const links = [
    {
        title: "Dashboard",
        url: "/stock"
    },
    {
        title: "Firms",
        url: "/stock/firms"
    },
    {
        title: "Brands",
        url: "/stock/brands"
    },
    {
        title: "Products",
        url: "/stock/products"
    },
    {
        title: "Sales",
        url: "/stock/sales"
    },
    {
        title: "Purchases",
        url: "/stock/purchases"
    },
]

// ['Home', 'Brands', 'Products', 'Sales', 'Pruchases']

const MenuListItems = () => {

    const navigate = useNavigate()
    
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {links.map((item, index) => (

          <ListItem key={item.title} disablePadding>
            <ListItemButton onClick={()=>navigate(item.url)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default MenuListItems