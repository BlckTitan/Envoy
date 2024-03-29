import React, { useState } from 'react'
//atoms
import Span from '../../atom/span_text/Span';
import Links from '../../atom/links/Links';
//atom styles
import { ListItems } from './LiList.style';
//icons
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function LiList() {
    const [activeLink, setActiveLink] = useState('');
    const [listLinkItems, setListLinkItems] = useState([
        {linkRef:'/', linkTitle:'Dashboard', iconName:<DashboardOutlinedIcon/>,},
        {linkRef:'/drivers', linkTitle:'Drivers', iconName:<LocalShippingOutlinedIcon/>,}, 
        {linkRef:'/livetrack', linkTitle:'Live Track', iconName:<FmdGoodOutlinedIcon/>,}, 
        {linkRef:'/transactions', linkTitle:'transactions', iconName:<ReceiptLongOutlinedIcon/>,},
        {linkRef:'/settings', linkTitle:'settings', iconName:<SettingsOutlinedIcon/>,}
    ]);
    return (
        <ul className='w-full h-96 flex flex-col items-start mt-36 border-0 rounded-none bg-inherit'>
            {listLinkItems.map((element) => (
                <ListItems className={activeLink} onClick={() => setActiveLink('active')}>
                    <Span iconElement={element.iconName}/>
                    <Links linkName={element.linkTitle} linkAddress={element.linkRef}/>
                </ListItems>
            ))}
        </ul>
    )
}