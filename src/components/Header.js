import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import './Header.css';

const Header = () => {
    return (
        <Box className='fixed-header scrolled-header'>
            <Container className='navbar-container' disableGutters>
                <img className='icon' src='logo.png' />
                <Box className='nav-link-box'>
                    <Box className='nav-link-box list-items'>
                        <a href='#about'><Typography className='nav-link'>About</Typography></a>
                        <a href='#feature'><Typography className='nav-link'>Feature</Typography></a>
                        <a href='#presale'><Typography className='nav-link'>Presale</Typography></a>
                        <Button className='btn-connect'>Connect</Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Header;