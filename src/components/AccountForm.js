import React, { useState } from 'react'
import { useParams , useHistory } from 'react-router-dom';
import { loginUser, registerUser } from '../api';
import { Header } from "./Header.js"
import { Footer } from "./Footer.js"
import { Button, TextField } from "@mui/material/";

const AccountForm = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()
    const { action } = useParams();

    const title = action === 'login' ? "Log In" : "Register User"

    const accountAction = action === 'login' ? loginUser : registerUser

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const {data} = await accountAction(username, password)
            setToken(data.token)
            history.push("/") 
        } catch (error) {
            console.error("Submit Error:", error)
        }
    }

    return (<>
        <Header />
        <form className="form" onSubmit={onSubmitHandler}>
            <h2 className='account-form-title'>{title}</h2>
            <div className='account-form-field'>
                <TextField
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    type="text" 
                    value={username}  
                    required
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <br />
            <div className='account-form-field'>
                <TextField 
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    type="password" 
                    value={password} 
                    required 
                    minLength={8}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div className='account-form-button-container'>
                <Button variant="outlined" className='account-form-button' type='submit'>
                    {title}
                </Button>
            </div>
        </form>
        <Footer />
    </>)
}

export default AccountForm;