import {FaEye,FaEyeSlash} from 'react-icons/fa';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import forgot1 from "../forgot1.webp";
import forgot2 from "../forgot2.webp";

function Resetpass() 
{
    let [email,setemail] = useState("");
    let [emailErr,setemailErr]=useState("");
    let [newpass,setnewpass]=useState("");
    let [repass,setrepass]=useState("");
    let [match,setMatch]=useState(false);
   let history= useHistory();


    
    const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

   let handlerepass =(e)=>{
    setrepass(e.target.value)
    if(newpass == e.target.value )
    {
      setMatch(true);
    }
    else
    {
      setMatch(false);
    }

  }

   let handlesubmit=(e)=>{
   e.preventDefault()
          console.log(email , newpass);
           fetch(`http://localhost:9091/user/resetpswd?data=${email}&newpass=${newpass}`)
           .then(()=>{
            alert("sucess");
            history.push("/")
          })
  
   }
   let showpass=(e)=>
{
    e.preventDefault();
    let log1=document.getElementById("rpin1")
    let log3=document.getElementById("rpvis")
    let log4=document.getElementById("rpnovis")
    if(log1.type=="password")
    {
        log1.type="text";
        log3.style.display="block";
        log4.style.display="none";

    }
    else
    {
        log1.type="password";
        log3.style.display="none";
        log4.style.display="block"

    }
   
}
let showpass1=(e)=>
{
    e.preventDefault();
    let log2=document.getElementById("rpin2")
    let log3=document.getElementById("rpvis1")
    let log4=document.getElementById("rpnovis1")
    if(log2.type=="password")
    {
        log2.type="text";
        log3.style.display="block";
        log4.style.display="none";

    }
    else{
        log2.type="password";
        log3.style.display="none";
        log4.style.display="block"

    }
}
let changeSide=(e) =>
{
    e.preventDefault();
    let log1=document.getElementById("rpuser")
    let log2=document.getElementById("rppass")
    let lock1=document.getElementById("forgot1")
    let lock2=document.getElementById("forgot2")
    let inp=document.getElementById("rpin")
   
   if(inp.value!="")
   {
    log1.style.display="none";
    log2.style.display="block";
    lock1.style.display="none";
    lock2.style.display="block";
   }
    
}

    return(
     <div className='rpbody'>

       <div className='rpleft'>
       <img src={forgot1} alt="pic" className='lock1' id='forgot1' />
       <img src={forgot2} alt="pic" className='lock2' id='forgot2'/>
       </div>
       <div className='rpright'>
         <form onSubmit={handlesubmit}>
                <div className='rpuser' id='rpuser'>
                    <h1>Forgot Password</h1>
                <label htmlFor="UserName_email" className="rplb">UserName/email</label>
           <br />
           <input type="text email" className="rpin" id="rpin" required placeholder='UserName/email' onChange={(e)=>setemail(e.target.value)}/> 
           <br />
           <br />
           <button className="rpbtn" onClick={changeSide}>NEXT</button>

                </div>
                <div className='rppass' id='rppass'>
                    <h1>Reset Password</h1>
                <label htmlFor="ResetPassword" className="rplb1">Password</label>
           <input type="password"  className="rpin1" id='rpin1' onChange={(e)=>setnewpass(e.target.value)}/>
          <span className='rpeye' onMouseOver={showpass} onMouseOut={showpass}><FaEye className='rpvis' id='rpvis'></FaEye><FaEyeSlash className='rpnovis' id='rpnovis'></FaEyeSlash></span>
           <br />
           <br />
           <label htmlFor="ConfirmPassword" className="rplb1">ConfirmPassword</label>
           <input type="password" className="rpin1" id='rpin2' onChange={handlerepass}/>
           <span className='rpeye1' onMouseOver={showpass1} onMouseOut={showpass1}><FaEye className='rpvis1' id='rpvis1'></FaEye><FaEyeSlash className='rpnovis1' id='rpnovis1'></FaEyeSlash></span>
           <br />
           { match==true && repass.length>0 && <font color="green"> correct password </font> }
           { match==false && repass.length>0 && <font color="red"> in-correct password </font> }
           <br />
           {emailErr && <div className="error-msg">{emailErr}</div>} 
           <input type="submit" value="RESET" className="rpbtn1"/>
       

                </div>

         </form>

       </div>


     </div>
    )
}
export default Resetpass;