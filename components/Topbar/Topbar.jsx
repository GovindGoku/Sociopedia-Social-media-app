import React from 'react'
import './Topbar.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillPersonFill, BsFillChatLeftTextFill} from 'react-icons/bs'
import {IoIosNotifications} from 'react-icons/io'
import { Link } from 'react-router-dom';

export default function Topbar() {
    return(
        <div className='topbarContainer'>
            <div className='topbarLeft'>
                <span className='logo'>Sociopedia</span>
            </div>
            <div className='topbarCenter'>
                <div className='searchbar'>
                    <AiOutlineSearch className='searchIcon'/>
                    <input placeholder='Search for friend, post or video' className='searchInput' />
                </div>
            </div>
            <div className='topbarRight'>
                <div className='topbarLinks'>
                    <span className='topbarLink'>Homepage</span>
                    <span className='topbarLink'>Timeline</span>
                </div>
                <div className='topbarIcons'>
                    <div className='topbarIconItem'>
                    < BsFillPersonFill/>
                    <span className='topbarIconBadge'>1</span>
                    </div>
                    <div className='topbarIconItem'>
                        < BsFillChatLeftTextFill />
                    <span className='topbarIconBadge'>2</span>
                    </div>
                    <div className='topbarIconItem'>
                    < IoIosNotifications />
                    <span className='topbarIconBadge'>1</span>
                </div>
                </div>
                <Link to="/profile">
          <img
            src="/assets/person/p (1).png"
            alt="profile"
            className="topbarImg"
          />
        </Link>
            </div>
        </div>
    )
}