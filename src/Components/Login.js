import React, { useState } from 'react'
import imggg from '../Assets/login_image.jpg'


export default function Login() {
    const [val,setval] = useState({
        Firstname: "",
        Lastname: "",
        Email: "",
        Password: ""
    })

    let inputchange = (e) => {
        console.log("hello")
        const name = e.target.name;
        const values = e.target.value
        console.log(values)
        console.log(name)
        console.log(val)
        setval( {   
            ...val, 
                [name]: values
        }
           )


    }
    let submited = () => {
        
        if(val.Firstname==null  && val.Email==null  && val.Lastname==null && val.Password==null ){
            alert("All Fields are requried")
            console.log("alert")
            return false
        }
        
    }

    return (
        <div className="logincontainner">
            <div className="logininfo">
                <form onSubmit={submited}>
                    <input type="text" name='Firstname' placeholder='Firstname' onChange={inputchange } value={val.Firstname} />
                    <input type="text" name='Lastname' placeholder='Lastname' onChange={inputchange} value={val.Lastname} />
                    <input type="email" name="Email" placeholder='E-Mail' onChange={inputchange} value={val.Email} />
                    <input type="password" name="Password" placeholder='Set-Password' onChange={inputchange} value={val.Password} />
                    <input type="submit" className='submitbttn' value="Login" />
                </form>
            </div>

            <div className="loginsideimage">
                <img src={imggg} alt="" />
            </div>
        </div>
    )
}
