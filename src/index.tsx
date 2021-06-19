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
    }]
};

function App(props: Page){
  let mode = "browse" //browse: look at different threads, thread: look at a thread
  
  if (mode === "browse"){
    return (
      <div id="threadsContainer">
        <div id = "threadKey">
          <p id = "nameKey">Thread Name</p>
          <p id = "replyKey">Reply Count</p>
        </div>
        <ThreadList threads={props.threads}/>
        <PageControl />
      </div>
    );

};

function Test() {
  return (
    <h1> Howdy </h1>
  );
}

render (<Test />, document.getElementById('root'));
