import * as React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import type { Thread, Mode } from './types';
import { ThreadsContainer } from './browseComponents';
import { TopicContainer } from './threadComponents';
import { NewThreadContainer } from './newThreadComponents';

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
  const [mode, setMode] = useState<Mode>('browse');
  const [currentThread, updateThread] = useState<number>(0);
  const [site, updateSite] = useState<Thread[]>(props.threads);

  if (mode === 'browse') {
    return (
      <ThreadsContainer
        threads = {site}
        updateThread = {updateThread}
        setMode = {setMode}
      />
    );
  } else if (mode === 'viewThread') {
    return (
      <TopicContainer
        currentThread = {currentThread}
        updateThread = {updateThread}
        setMode = {setMode}
        site = {site}
        updateSite = {updateSite}
      />
    );
  } else {
    return (
      <NewThreadContainer
        site = {site}
        updateSite = {updateSite}
        setMode = {setMode}
      />
    );
  }
}

render(
  <App threads={testPage}/>,
  document.getElementById('root')
);
