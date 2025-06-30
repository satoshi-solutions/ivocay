import React from 'react';
import { Box, Button, Container, SvgIcon, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <Container className='footer-container'>
                <div className='link-group'>
                    <Box className='footer-logo'>
                        <img src='logo.png'></img>
                        <Typography>Travel Smart, Invest Smarter</Typography>
                        <Typography>copyright iVaCay 2025</Typography>
                    </Box>
                    <Box className='flex flex-col'>
                        <Typography className='link-title'>iVaCay</Typography>
                        <a className='fs-14' href='/'>About</a>
                        <a className='fs-14' href='/'>Future of Travel</a>
                        <a className='fs-14' href='/'>Presale</a>
                    </Box>
                    <Box className='flex flex-col'>
                        <Typography className='link-title' >Legal</Typography>
                        <a className='fs-14' href='/' target='_blank'>Litepaper</a>
                        <a className='fs-14' href='/' target='_blank'>User Agreement</a>
                        <a className='fs-14' href='/' target='_blank'>Service Provider Terms</a>
                        <a className='fs-14' href='/' target='_blank'>Privacy Policy</a>
                        <a className='fs-14' href='/' target='_blank'>Community Guideline</a>
                    </Box>
                </div>
                <div className='button-group'>
                    <a href='/' target='_blank'>
                        <Button className='btn-icon'>
                            <TwitterIcon focusable='false' aria-hidden='true' viewBox='0 0 24 24' data-testid='TwitterICon'></TwitterIcon>
                        </Button>
                    </a>
                    <a href='/' target='_blank'>
                        <Button className='btn-icon'>
                            <InstagramIcon focusable='false' aria-hidden='true' viewBox='0 0 24 24' data-testid='InstagramIcon'></InstagramIcon>
                        </Button>
                    </a>
                    <a href='/' target='_blank'>
                        <Button className='btn-icon'>
                            <FacebookIcon focusable='false' aria-hidden='true' viewBox='0 0 24 24' data-testid='FacebookIcon'></FacebookIcon>
                        </Button>
                    </a>
                    <a href='/' target='_blank'>
                        <Button className='btn-icon'>
                            <TelegramIcon focusable='false' aria-hidden='true' viewBox='0 0 24 24' data-testid='TelegramIcon'></TelegramIcon>
                        </Button>
                    </a>
                    
                </div>
            </Container>
        </div>
    );
}

export default Footer;