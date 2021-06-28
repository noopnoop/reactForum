import * as React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import type { Thread } from './types';
import { ThreadsContainer } from './browseComponents';
import { TopicContainer } from './threadComponents';

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
function App (props: AppProps){
  const [viewingThread, updateViewingThread] = useState<boolean>(false);
  const [currentThread, updateThread] = useState<number>(0);
  const [site, updateSite] = useState<Thread[]>(props.threads);

  if (!viewingThread) {
    return (
      <ThreadsContainer
        threads = {site}
        updateThread = {updateThread}
        updateViewingThread = {updateViewingThread}
      />
    );
  } else {
    return (
      <TopicContainer
        currentThread = {currentThread}
        updateThread = {updateThread}
        updateViewingThread = {updateViewingThread}
        site = {site}
        updateSite = {updateSite}
      />
    );
  }

}

render(
  <App threads={testPage}/>,
  document.getElementById('root')
);
