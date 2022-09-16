import {useEffect,useState} from 'react';
import {Table,TableHead,TableBody,TableRow,TableCell,Button} from '@mui/material';
import {getUsers,deleteUser} from '../service/api'
import { Link } from 'react-router-dom';
 

const AllUsers =()=>{
  const [users,setUsers] =useState([]);
  useEffect(()=>{
   getAllUsers();
  },[]);

  const getAllUsers =async()=>{
    let response= await getUsers();
     setUsers(response.data);
  }
  const deleteUserDetails=async(id) =>{
    await deleteUser(id);
    getAllUsers()
  }
    return(
      <Table>
      <TableHead>
      <TableRow>
<TableCell>Id</TableCell>
<TableCell>Username</TableCell>
<TableCell>Email</TableCell>
<TableCell>Action Type</TableCell>
<TableCell>Action Name</TableCell>
<TableCell></TableCell>
      </TableRow>
      </TableHead>
      <TableBody>
     {
      users.map(user =>(
     <TableRow key={user._id}>
     <TableCell>{user._id}</TableCell>
     <TableCell>{user.username}</TableCell>
     <TableCell>{user.email}</TableCell>
     <TableCell>{user.actiontype}</TableCell>
     <TableCell>{user.actionname}</TableCell>
     <TableCell>
     <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
     <Button variant="contained" color="secondary" onClick = {() =>deleteUserDetails(user._id) }>Delete</Button>
     </TableCell>
     </TableRow>
      ))
     }
      </TableBody>
      </Table>
    )
}
export default AllUsers;