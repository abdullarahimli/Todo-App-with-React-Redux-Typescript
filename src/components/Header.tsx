import React, { useState } from 'react'
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { IoIosMoon } from "react-icons/io";
import '../css/Header.css'

function HEader() {

    return (
        <div className='container header'>
            <IoMdSunny className='sun' />
            <IoIosMoon className='moon' />
        </div>
    )
}

export default HEader
