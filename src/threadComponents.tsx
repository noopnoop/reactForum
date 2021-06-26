import * as React from 'react';
import type { Thread, Message } from './types';
import {
  Dispatch,
  SetStateAction,
  useState,
  ChangeEvent
} from 'react';

interface TopicContainerProps {
  currentThread : number | null;
  newThread : Dispatch<SetStateAction<number | null>>;
  site : Thread[];
  updateSite : Dispatch<SetStateAction<Thread[]>>;
}
export function TopicContainer(props: TopicContainerProps) : JSX.Element {

  const thread = props.site[props.currentThread!];

  return (
    <div id="topicContainer">
      <TitleContainer
        title={thread.title}
        newThread={props.newThread}
      />
      <MessageList messages={thread.replies}/>
      <InputContainer
        currentThread={props.currentThread}
        newThread={props.newThread}
        site={props.site}
        updateSite={props.updateSite}
      />
    </div>
  );
}

interface TitleContainerProps {
  title : string;
  newThread : Dispatch<SetStateAction<number | null>>;
}
function TitleContainer(props: TitleContainerProps){

  function goBack () {
    props.newThread(null);
  }

  return(
    <div id="titleContainer">
      <div id="backButton" onClick={goBack}>←</div>
      <div id="topicTitle">{props.title}</div>
    </div>
  );
}

interface MessageListProps {
  messages: Message[];
}
function MessageList(props: MessageListProps){
  const list = props.messages.map((msg : Message, i : number) =>
    <MessageContainer message={msg} key={i}/>
  );

  return (
    <div>
      {list}
    </div>
  );
}

interface MessageContainerProps {
  message : Message;
}
function MessageContainer(props: MessageContainerProps) {
  return (
    <div className="messageContainer">
      <div className="messageAuthor">{props.message.author}</div>
      <div className="messageContent">{props.message.content}</div>
    </div>
  );
}

interface InputContainerProps {
  currentThread : number | null;
  newThread : Dispatch<SetStateAction<number | null>>;
  site : Thread[];
  updateSite : Dispatch<SetStateAction<Thread[]>>;
}
function InputContainer(props : InputContainerProps) {

  const [messageInput, setMessageInput] =
    useState<string>('Enter your message here.');
  const [nameInput, setNameInput] = useState<string>('Username');

  function handleMessageChange (e : ChangeEvent<HTMLTextAreaElement>) {
    setMessageInput(e.target.value);
  }

  function handleNameChange (e : ChangeEvent<HTMLInputElement>) {
    setNameInput(e.target.value);
  }

  function handleSubmit () {
    const threadCopy = {
      title : props.site[props.currentThread!].title,
      replies : [...props.site[props.currentThread!].replies]
    };
    const siteCopy = [...props.site];

    const newMessage = {
      author : nameInput,
      content : messageInput
    };

    threadCopy.replies.push(newMessage);
    siteCopy.splice(props.currentThread!, 1);
    siteCopy.unshift(threadCopy);
    props.updateSite(siteCopy);
    props.newThread(0);
  }

  return (
    <div id="inputContainer">
      <input type="text"
        onChange={handleNameChange}
        id="nameEntry"
        value="Username">
      </input>
      <textarea id="messageEntry"
        onChange={handleMessageChange}>
        Enter your message here.
      </textarea>
      <input type="button"
        id="messageSubmit"
        value="Submit"
        onClick={handleSubmit}>
      </input>
    </div>
  );
}
