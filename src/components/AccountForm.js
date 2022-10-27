import React, { useState } from 'react'
import { loginUser, registerUser } from '../api';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import { useParams , useHistory } from 'react-router-dom';

const AccountForm = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { action } = useParams();
    const history = useHistory()

    const title = action === 'login' ? "Log In": "Register User"

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const call = action === 'register' ? registerUser : loginUser;
        try {
            const {data} = await call(username, password)
            setToken(data.token)
            history.push("/")
        } catch (error) {
            console.error("Submit Error:", error)
        }
    }

    return (
        <form className="account-form" onSubmit={onSubmitHandler}>
            <h2 className='account-form-title'>{title}</h2>
            <div className='account-form-field'>
                <label className='account-form-label'>Username</label>
                <br />
                <TextField
                    variant="filled"
                    type="text" 
                    value={username} 
                    placeholder="Username" 
                    required
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <br />
            <div className='account-form-field'>
                <label className='account-form-label'>Password</label>
                <br />
                <TextField 
                    variant="filled"
                    type="password" 
                    value={password} 
                    placeholder="Password" 
                    required 
                    minLength={8}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div className='account-form-button-container'>
                <Button variant="contained" className='account-form-button' type='submit'>
                    {title}
                </Button>
            </div>
        </form>
    )
}

export default AccountForm;