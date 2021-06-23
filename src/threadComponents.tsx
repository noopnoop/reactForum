import * as React from 'react';
import { Thread, Message } from './types';

interface TopicContainerProps {
  thread : Thread;
  goBack : () => void;
}
export function TopicContainer(props: TopicContainerProps) : JSX.Element {
  return (
    <div id="topicContainer">
      <TitleContainer
        title={props.thread.title}
        goBack={props.goBack}
      />
      <MessageList messages={props.thread.replies}/>
      <InputContainer />
    </div>
  );
}

interface TitleContainerProps {
  title : string;
  goBack : () => void;
}
function TitleContainer(props: TitleContainerProps){
  return(
    <div id="titleContainer">
      <div id="backButton" onClick={props.goBack}>←</div>
      <div id="topicTitle">{props.title}</div>
    </div>
  );
}

interface MessageListProps {
  messages: Message[];
}
function MessageList(props: MessageListProps){
  const list = props.messages.map((msg : Message, i : number) =>
    <MessageContainer author={msg.author} content={msg.content} key={i}/>
  );

  return (
    <div>
      {list}
    </div>
  );
}

function MessageContainer(props: Message) {
  return (
    <div className="messageContainer">
      <div className="messageAuthor">{props.author}</div>
      <div className="messageContent">{props.content}</div>
    </div>
  );
}

function InputContainer() {
  return (
    <div id="inputContainer">
      <input type="text" id="nameEntry" value="Username"></input>
      <textarea id="messageEntry">Enter your message here.</textarea>
      <input type="button" id="messageSubmit" value="Submit"></input>
    </div>
  );
}
