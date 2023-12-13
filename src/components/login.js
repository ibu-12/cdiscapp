import {useState} from 'react';
import {Link } from 'react-router-dom'
function DyRender()
{
    const[islogin,setIsLogin]=useState(false)
    const login =()=>{
        setIsLogin(true)
    }
    if(islogin){
        return(
            <div>
                <button><Link to='/Ls'>Login</Link></button>
                <h6>Please Enter Username && Password</h6>
            </div>
        )
    }
    else{
        return(
            <div>
                <button onClick={login}>login</button>
            </div>
        )
    }
}

export default DyRender;