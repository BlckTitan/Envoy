import React from 'react'
import { Outlet } from "react-router-dom";
//atom
import Span from '../../atom/span_text/Span';
import Img from '../../atom/image/Img';
//molecule
import LiList from '../../molecule/LiList/LiList';
//style imports
import {
    Logo, Sidebar, Main, Nav, Profile, ProfileInfo,
    Header, Notification, HeaderProfile, SearchForm, SearchInput,
} from './Layout.style';
//image import
import logo from '../../imgs/logo.jpg';
import logoPrimestar from '../../imgs/primestar.jpg'
//icons
import Badge from '@mui/material/Badge'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';


export default function Layout() {
    return (
        <>
            <Sidebar>
                <Logo>
                    <Img src={logo}/>
                </Logo>
                <Nav>
                    <LiList/>
                </Nav>
                <Profile>
                    <div>
                        <Img src={"https://images.unsplash.com/photo-1646541121625-e6675f5e88b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"} />
                    </div>
                    <ProfileInfo>
                        <Span name={"Hi, Richard"}/>
                        <button>
                            Logout
                            <Span iconElement={<LogoutOutlinedIcon/>}/>
                        </button>
                    </ProfileInfo>
                </Profile>
            </Sidebar>
            <Main>
                <Header>
                    <SearchForm>
                        <label for="headerSearch">
                            <SearchInput 
                                type={"text"}
                                placeholder={"Search riders, drivers, order ID's, transactions Primestar Logistics"}
                            />
                        </label>
                        <button type='submit'>
                            <Span iconElement={<SearchOutlinedIcon/>}/>
                        </button>
                    </SearchForm>
                    <Notification>
                        <HeaderProfile>
                            <Img src={logoPrimestar}/>
                            <Span name={'Primestar Logistics'}/>
                        </HeaderProfile>
                        <div>
                            <Span iconElement={
                                <Badge color="secondary" overlap="circular" badgeContent="5">
                                    <NotificationsOutlinedIcon />
                                </Badge>
                            }/>
                        </div>
                    </Notification>
                </Header>
                <Outlet/>
            </Main>
        </>
    )    
}