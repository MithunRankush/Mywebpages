import React from "react";

function Home({userdetails , setUserDetails}) 
{
    function handlelogout()
    {
        setUserDetails(null);
    }


    return (
    <div>
        <h1>Home page</h1>
        <h1>hello : {userdetails.username}</h1>
        <button onClick={handlelogout}> logout </button>
        <hr />
    </div>
        
    )
}
    
 
export default Home;