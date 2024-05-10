import React from 'react';
import './header.css';
import NetflixLogo from '../../assets/NetflixLogo.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header () {
    return (
        <>
            <navbar>
                <div className="left-navigation">
                    <img src={NetflixLogo} alt="" height={50} />
                    <ul>
                        <li>Home</li>
                        <li>Series</li>
                        <li>Films</li>
                        <li>New & Popular</li>
                        <li>My List</li>
                        <li>Browse by Languages</li>
                    </ul>
                </div>
                <div className='right-navigation'>
                        <div><SearchIcon/></div>
                        <div><NotificationsOutlinedIcon /></div>
                        <div><AccountBoxOutlinedIcon/></div>
                        <div><ArrowDropDownIcon/></div>
                </div>
            </navbar>
        </>
    );
}

export default Header;
