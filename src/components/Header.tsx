import React, { useState } from 'react'
import '../css/Header.css'
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { IoIosMoon } from "react-icons/io";

function HEader() {



    return (
        <div className='container header'>
            <IoMdSunny className='sun' />
            <IoIosMoon className='moon' />
        </div>
    )
}

export default HEader
