import img from '../kpd.png';
import {useHistory,Link} from "react-router-dom";
import { useState } from "react";
import Home from './Home';



const LoginForm = () => {
    const [username, setuser] = useState('')
    const [password, setPassword] = useState('');
    const [userdetails, setUserDetails] = useState(null);


    let history = useHistory()
    let handlelogin = ()=>{
                            fetch("http://localhost:9091/user/login", 
                            { headers : { user: username , password : password } })
                            .then((response)=>{console.log(response.data); setUserDetails(response.data)})
                            .catch((error)=>{console.log(error);})
                            .then(()=>{
                                        alert("login successfully");
                                        history.push("/")
                                    })
                    
                        }

                        let handleuser=(e)=>{
                            setuser(e.target.value); 
                            
                         }
                         let handlePass=(e)=>{
                             setPassword(e.target.value);
                             
                         }
                         let handleSubmit=(e)=>{
                            console.log("submite");
                          e.preventDefault();}

    // let history = useHistory()
    // let handlelogin = ()=>{
    //     fetch("http://localhost:9091/user/login",{method:"GET"})
    //     .then(()=>{
    //         alert("login successfully");
    //         history.push("/")
    //     })
    // }

    return (
        <> {userdetails==null &&
        <div className="login">
            <div className='img-login' >
          <img src={img} alt="login" />
          </div>
           <div onSubmit={handleSubmit} className='login-content'>
           <h1>LOGIN</h1>
            <h4>Welcome Back! Please enter your details</h4>
           <input type="text" placeholder="Username/Email" onChange={handleuser} value={username}/>
            <input type="password" placeholder="Password" onChange={handlePass} value={password}/>
            <Link to="/forgot">forgot password?</Link>
            <div onClick={handlelogin} className="login-btn" >Login</div>
            <span>Don't have an Account ? </span>
            <Link to="/signup">Signup for free</Link>
            </div>  
        </div>}
        {userdetails!=null && <Home userdetails={userdetails} setUserDetails={setUserDetails}/>   }
    </>
    )
}

export default LoginForm