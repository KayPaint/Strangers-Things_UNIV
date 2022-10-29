import { Button, Breadcrumbs } from '@mui/material';
import { Link } from 'react-router-dom'

const Header = ({ guest, logOut }) => {
    return (
        <div className='header-fixed'>
            <div className='header-container'>
                <h1 className="header-title">Stranger's Things</h1>
            </div> 
            <Breadcrumbs className="breadcrumb-nav">
                <Link to="/" underline="hover" color="inherit">Home</Link>
                <Link to="/posts" underline="hover" color="inherit">Posts</Link>
                {guest ? (
                    <Button variant="contained" color="secondary" size="small" onClick={logOut}>Log Out</Button>
                    ) : (
                    <Breadcrumbs>
                        <Link to="/account/login">Log In</Link>
                        <Link to="/account/register">Register User</Link>
                    </Breadcrumbs>
                    
                    // For some reason, ^^^^ randomly when no token, and logged out, the log out button is visible
                    )}
            </Breadcrumbs>
        </div>
    )
}

export { Header }