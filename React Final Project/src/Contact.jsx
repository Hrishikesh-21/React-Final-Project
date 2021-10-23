import react,{useState} from "react";

import "./Contact.css"

const Reactcontact = () =>{
const[user,setuser] = useState({

    email:"",
    password:"",
    contact:"",

});

let name,value;
const getUserData=(event)=>{
    name  = event.target.name;
    value = event.target.value;
    setuser({ ...user,[name]:value  });
};

const postData  = async(e) => {
    e.preventDefault();

    const{ email,password,contact}= user;
}
   
    return(

        <>

    <div class="container">
    <form method="POST">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email"value={user.email}
     onChange={getUserData}  id="email" required/>


    <label for="psw"><b>Password</b></label>
    <input type="passwor" placeholder="Enter Password" value={user.password}
     onChange={getUserData} name="password" id="psw" required/>


    <label for="psw-repeat"><b>Contact</b></label>
    <input type="passwor" placeholder="Mobile-Number" value={user.contact}
     onChange={getUserData}  name="contact"  required/>


    <button type="submit" class="registerbtn" onClick={postData}>Register</button>
    </form>
  </div>



        </>
    )
};
export default  Reactcontact;