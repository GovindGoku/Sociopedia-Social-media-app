import './feedx.css'
import Share from '../share/Share'
import Post from '../post/Post'
import { Posts } from '../../Dummydata'

export default function Feedx() {
       return(
        <div className="feed">
            <div className='feedWrapper'>
                <Share /> 
                {Posts.map((p) =>(
                    <Post key={p.id} post={p} />
                ))}
            </div>
        </div>
       )
}