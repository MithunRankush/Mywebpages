import { useState } from "react";
import Forminput from "./Forminput";

const Signup1 = () => {
   
    let [values, setValues]= useState({
        username:"",
        email:"",
        birthdate:"",
        password:"",
        confirmPassword:""
    })
    const inputs =
    [
        {id:1,name:"username",title:"Username",type:"text",value:values.username,required:true,error:"username should not contain any special character and should within 5 to 16 character"},
        {id:2,name:"email",title:"Email",type:"text",value:values.email,required:true,error:"email is invalid"},
        {id:3,name:"birthdate",title:"Birthdate",type:"date",value:values.birthdate,required:true,error:"birthdate is invalid"},
        {id:4,name:"password",title:"Password",type:"password",value:values.password,required:true,error:"password should contain one character , number and special char and sholud contain 8 to 16 character"},
        {id:5,name:"ConfirmPassword",title:"ConfirmPassword",type:"text",value:values.confirmPassword,required:true,error:"confirmstion is mismatched"},
    ]

    let handleChange=(e)=>{
        setValues({...values ,[e.target.name]:e.target.value});
    }

    let handleSubmit = (e)=>{
        e.preventDefault();
        console.log(values);
    }
    return ( 
        <div className="signup-cont">
            <h1>signup</h1>
            <form onSubmit={handleSubmit} >
                {
                    inputs.map((input)=>{return(
                        <Forminput{...input}key={input.id} handleChange={handleChange}/>
                    )})
                }
                <input type="submit" value="signup"className="submit"/>
            </form>
        </div>
     );
}
 
export default Signup1;