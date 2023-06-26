import "./MessageContainer.css";
const MessageContainer = () => {
  return (
    <div className="message-container">
      <div className="header-frame-left-column">
        <img className="z-1-icon" alt="" src="/z-1@2x.png" />
        <div className="frame-parent">
          <div className="zip-parent">
            <div className="zip">ZIP</div>
            <div className="messenger">Messenger</div>
          </div>
          <div className="v-1-parent">
            <img className="v-1-icon" alt="" src="/v-1@2x.png" />
            <img className="s-1-icon" alt="" src="/s-1@2x.png" />
            <img className="s-1-icon" alt="" src="/g-1@2x.png" />
          </div>
        </div>
      </div>
      <div className="message-frame-center-column">
        <div className="frame-group">
          <div className="message-parent">
            <div className="zip">Message</div>
            <div className="messenger">Enter message below</div>
          </div>
          <div className="frame-child" />
        </div>
      </div>
      <div className="button-frame-right-column">
        <div className="button">
          <b className="button1">SEND</b>
        </div>
        <div className="button2">
          <b className="button1">CANCEL</b>
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;
