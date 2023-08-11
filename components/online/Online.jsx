import "./online.css"

export default function Online({users}) {
    return (
        <div>
<li className='rightbarFriend'>
     <div className='rightbarProfileImgContainer'>
      < img 
     className='rightbarProfileImg' src={users.profilePicture} alt=' ' 
     />
 <span className='rightbarOnline'></span>
    </div>
<span className='rightbarUsernam'>{users.username}</span>
 </li>
        </div>
    )
}
