import React, { useState } from 'react'
import { registerUser } from '../api';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

const AccountForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const {data} = await registerUser(username, password)
        } catch (error) {
            console.error("Submit Error:", error)
        }
    }

    return (
        <form className="account-form" onSubmit={onSubmitHandler}>
            <h2 className='account-form-title'>Register New User</h2>
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
                    Register User
                </Button>
            </div>
        </form>
    )
}

export default AccountForm;