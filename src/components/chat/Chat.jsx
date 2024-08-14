import React, { useEffect, useRef, useState } from 'react'
import "./chat.css"
import EmojiPicker from 'emoji-picker-react'
import { onSnapshot } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const Chat = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');
    const [chat, setChat] = useState()

    const endRef = useRef(null);

    useEffect(()=>{
        endRef.current?.scrollIntoView({behavior:"smooth"});
    },[]);

    useEffect( ()=>{
        const unSub = onSnapshot(doc(db,"chats","1tgKhBFHVxOhJASmLA9Z"), (res)=>{
            setChat(res.data());
        })

        return ()=>{
            unSub();
        }
    },[])

    const handleEmoji = e => {
        setText((prev) => prev + e.emoji)
        setOpen(false)
    }

    return (
        <div className='chat'>
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Mary Jane</span>
                        <p>Peter's Girlfriend</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui culpa pariatur perspiciatis eum nulla.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui culpa pariatur perspiciatis eum nulla.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui culpa pariatur perspiciatis eum nulla.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui culpa pariatur perspiciatis eum nulla.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui culpa pariatur perspiciatis eum nulla.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui culpa pariatur perspiciatis eum nulla.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <img src="https://www.theprepmaster.com/_next/image?url=%2Ftrader-pfp.jpg&w=256&q=75" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui culpa pariatur perspiciatis eum nulla.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        {/* <img src="https://www.theprepmaster.com/_next/image?url=%2Ftrader-pfp.jpg&w=256&q=75" alt="" /> */}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui culpa pariatur perspiciatis eum nulla.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    placeholder='Type a message' />
                <div className="emoji">
                    <img src="./emoji.png" alt=""
                        onClick={() => setOpen((prev) => !prev)}
                    />
                    <div className="picker">
                        <EmojiPicker open={open} onEmojiClick={handleEmoji}></EmojiPicker>
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}

export default Chat