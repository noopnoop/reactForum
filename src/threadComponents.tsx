import * as React from 'react';
import type { Thread, Message } from './types';
import {
  Dispatch,
  SetStateAction,
} from 'react';
import { InputContainer } from './inputComponents';

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
