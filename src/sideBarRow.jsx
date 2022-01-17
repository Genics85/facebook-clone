import React from 'react';
import { Avatar } from '@material-ui/core';
import "./sideBarRows.css";

function sideBarRow({src,Icon,title}) {
    return (
        <div className='sideBarRows'>
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            <h4>{title}</h4>
        </div>
    )
}

export default sideBarRow
