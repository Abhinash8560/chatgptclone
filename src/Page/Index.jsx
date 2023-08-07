import React from 'react'
import Styles from './Main.module.css'
import { BsSun } from "react-icons/bs";
import { SiStackblitz } from "react-icons/si";
import { BiError } from "react-icons/bi";
import { BsStars,BsPerson } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { IoMdSend,IoMdAdd } from "react-icons/io";
import { FiSidebar } from "react-icons/fi";
import {FiMessageSquare } from 'react-icons/fi'

const Chatgpt = () => {
  return (
    <>
    <article className={Styles.main}> 
    <aside className={Styles.left}> 
    <section className={Styles.NewChat}>
      <div className={Styles.newChatInner1}><span className={Styles.addGrid}><IoMdAdd /> &nbsp; </span> New chat</div>
      <div className={Styles.newChatInner}><span className={Styles.closeGrid}><FiSidebar  /></span></div>
    </section>
    <div style={{display:'flex'}}>
        <p className={Styles.YesterdayGrid}>Yesterday</p>
     
      </div>
      <div className={Styles.YesInner}>
          <p  className={Styles.yesInnerGrid}><FiMessageSquare /></p>
          <p className={Styles.yesInnerGrid}>Diwali Greetings</p>
        </div>

        <div className={Styles.innerContent1}>
        <p className={Styles.YesterdayGrid1}>Previous 7 Days</p>
     
      </div>
      <div className={Styles.YesInner}>
          <p  className={Styles.yesInnerGrid}><FiMessageSquare /></p>
          <p className={Styles.yesInnerGrid}>Diwali Greetings1</p>
        </div>

        <div className={Styles.YesInner}>
          <p  className={Styles.yesInnerGrid}><FiMessageSquare /></p>
          <p className={Styles.yesInnerGrid}>Diwali Greetings1</p>
        </div>
        <div className={Styles.YesInner}>
          <p  className={Styles.yesInnerGrid}><FiMessageSquare /></p>
          <p className={Styles.yesInnerGrid}>Diwali Greetings1</p>
        </div>

        <div className={Styles.YesInner}>
          <p  className={Styles.yesInnerGrid}><FiMessageSquare /></p>
          <p className={Styles.yesInnerGrid}>Diwali Greetings1</p>
        </div>
        <div className={Styles.YesInner}>
          <p  className={Styles.yesInnerGrid}><FiMessageSquare /></p>
          <p className={Styles.yesInnerGrid}>Diwali Greetings1</p>
        </div>
        <div className={Styles.YesInner}>
          <p  className={Styles.yesInnerGrid}><FiMessageSquare /></p>
          <p className={Styles.yesInnerGrid}>Diwali Greetings1</p>
        </div>
        <div className={Styles.YesInner}>
          <p  className={Styles.yesInnerGrid}><FiMessageSquare /></p>
          <p className={Styles.yesInnerGrid}>Diwali Greetings1</p>
        </div>
        <div className={Styles.YesInner}>
          <p  className={Styles.yesInnerGrid}><FiMessageSquare /></p>
          <p className={Styles.yesInnerGrid}>Diwali Greetings1</p>
        </div>
        <div className={Styles.YesInner}>
          <p  className={Styles.yesInnerGrid}><FiMessageSquare /></p>
          <p className={Styles.yesInnerGrid}>Diwali Greetings1</p>
        </div>
  
        <div style={{borderTop:'1px solid #bbb',margin:'3vh'}}>
        <section className={Styles.upgradeParent}>
      <div className={Styles.upgrade}><span className={Styles.addGrid}><BsPerson /> &nbsp; </span> Upgrade to Plus</div>
      <p className={Styles.upgra1Pro}>NEW</p>
    </section>
          
        </div>
    </aside>
   <aside className={Styles.right}>
   <header className={Styles.headerMain}>
   <section className={Styles.firstSection}>
          <div className={Styles.chatGptParentNav}>
            <div className={Styles.leftNavbar}>
              <button className={Styles.leftButton}>
                <span style={{color:'#19C37D'}}>
                  <SiStackblitz />
                </span>
                GPT-3.5
              </button>
            </div>
            <div className={Styles.rightNavbar}>
              <p className={Styles.rightButton}>
              <span style={{color:'#19C37D'}}>
                  <BsStars />
                </span>
              GPT-4
              <span><AiFillLock /></span>

              </p>
            </div>
          </div>
        </section>
</header>
   <main className={Styles.middleMain}>
      <div className={Styles.kali}>
      <div className={Styles.kali2}>
     <p className={Styles.tpoGrid}>ChatGPT</p>

      </div>
    <div className={Styles.atomic}>
    <div className={Styles.iconContentGrid}>
    <BsSun className={Styles.middleIccon}/>
    <p className={Styles.ambegauri}>Examples</p>
    <div>
    <p className={Styles.withGrid}>'Explain quantum computing in simple terms' </p>
    <p className={Styles.withGrid1}>
             ' Got any creative ideas for a 10 year old’s birthday?' 
              </p>
              <p className={Styles.withGrid}>'How do I make an HTTP request in Javascript?' </p>
    </div>


    </div>

    <div className={Styles.iconContentGrid}>
    <SiStackblitz className={Styles.middleIccon}/>
    <p className={Styles.ambegauri}>Capabilities</p>
 <div>
  <p className={Styles.withGrid}>Remembers what user said earlier in the conversation</p>
  <p className={Styles.withGrid}>Allows user to provide follow-up corrections</p>
  <p className={Styles.withGrid1}>Trained to decline inappropriate requests</p>
 </div>
    
    </div>

    <div className={Styles.iconContentGrid}>
    <BiError className={Styles.middleIccon} />
    <p className={Styles.ambegauri}>Limitations</p>
     <div>
      <p className={Styles.withGrid}>May occasionally generate incorrect information</p>
      <p className={Styles.withGrid}>May occasionally produce harmful instructions or biased content</p>
      <p className={Styles.withGrid1}>Limited knowledge of world and events after 202</p>
     </div>
 
    
    </div>

    </div>

      </div>
   
   </main>
   <footer className={Styles.footerMain}>
   <section className={Styles.sectionfirst}>
          <div className={Styles.searchBar}>
            <input
              type="text"
              placeholder="Send a Message"
              className={Styles.textField} 
          
               
            />{" "}
            <span className={Styles.icongrid}><IoMdSend style={{color:'green'}} /></span>
          </div>
          
          {/* <div  className={Styles.research}> */}
                      <p className={Styles.research}>Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. <a href="#" style={{color:'#1b1c1d'}}>ChatGPT August 3 Version</a></p>

          {/* </div> */}
        </section>
   </footer>
   </aside>

    </article>


    </>
  )
}

export default Chatgpt