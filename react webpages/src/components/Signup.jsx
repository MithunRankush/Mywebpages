import img from '../signup.webp';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Signup() {
    let [firstname, setfirstname] = useState("");
    let [email, setemail] = useState("");
    let [password, setpassword] = useState("");
    let history = useHistory();
  
    let fname = (fname) => setfirstname(fname.target.value);
    let mail = (mail) => setemail(mail.target.value);
    let psw = (psw) => setpassword(psw.target.value);

    let newuser =  {
        username:firstname,
        password:password,
        email:email
          }
  
    const handlesignup =()=>{
       fetch(" http://localhost:9091/user/signUp",{method:"POST",
       headers:{"Content-Type":"application/json"},
     body:JSON.stringify(newuser)})
              

        .then((res)=>{
        console.log(res);
        alert("signup succefully");
        history.push("/")
  
       })
    }
    let handlesubmit = (e) => {
      e.preventDefault()
      if (firstname.length < 3) {
      }
      alert("submited")
    }

    return (
        <div className="signup">
            <div className='img-signup' >
          <img src={img} alt="signup" />
          </div>
           <div className='signup-content' onSubmit={handlesubmit}>
           <h1>SIGN UP</h1>
            <h4> Hello Welcome !</h4>
           <input type="text" placeholder="Username" onChange={fname}/>
           <input type="email" placeholder="Email" onChange={mail}/>
            <input type="password" placeholder="Password" onChange={psw} />
            <div onClick={handlesignup} className="login-btn" >SIGN UP</div>
            <span>Already have an account? </span>
            <Link to="/">LOGIN</Link>
            </div>  
        </div>
    )
}

export default Signup