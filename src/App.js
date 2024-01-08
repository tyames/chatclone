import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
import { sendMsgToOpenAI } from './openai';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState("");

  const handleSend = async () => {
 const res = await sendMsgToOpenAI(input);
    console.log(res);
  }

  return (
    <div className="App">
    <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="brand">AskBigTY</span></div>
          <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn"/>New Chat</button>
        <div className="upperSideBootom">
      <button className="query"><img src={msgIcon} alt="Query"/>What is programming?</button>
      <button className="query"><img src={msgIcon} alt="Query"/>How to use an API?</button>

        </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="Home" className="listItemsImg"/>Home</div>
          <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg"/>Saved</div>
          <div className="listItems"><img src={rocket} alt="Upgrade Plan" className="listItemsImg"/>Upgrade Plan</div>
          </div>
       </div>
    <div className="main">
      <div classname="chats">
        <div className="chat" >
        <img className='chatImg' src={userIcon} alt="" />< p className="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        
        </div>
        <div className="chat bot" >
         <img className='chatImg' src={gptImgLogo} alt="" />< p className="txt"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div className="chatFooter">
    <div className="inp"> 
    <input type="text" placeholder='Keep It Real' value={input} onChange={(e)=>{setInput(e.target.value)}} /> <button className="send" onClick={handleSend}><img src={sendBtn} alt="Send"/></button>
</div>
      <p>AskBigTY knows basically everything, but there may be a very tiny small chance that the information you receive may not be accurate.</p>
    </div>
    </div>
    </div>
</div>
  );

}

export default App;
