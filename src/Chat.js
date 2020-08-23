import React, {useEffect, useState} from 'react';
import './Chat.css';
import Avatar from "@material-ui/core/Avatar";
import {IconButton} from "@material-ui/core";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';


function Chat(props) {
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    },[]);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('you typed >>> ',input);

        setInput('');
    };

    return (
        <div className={'chat'}>
            <div className="chat__header">
                <Avatar src={'https://avatars.dicebear.com/api/human/' +
                `${seed}.svg`}/>

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p
                    className={
                        `chat__message ${true && 'chat__reciever'}`
                    }>
                    <span className="chat__name">Sonny Sangha</span>
                    Hey Guys

                    <span className="chat__timestamp">3:52pm</span>
                </p>
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form>
                    <input
                        value={input}
                        onChange={e=>setInput(e.target.value)}
                        placeholder={'Type a message'}
                        type="text"
                    />
                    <button onClick={sendMessage} type={'submit'}>
                        Send a message
                    </button>
                </form>
                <MicIcon/>
            </div>
        </div>
    );
}

export default Chat;
