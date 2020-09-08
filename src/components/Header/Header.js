import React from "react";
import "./Header.css";
import logo from  "../Header/img/hulu.png";
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const Header = () =>{
    return(
        <div className="header">
            <div className="header__icons">
                <div className="header__icon header__icon--active">
                    <HomeIcon/>
                    <p>Home</p>
                </div>
                <div className="header__icon">
                    <FlashOnIcon/>
                    <p>Trending</p>
                </div>
                <div className="header__icon">
                    <LiveTvIcon/>
                    <p>Verified</p>
                </div>
                <div className="header__icon">
                    <VideoLibraryIcon/>
                    <p>Collections</p>
                </div>
                <div className="header__icon">
                    <SearchIcon/>
                    <p>Search</p>
                </div>
                <div className="header__icon">
                    <PermIdentityIcon/>
                    <p>Account</p>
                </div>                
            </div>

            <img
               src={logo}
               alt="hulu"
            />
        </div>
    )
}

export default Header;