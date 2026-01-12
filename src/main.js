import React, { useCallback, useEffect, useState } from "react"
import ReactDom from "react-dom/client";

function PasswordGenerator(){

    const[Password, setPassword] = useState("");
    const[length, setLength] = useState(10);
    const[numChnaged,setNumchanged] = useState(false);
    const[charChanged,setCharchanged]= useState(false);

    const generatePassword = useCallback(()=>{


        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(numChnaged)
            str+="0123456789"
        if(charChanged)
            str+="+-)(*$#@^%&!~`><{}?"

        let pass = ""
        for(let i=0;i<length;i++){
        pass+= str[Math.floor(Math.random()*str.length)]
        }

        setPassword(pass);
    },[length,charChanged,numChnaged]);      
    // generatePassword();

    useEffect(()=>{
        generatePassword();

    },[generatePassword])//useeffect run when number, character , and length changed//

    return(
        <>
        <h1>🔑 Generate Password</h1>
        <h1>{Password}</h1>
        <div className="second">
            <input type="range" min={5} max={50} value={length} onChange={(e)=>setLength(e.target.value)}></input>
            <label>Length({length})</label>

            <input type="checkbox" defaultChecked={numChnaged} onChange={()=>setNumchanged(!numChnaged)}></input>
            <label>Number</label>

            <input type="checkbox" defaultChecked={charChanged} onChange={()=>setCharchanged(!charChanged)}></input>
            <label>Character</label> 
        </div>
        </>
    )
}



ReactDom.createRoot(document.getElementById('root')).render(<PasswordGenerator />)