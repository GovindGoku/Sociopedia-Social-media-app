import './sidepart.css'
import {MdRssFeed} from 'react-icons/md'
import {BsFillChatLeftTextFill} from 'react-icons/bs'
import {BiSolidGroup} from 'react-icons/bi'
import {BiSolidVideos} from 'react-icons/bi'
import {BiSolidBookmarkStar} from 'react-icons/bi'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {MdWorkOutline} from 'react-icons/md'
import {MdEventAvailable} from 'react-icons/md'
import {BiSolidGraduation} from 'react-icons/bi'
import { Users } from '../../Dummydata'
import Friend from '../Friend/Friend'


export default function Sidepart() {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                      <MdRssFeed className='sidebarIcon' />
                      <span className='sidebarListItemText'>Feed</span>
                    </li>
                    <li className='sidebarListItem'>
                      <BsFillChatLeftTextFill className='sidebarIcon' />
                      <span className='sidebarListItemText'>Chat</span>
                    </li>
                    <li className='sidebarListItem'>
                      <BiSolidVideos className='sidebarIcon' />
                      <span className='sidebarListItemText'>Videos</span>
                    </li>
                    <li className='sidebarListItem'>
                      <BiSolidGroup className='sidebarIcon' />
                      <span className='sidebarListItemText'>Groups</span>
                    </li>
                    <li className='sidebarListItem'>
                      <BiSolidBookmarkStar className='sidebarIcon' />
                      <span className='sidebarListItemText'>Bookmarks</span>
                    </li>
                    <li className='sidebarListItem'>
                      <AiOutlineQuestionCircle className='sidebarIcon' />
                      <span className='sidebarListItemText'>Questions</span>
                    </li>
                    <li className='sidebarListItem'>
                      <MdWorkOutline className='sidebarIcon' />
                      <span className='sidebarListItemText'>Job</span>
                    </li>
                    <li className='sidebarListItem'>
                      <MdEventAvailable className='sidebarIcon' />
                      <span className='sidebarListItemText'>Event</span>
                    </li>
                    <li className='sidebarListItem'>
                      <BiSolidGraduation className='sidebarIcon' />
                      <span className='sidebarListItemText'>Course</span>
                    </li>
                </ul>
                <button className='sidebarButton'>Show More</button>
                <hr className='sidebarHr'/>
                <ul className='sidebarFriendList'>
                   {Users.map((u) => (
                    <Friend key={u.id} user={u} />
                   ))}
                </ul>
            </div>
        </div>
    )
}