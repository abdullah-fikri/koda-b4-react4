function Input({type,...rest}){
    return(
        <input 
        {...rest}
        type={type}
        className="border outline-none h-[50px] w-[300px] rounded-[10px]"/>
    )
}
export default Input