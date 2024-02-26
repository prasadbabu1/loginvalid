import React, { useState } from 'react'

const Login = () => {
    const [data,setData] = useState("")
    const [pass,setPass] = useState("")
    const [inpdirty,setInpdirty] = useState(false)
    const [passdirty,setPassdirty] = useState(false)
    const handleSubmit=()=>{

        setInpdirty(true)
        setPassdirty(true)
    }
    return (<div className="container">
        <div className=" childcontainer ">

            <h1> login</h1>
                <p>Email:</p>
                <input type="text" class="userEmail" name="username" placeholder="Enter User Email.." value={pass} onChange={(e)=>setPass(e.target.value)}/>
                {inpdirty && !pass.length && <span>Email is required</span>}
                {!pass.includes("@")&& <span>Email is invalid</span>}
                    <p>Password:</p>
                    <input type="text" class="userPass" name="Password" placeholder="Enter Password..." value={data} onChange={(e)=>setData(e.target.value)}/>
                    {passdirty &&  !data.length && <span>Password is required</span>}
                {data.length<10 ? <span>Password length must be 10 letters</span>:null}
                        <input type="submit" value="login" class="login" onClick={handleSubmit}/>
                            <div class="cell">
                                <a href="">Forgot Password</a>
                                <a href="">NewUser</a>
                            </div>
                    </div>
                </div>

                )
}

                export default Login