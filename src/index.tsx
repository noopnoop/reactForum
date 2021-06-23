import * as React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import type { Thread, Message } from './types';
import { ThreadList, PageControl } from './browseComponents';

const testPage : Thread[] =
  [
    {
      title : 'down with bogus buchs',
      replies : [
        {
          author : 'swag',
          content : 'i am so sick of freaking bogus buchs'
        },
        {
          author : 'swag2',
          content : 'me too bro'
        }
      ]
    },
    {
      title : 'i kind of like bogus bucks actually',
      replies : [
        {
          author : 'joeBiden',
          content : 'you know what i mean haha',
        }
      ]
    }
  ];

interface AppProps {
  threads : Thread[]
}
function App(props: AppProps){
  const [currentThread, newThread] = useState<number | null>(null);
  const [site, updateSite] = useState<Thread[]>(props.threads);

  if (currentThread === null) {
    return (
      <div id="threadsContainer">
        <div id = "threadKey">
          <p id = "nameKey">Thread Name</p>
          <p id = "replyKey">Reply Count</p>
        </div>
        <ThreadList threads={site} newThread={newThread}/>
        <PageControl/>
      </div>
    );
  } else {
    return (
      <TopicContainer
        title = {props.threads[currentThread!].title}
        replies = {props.threads[currentThread!].replies}
      />
    );
  }

}

function TopicContainer(props: Thread) {
  return (
    <div id="topicContainer">
      <TitleContainer title={props.title} replies={props.replies}/>
      <MessageList title={props.title} replies={props.replies}/>
      <InputContainer />
    </div>
  );
}

function TitleContainer(props: Thread){
  return(
    <div id="titleContainer">
      <div id="backButton">←</div>
      <div id="topicTitle">{props.title}</div>
    </div>
  );
}

function MessageList(props: Thread){
  const list = props.replies.map((msg : Message, i : number) =>
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

function Test() {
  return (
    <h1>Howdy</h1>
  );
}

render(
  <App threads={testPage}/>,
  document.getElementById('root')
);
