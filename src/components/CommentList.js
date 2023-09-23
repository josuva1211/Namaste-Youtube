import React from 'react'
import Comment from './Comment'

const CommentList = ({ commentsList }) => {
  console.log(commentsList);
  return commentsList.map(comment => (
    <div>
        <Comment comment={comment} />
        <div className='pl-5 border border-l-black ml-5'>
            <CommentList commentsList={comment.replies} />
        </div>
    </div>
    
  ))
    
}

export default CommentList