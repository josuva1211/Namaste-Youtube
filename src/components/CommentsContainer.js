import React from 'react'
import CommentList from './CommentList'

const CommentsContainer = () => {
  const commentsList = [
    {
        name: "Shri",
        text: "Lorem ipsum dolor re die siu mam ka lit harji ki",
        replies: [
            {
                name: "Shri",
                text: "Lorem ipsum dolor re die siu mam ka lit harji ki",
                replies: [
                    {
                        name: "Shri",
                        text: "Lorem ipsum dolor re die siu mam ka lit harji ki",
                        replies: [
                            {
                                name: "Shri",
                                text: "Lorem ipsum dolor re die siu mam ka lit harji ki",
                                replies: []
                            }
                        ]
                    }
                ]
            },
            
        ]
    },
    {
        name: "Shri",
        text: "Lorem ipsum dolor re die siu mam ka lit harji ki",
        replies: [
            {
                name: "Shri",
                text: "Lorem ipsum dolor re die siu mam ka lit harji ki",
                replies: [
                    {
                        name: "Shri",
                        text: "Lorem ipsum dolor re die siu mam ka lit harji ki",
                        replies: [
                            {
                                name: "Shri",
                                text: "Lorem ipsum dolor re die siu mam ka lit harji ki",
                                replies: []
                            }
                        ]
                    }
                ]
            },
            
        ]
    },
    {
        name: "Shri",
        text: "Lorem ipsum dolor re die siu mam ka lit harji ki",
        replies: [
            {
                name: "Shri",
                text: "Lorem ipsum dolor re die siu mam ka lit harji ki",
                replies: [
                    {
                        name: "Shri",
                        text: "Lorem ipsum dolor re die siu mam ka lit harji ki",
                        replies: [
                            {
                                name: "Shri",
                                text: "Lorem ipsum dolor re die siu mam ka lit harji ki",
                                replies: []
                            }
                        ]
                    }
                ]
            },
            
        ]
    },
  ] 
  return (
    <div className='m-5 p-2'>
        <h1 className='font-bold text-2xl'>Comments:</h1>
        <CommentList commentsList={commentsList} />
    </div>
  )
}

export default CommentsContainer