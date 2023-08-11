
// JSX file
import './post.css';
import { FiMoreVertical } from 'react-icons/fi';
import {Users} from '../../Dummydata'
import { useState } from 'react';

export default function Post({post}) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler =() =>{
    setLike(isLiked ? like-1 : like+1 )
    setIsLiked(!isLiked)
  }

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className='postProfileImg' src={Users.filter((u) =>u.id === post.userId)[0].profilePicture} alt='' />
              <span className='postUsername'>
                {Users.filter((u) =>u.id === post.userId)[0].username}
              </span>
              <span className='postDate'>{post.date}</span>
             </div>
          <div className="postTopRight">
            <FiMoreVertical />
          </div>
        </div>
        <div className="postCenter">
            <span className='postText'>{post?.desc}</span>
            <img className='postImg' src='/assets/person/p (2).png' alt=''/>
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className='likeIcon' src='/assets/like.png' onClick={likeHandler} alt='' />
                <img className='likeIcon' src='/assets/heart.png' onClick={likeHandler}  alt='' />
                <span className='postLikeCounter'>{like} people liked</span>
            </div>
            <div className="postBottomRight">
                <span className='postCommentText'>10 comments</span>
            </div>
        </div>
      </div>
    </div>
  );
}
