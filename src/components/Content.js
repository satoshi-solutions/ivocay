import React from 'react';
import { Box, Button, Container, Grid, SvgIcon, Typography} from '@mui/material';
import './Content.css';

const Content = () => {
    return (
        <Container className='home-container' disableGutters>
            <Box className='banner-wrapper'>
                <Box className='banner-text'>
                    <h2>Travel Smart</h2>
                    <h1>Invest Smarter</h1>
                    <p>iVaCay Where Blockchain Turns Vacations into Profits.</p>
                    <Box className='btn-group'>
                        <Button className='btn-buy'>BUY NOW</Button>
                        <a href='/'>
                            <Button className='btn-join'>Join Community</Button>
                        </a>
                    </Box>
                </Box>
                <img className='banner-img' src='/images/banner.png' alt='banner' data-xblocker='passed'></img> 
            </Box>
            <Box className='scroll-down'>
                <div>Scroll Down</div>
                <SvgIcon focusable="false" aria-hidden='true' viewBox='0 0 24 24' data-testid='KeyboardArrowDownIcon'>
                    <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"></path>
                </SvgIcon>
            </Box>
            <Box className='about-wrapper'>
                <div className='animated flipInY' style={{ animationDuration: 1, opacity: 1 }}>
                    <Box id="about" className="about-text">About iVaCay</Box>
                </div>
                <div className='animated fadeIn' style={{ animationDuration: 1, opacity: 1 }}>
                    <Box className="about-content">
                        <img className='about-img' src='/images/about.png' alt='about' data-xblocker="passed" style={{ visibility: 'visible'}}></img>
                        <Box className="description">
                            <img className='decoration-img' src='/images/decoration.png' alt='decoration' />
                            <h2>is <span className='highlight'>NOT</span> just a travel app</h2>
                            <p>iVaCay isn't just a travel app; 
                                it's a groundbreaking investment opportunity. 
                                Our mission is to revolutionize vacations by offering investors 
                                seamless access to unparalleled experiences and lodging options through blockchain technology. 
                                What sets us apart is our bold integration of cryptocurrency payments, NFTs, and a tokenized ecosystem that rewards engagement. 
                                Join iVaCay and be part of the journey where every vacation is not just an adventure but a profitable endeavor.</p>
                        </Box>
                    </Box>
                </div>
                <div className='video' style={{ width: 640, height: 360 }}>
                    <div style={{ width: "100%", height: "100%" }}>
                        <div></div>
                    </div>
                </div>
            </Box>
            <div className='animated fadeIn' style={{ animationDuration: "1s", opacity: 1}}>
                <Box className='travel-content'>
                    <Box className='description'>
                        <div id='feature' className='animated flipInY' style={{ animationDuration: '1s', opacity: 1}}>
                            <img className='decoration-img' src='/images/decoration.png' alt='decoration'></img>
                            <h2>Future of Travel and Experiences</h2>
                        </div>
                        <p>iVacay is spearheading the future of travel with disruptive blockchain innovation. 
                            By harnessing XRPL for payments and tokenization, we're not only revolutionizing how travelers transact 
                            but also creating a secure and seamless experience. Our incorporation of NFTs elevates travel to new heights 
                            by capturing moments and curating personalized experiences like never before. iVacay isn't just a travel platform; 
                            it's a visionary investment opportunity poised to redefine the entire travel industry landscape.</p>
                    </Box>
                    <img className='travel-img' src='/images/travel.png' alt='travel' data-xblocker='passed' style={{ visibility: "visible"}}></img>
                </Box>
            </div>
            <div className='animated fadeIn' style={{ animationDuration: "1s", opacity: 1}}>
                <Box className='earning-content'>
                    <Box className='description'>
                        <div className='animated bounceInLeft' style={{ animationDuration: '1s', opacity: 1}}>
                            <img className='decoration-img' src='/images/decoration.png' alt='decoration'></img>
                            <h2>Earning Passive Income</h2>
                        </div>
                        <p>iVaCay offers investors a golden opportunity to earn passive income in the flourishing travel market. 
                            With properties and hotels available for investment using tokens, users can unlock lucrative real estate 
                            returns while indulging in luxurious vacations. Our innovative fee structure incentives engagement, 
                            and strategic acquisitions of timeshare properties amplify earning potential. iVaCay isn't just a vacation; 
                            it's an unparalleled investment journey where every moment counts towards financial prosperity. 
                            Join us and seize the future of travel investments with iVaCay.</p>
                    </Box>
                    <img className='earning-img' src='/images/earning.png' alt='travel' data-xblocker="passed" style={{ visibility: 'visible'}}></img>
                </Box>
            </div>
            <div className='animated fadeIn' style={{ animationDuration: "1s", opacity: 1}}>
                <Box className='presale-content'>
                    <Box className='description'>
                        <div id='presale' className='animated flipInY' style={{ animationDuration: "1s", opacity: 1}}>
                            <img className='decoration-img' src='/images/decoration.png' alt='decoration'></img>
                            <h2>Presale is live!</h2>
                        </div>
                        <p>Discover a new realm of financial freedom with iVaCay: Where NFTs, VacayCoin, 
                            and timeshares unite to redefine transactions, offering seamless experiences and unparalleled value creation</p>
                    </Box>
                    <Box className='roadmap'>
                        <img className='chart-img' src='/images/chart.png' alt='chart' data-xblocker="passed" style={{ visibility: 'visible'}}></img>
                        <Box>
                            <Grid container spacing={{ xs: 2}} style={{ boxSizing: 'border-box', display: 'flex', flexFlow: 'wrap', marginTop: '-16px', width: 'calc(100% + 16px)', marginLeft: '-16px'}}>
                                <Grid className='label text-bold' size={{ xs: 5, md: 4 }} >Total Supply:</Grid>
                                <Grid className='fs-18' size={{ xs: 7, md: 8 }}>100M VacayCoins (VAC).</Grid>
                            </Grid>
                            <Box className='caps-group'>
                                <Box className='soft-cap' textCenter>
                                    <Typography className='cap-label'>Soft Cap</Typography>
                                    <Typography className='cap-amount'><span className='unit'>$</span>5M</Typography>
                                </Box>
                                <Box className='hard-cap' textCenter>
                                    <Typography className='cap-label'>Hard Cap</Typography>
                                    <Typography className='cap-amount'><span className='unit'>$</span>15M</Typography>   
                                </Box>
                            </Box>
                            <Box className='progress-bar'>
                                <div className='soft'></div>
                                <Box className='progress'></Box>
                            </Box>
                            <Grid container spacing={{ xs: 1}} style={{ boxSizing: 'border-box', display: 'flex', flexFlow: 'wrap', width: 'calc(100% + 8px)'}}>
                                <Grid className='fs-16' size={{ xs: 8, md: 6 }}>ICO Sale</Grid>
                                <Grid className='fs-16' size={{ xs: 4, md: 6 }}>25%</Grid>
                                <Grid className='fs-16' size={{ xs: 8, md: 6 }}>Public Sale</Grid>
                                <Grid className='fs-16' size={{ xs: 4, md: 6 }}>15.6%</Grid>
                                <Grid className='fs-16' size={{ xs: 8, md: 6 }}>Private Sale</Grid>
                                <Grid className='fs-16' size={{ xs: 4, md: 6 }}>6.3%</Grid>
                                <Grid className='fs-16' size={{ xs: 8, md: 6 }}>Pre-Sale</Grid>
                                <Grid className='fs-16' size={{ xs: 4, md: 6 }}>3.1%</Grid>
                                <Grid className='fs-16' size={{ xs: 8, md: 6 }}>Team and Advisors</Grid>
                                <Grid className='fs-16' size={{ xs: 4, md: 6 }}>12.5%</Grid>
                                <Grid className='fs-16' size={{ xs: 8, md: 6 }}>Reserve Fund</Grid>
                                <Grid className='fs-16' size={{ xs: 4, md: 6 }}>12.5%</Grid>
                                <Grid className='fs-16' size={{ xs: 8, md: 6 }}>Partnerships and Marketing</Grid>
                                <Grid className='fs-16' size={{ xs: 4, md: 6 }}>9.4%</Grid>
                                <Grid className='fs-16' size={{ xs: 8, md: 6 }}>Community Development</Grid>
                                <Grid className='fs-16' size={{ xs: 4, md: 6 }}>3.1%</Grid>
                                <Grid className='fs-16' size={{ xs: 8, md: 6 }}>Ecosystem Incentives</Grid>
                                <Grid className='fs-16' size={{ xs: 4, md: 6 }}>12.5%</Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </div>
            <Box className='sale-content'>
                <div className='animated tada' style={{ animationDuration: "1s", opacity:1}}>
                    <Typography className='comment'>Presale started</Typography>
                </div>
                <Box className='purchase-wrapper'>
                    <Box className='input-group'>
                        <div>
                            <Typography className='fs-18'>Amount</Typography>
                            <input type='text' placeholder='0.00' ></input>
                        </div>
                        <Button className='btn-max'>MAX</Button>
                        <Box className='flex items-center menu-item'>
                            <img src='/images/bnb.png' alt='bnb'></img>
                            <Typography className='coin-name'>BNB</Typography>
                        </Box>
                    </Box>
                </Box>
                <Button className='btn-buy'>CONNECT</Button>
            </Box>
        </Container>
    );
}

export default Content;