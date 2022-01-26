import React from 'react';
import "./sideBar.css";
import SideBarRows from './sideBarRow';
import {Chat, ExpandMore, Flag, LocalHospital,People, Storefront, VideoLibrary } from '@material-ui/icons';
import {useStateValue} from "./StateProvider"


function SideBar() {
    const [{user}, dispatch] = useStateValue();
    return <div>
        <SideBarRows src={user.photoURL} 
        title={user.displayName}/>
        <SideBarRows Icon={LocalHospital} title='Covid-19 information center'/>
        <SideBarRows Icon={Flag} title='Pages'/>
        <SideBarRows Icon={People} title='Friends'/>
        <SideBarRows Icon={Chat} title='Messages'/>
        <SideBarRows Icon={Storefront} title='Marketplace'/>
        <SideBarRows Icon={VideoLibrary} title='Videos'/>
        <SideBarRows Icon={ExpandMore} />
       
        
    </div>;
}

export default SideBar;
