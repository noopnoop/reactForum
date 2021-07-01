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
      title : 'Test Thread',
      replies : [
        {
          author : 'User1',
          content : 'Here is the original post.'
        },
        {
          author : 'User2',
          content : 'Here is a reply.'
        }
      ]
    },
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
        updateThread = {updateThread}
      />
    );
  }
}

render(
  <App threads={testPage}/>,
  document.getElementById('root')
);
