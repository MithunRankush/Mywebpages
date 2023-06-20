const Forminput = (prop) => {
    let {name,title,type,value,handleChange,error}=prop
    return ( <>
    
    <label >{title}</label>
    <input type={type} placeholder={title} name={name} value={value} onChange={handleChange} />
    <span> {error}</span>
    </> );
}
 
export default Forminput;