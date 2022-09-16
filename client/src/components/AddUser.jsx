import {useState} from 'react';
import { addUser } from '../service/api';
import {useNavigate} from 'react-router-dom'

import {FormGroup,FormControl,InputLabel,Input,Typography,styled,Button} from '@mui/material';
const Container =styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
& > div {
    margin-top:20px;}
`
const defaultvalue={
    username:"",
    email:"",
    actiontype:"",
    actionname:""
}

const AddUser =()=>{
const navigate=useNavigate();
const [user,setUser]=useState(defaultvalue);


    const onValueChange=(e)=>{
        // console.log(e.target.name,e.target.value);
        setUser({...user,[e.target.name]:e.target.value})
    }
    const addUserDetails =async() =>{
       await addUser(user)
       navigate('/all')
    }
    return(
<Container>
<Typography variant="h4">Add User</Typography>
<FormControl>
<InputLabel>Username</InputLabel>
<Input onChange={(e)=>onValueChange(e)} name="username"/>
</FormControl>
 
<FormControl>
<InputLabel>Email</InputLabel>
<Input onChange={(e)=>onValueChange(e)} name="email"/>
</FormControl>

<FormControl>
<InputLabel>Action Type</InputLabel>
<Input onChange={(e)=>onValueChange(e)} name="actiontype"/>
</FormControl>

<FormControl>
<InputLabel>Action Name</InputLabel>
<Input onChange={(e)=>onValueChange(e)} name="actionname"/>
</FormControl>
<FormControl>
<Button variant="contained" onClick={()=> addUserDetails()}> Add User </Button>
</FormControl>
       </Container>
    )
}
export default AddUser;