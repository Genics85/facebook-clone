import { Avatar, IconButton, Input } from '@material-ui/core';
import React, { Component } from 'react';
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import  SubscriptionsOutlinedIcon  from '@material-ui/icons/SubscriptionsOutlined';
import { Add, ExpandMore, Forum, NotificationsActive, PeopleAlt, StorefrontOutlined, SupervisedUserCircle } from '@material-ui/icons';


class Header extends React.Component {
    render() { 
        return <div className="header">
            <div className="header__left">
                <img src="data:image/png;base64,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" alt="" />
                <div className="header__input">
                    <SearchIcon></SearchIcon>
                    <input placeholder='Enter a text' type="text" />
                </div>
            </div>
            <div className="header__center">
                <div className="header__option header__option--active">
                    <HomeIcon ></HomeIcon>
                </div>
                <div className="header__option">
                    <FlagIcon ></FlagIcon>
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon ></SubscriptionsOutlinedIcon>
                </div>
                <div className="header__option">
                    <StorefrontOutlined ></StorefrontOutlined>
                </div>
                <div className="header__option">
                    <SupervisedUserCircle ></SupervisedUserCircle>
                </div>
                 <div >
            </div>
        </div>
             <div className="header__right">
                <div className="header__info">
                    <Avatar/>
                    <h5>Brhedha Genics</h5>
                </div>
                <IconButton>
                    <Add></Add>
                </IconButton>
                <IconButton>
                    <Forum></Forum>
                </IconButton>
                <IconButton>
                    <NotificationsActive/>
                </IconButton>   
                <IconButton>
                    <ExpandMore/>
                </IconButton>         
            </div>
        </div>;
    }
}
 
export default Header;