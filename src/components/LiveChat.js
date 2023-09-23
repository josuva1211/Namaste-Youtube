import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessage, generateRandomName } from '../utils/helper';

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatInfo = useSelector(store => store.chat.messages);

  const [message, setMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
        dispatch(addMessage({name: generateRandomName(), message: generateRandomMessage(20) + "🚀🚀"}))
    }, 1500)

    return () => {
        clearInterval(i);
    }
  }, [])
  return (
    <>
        <div className='ml-2 p-2 my-2 w-full border border-black bg-slate-100 rounded-lg h-[600px] flex flex-col-reverse overflow-y-scroll'>
            {chatInfo.map(c => <ChatMessage name={c.name} message={c.message} />)}
        </div>
        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMessage({name: "Shri Prakash", message: message}));
            setMessage("");
        }}>
            <input value={message} onChange={(e) => setMessage(e.target.value)} className='p-2 m-2 border border-black w-1/2' type='text' placeholder='type your message...' />
            <button className='bg-green-300 p-2'>Send</button>
        </form>
    </>
    
  )
}

export default LiveChat