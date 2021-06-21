import * as React from 'react';
import { render } from 'react-dom';


interface Message {
  author: string;
  content: string;
}

interface Thread {
  title: string;
  replies: Message[];
}

interface Page {
  threads: Thread[];
  num: number;
}

const testPage : Page = {
  threads: [
    {
      title: 'down with bogus buchs',
      replies : [
        {
          author: 'swag',
          content: 'i am so sick of freaking bogus buchs'
        },
        {
          author: 'swag2',
          content: 'me too bro'
        }
      ]
    },
    {
      title: 'i kind of like bogus bucks actually',
      replies : [
        {
          author: 'joeBiden',
          content: 'you know what i mean haha',
        }
      ]
    }],
  num: 1
};

function App(props: Page){
  const mode = 'thread'; //browse: look at different threads, thread: look at a thread
  const currentThread = 0;

  if (mode === 'browse'){
    return (
      <div id="threadsContainer">
        <div id = "threadKey">
          <p id = "nameKey">Thread Name</p>
          <p id = "replyKey">Reply Count</p>
        </div>
        <ThreadList num={props.num} threads={props.threads}/>
        <PageControl num = {props.num} threads={props.threads}/>
      </div>
    );
  } else {
    return (
      <TopicContainer
        title = {props.threads[currentThread].title}
        replies = {props.threads[currentThread].replies}
      />
    );
  }

}

function ThreadList(props: Page){

  const list = props.threads.map((thread, index) => {
    return (
      <ThreadEntry title={thread.title}
        replies={thread.replies}
        key={index}
      />);
  });

  return list;
}

function ThreadEntry(props: Thread){

  return (<div className="threadEntry">
    <p className ="threadName">{props.title}</p>
    <p className ="threadReplyCount">{props.replies.length}</p>
  </div>);

}

function PageControl(props: Page) {
  return (
    <div id="pageControl">
      <button type="button" id="pageBack">←</button>
      <p id="pageNumber">{props.num}</p>
      <button type="button" id="pageForward">→</button>
    </div> );
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

  return list;
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
    <h1> Howdy </h1>
  );
}

render (<App threads={testPage.threads} num={testPage.num}/>,
  document.getElementById('root'));
