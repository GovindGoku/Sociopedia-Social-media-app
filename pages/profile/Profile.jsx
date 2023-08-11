import Topbar from '../../components/Topbar/Topbar'
import Sidepart from '../../components/sidepart/Sidepart'
import Rightpart from '../../components/rightpart/Rightpart'
import Feedx from '../../components/Feedx/Feedx'
import './profile.css'

export default function Profile() {
    return (
        <>
    <Topbar />
    <div className='profile'>
    <Sidepart/>
    <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img className='profileCoverImg' src='/assets/cover.png' alt='' />
            <img className='profileUserImg' src='/assets/person/p (1).png' alt='' />
            </div>
            <div className="profileInfo">
                <h4 className='profileInfoName'>Antonio Alex</h4>
                <span className="profileInfoDesc">Hello my Friends..</span>
            </div>
        </div>
        <div className="profileRightBottom">
    <Feedx/>
    <Rightpart profile/>
    </div>
    </div>
    </div>
    </>
    )
}