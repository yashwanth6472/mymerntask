import React, { useState } from 'react'
import { Box, TextField, InputProps, InputAdornment, Button } from '@material-ui/core'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMailBulk, faUser, faKey} from "@fortawesome/free-solid-svg-icons"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
const Register = () => {
    const navigate = useNavigate()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
      const [password, setPassword] = useState()

      const submitHandler = (e) =>{
          e.preventDefault()

          axios.post("http://localhost:5000/user/signUp", {
              name:name.trim(),
              email:email.trim(),
              password:password.trim()
          })
          .then((result)=>{
              alert("Successfully registerd")
              navigate(`/home/${email}`)
          })
          .catch((error)=>{
              alert("email already taken")
          })
      }

  return (
    <Box style={{display:"flex", flexDirection:"column", width:"50%", marginLeft:"auto", marginRight:"auto", marginTop:"10%"}}>
    
    <TextField
    style={{marginTop:"2rem"}}
        
        label="user"
        variant="standard"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <FontAwesomeIcon
                style={{ fontSize: "20px" }}
                icon={faUser}
              ></FontAwesomeIcon>
            </InputAdornment>
          ),
        }}
      />

<TextField
    style={{marginTop:"2rem"}}
        
        label="Email"
        variant="standard"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <FontAwesomeIcon
                style={{ fontSize: "20px" }}
                icon={faMailBulk}
              ></FontAwesomeIcon>
            </InputAdornment>
          ),
        }}
      />

<TextField
          style={{marginTop:"2rem"}}
            type={"password"}
            label="Password"
            variant="standard"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    icon={faKey}
                  ></FontAwesomeIcon>
                </InputAdornment>
              ),
            }}
          />

<Button style={{marginTop:"2rem", width:"30%"}} variant="contained" color="primary" onClick={submitHandler}>SignUp</Button>
<p>For Login <Link to="/user/signIn">Click here</Link></p>
    </Box>
  )
}

export default Register