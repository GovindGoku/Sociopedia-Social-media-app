
import './share.css'
import {MdPermMedia} from 'react-icons/md'
import {MdLabel} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'
import {BsFillEmojiSmileFill} from 'react-icons/bs'



export default function Share() {
    return(
        <div className='share'>
            <div className="shareWrapper">
            <div className="shareTop">
               <img src='/assets/person/p (1).png' alt='' className='shareProfileImg'/>
                <input placeholder="What's in your mind ?" type='text' 
                className='shareInput'/>
            </div>
            <hr className='shareHr' />
            <div className="shareBottom">
                <div className='shareOptions'>
                    <div className='shareOption'>
                        <MdPermMedia className='shareIcon' style={{ color: 'red' }}/>
                        <span className='shareOptionText'>Photo/Video</span>
                    </div>
                    <div className='shareOption'>
                        <MdLabel className='shareIcon' style={{ color: 'blue' }}/>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className='shareOption'>
                        <MdLocationOn className='shareIcon' style={{ color: 'green' }}/>
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className='shareOption'>
                        <BsFillEmojiSmileFill className='shareIcon' style={{ color: 'gold' }}/>
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                </div>
                <button className='shareButton'>Share</button>
            </div>
            </div>
        </div>
    )
}