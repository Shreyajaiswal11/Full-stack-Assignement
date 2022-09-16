import {useState,useEffect} from 'react';
import { editUser } from '../service/api';
import {useNavigate,useParams} from 'react-router-dom'
import { getUser } from '../service/api';
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

const EditUser =()=>{
    const [user,setUser]=useState(defaultvalue);
const navigate=useNavigate();
const {id} = useParams();

useEffect(()=>{
loadUserDetails()
},[])

const loadUserDetails =async() =>{
    const response= await getUser(id);
    setUser(response.data);
}

    const onValueChange=(e)=>{
        console.log(e.target.name,e.target.value);
        setUser({...user,[e.target.name]:e.target.value})
    }
    const editUserDetails =async() =>{
       await editUser(user,id)
       navigate('/all')
    }
    return(
<Container>
<Typography variant="h4">Edit User</Typography>
<FormControl>
<InputLabel>Username</InputLabel>

<Input onChange={(e)=>onValueChange(e)} name="username" value={user.username } />
</FormControl>
 
<FormControl>
<InputLabel>Email</InputLabel>
<Input onChange={(e)=>onValueChange(e)} name="email" />
</FormControl>

<FormControl>
<InputLabel>Action Type</InputLabel>
<Input onChange={(e)=>onValueChange(e)} name="actiontype" />
</FormControl>

<FormControl>
<InputLabel>Action Name</InputLabel>
<Input onChange={(e)=>onValueChange(e)} name="actionname" />
</FormControl>
<FormControl>
<Button variant="contained" onClick={()=> editUserDetails()}> Edit User </Button>
</FormControl>
       </Container>
    )
}
export default EditUser;