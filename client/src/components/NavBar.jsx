import {AppBar,Toolbar,styled } from '@mui/material'
import {NavLink} from 'react-router-dom';
const Header=styled(AppBar)`
background:#111111`;

const Tabs=styled(NavLink)`
font-size:20px;
margin-right:25px;
text-decoration:none;
color:inherit;
`

const NavBar =()=>{
    return(
        <>
        <Header position="static">
        <Toolbar>
        <Tabs to='/'> Home</Tabs>  
<Tabs to='/all'> Display All Users</Tabs>
<Tabs to='/add'> Add Users</Tabs>
        </Toolbar>
        </Header>
        </>
    )
}
export default NavBar;