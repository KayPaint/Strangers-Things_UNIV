import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Breadcrumbs } from '@mui/material';

const Header = ({ guest, logOut }) => {

    return (
        <div className='header-fixed'>
            <div className='header-container'>
                <h1 className="header-title">Stranger's Things</h1>
            </div> 
            <Breadcrumbs className="breadcrumb-nav">
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/profile">Profile</Link>
                {guest ? (
                    <Button variant="contained" color="secondary" size="small" onClick={logOut}>Log Out</Button>
                    ) : (
                    <Breadcrumbs>
                        <Link to="/account/login">Log In</Link>
                        <Link to="/account/register">Register User</Link>
                    </Breadcrumbs>
                    )}
            </Breadcrumbs>
        </div>
    )
}

export { Header }