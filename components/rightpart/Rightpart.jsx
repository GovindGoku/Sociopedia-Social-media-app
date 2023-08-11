import './rightpart.css'
import { Users } from '../../Dummydata'
import Online from '../online/Online'

export default function Rightpart({profile}) {

    const HomeRightbar = () => {
      return (
        <>
        <div className="birthdayContainer">
                    <img className='birthdayImg' src='/assets/gift.png' alt='' />
                    <span className='birthdayText'>
                        <b>Alex Joe</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img className='rightbarAd' src='/assets/ad.png' alt='' />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map (u=>(
                        <Online key={u.id} users={u} />
                    ))}
                </ul>
        </>
      )
    }

const ProfileRightbar = ()  => {
    return ( 
        <>
        <h4 className="rightbarTitle">
            User Information</h4>
         <div className="rightbarInfo">
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="rightbarInfoValue">New York</span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From:</span>
                <span className="rightbarInfoValue">Madrid</span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Relationship:</span>
                <span className="rightbarInfoValue">Single </span>
            </div>
         </div>

         <h4 className='rightbarTitle'>User Friends</h4>
         <div className="rightbarFollowings">
            <div className="rightbarFollowing">
                <img src="/assets/person/p (2).png" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
                <img src="/assets/person/p (3).png" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
                <img src="/assets/person/p (4).png" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
                <img src="/assets/person/p (5).png" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
                <img src="/assets/person/p (6).png" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
                <img src="/assets/person/p (7).png" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">John Carter</span>
            </div>
         </div>

        </>
     )
}

    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
              {profile ? <ProfileRightbar /> : <HomeRightbar /> } 
            </div>
        </div>
    )
}