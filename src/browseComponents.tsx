import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { Thread, Mode } from './types';

interface ThreadsContainerProps {
  threads : Thread[];
  updateThread : Dispatch<SetStateAction<number>>;
  setMode : Dispatch<SetStateAction<Mode>>;
}
export function ThreadsContainer (props : ThreadsContainerProps) : JSX.Element {
  return (
    <div id="threadsContainer">
      <NewThreadBanner
        setMode={props.setMode}
      />
      <ThreadKey/>
      <ThreadList
        threads={props.threads}
        updateThread={props.updateThread}
        setMode={props.setMode}
      />
    </div>
  );
}

function ThreadKey () : JSX.Element {
  return (
    <div id = "threadKey">
      <p id = "nameKey">Thread Name</p>
      <p id = "replyKey">Reply Count</p>
    </div>
  );
}
interface ThreadListProps {
  threads : Thread[];
  updateThread : Dispatch<SetStateAction<number>>;
  setMode : Dispatch<SetStateAction<Mode>>;
}
function ThreadList (props: ThreadListProps) : JSX.Element {

  function viewThread (n : number) : void {
    props.updateThread(n);
    props.setMode('viewThread');
  }

  const list = props.threads.map((thread, index) => {
    return (
      <ThreadEntry
        thread={thread}
        changeThread={() => viewThread(index)}
        key={index}
      />
    );
  });

  return (
    <div>
      {list}
    </div>
  );
}

interface ThreadEntryProps {
  thread : Thread;
  changeThread : () => void;
}
function ThreadEntry (props: ThreadEntryProps) : JSX.Element {

  return (
    <div className="threadEntry">
      <p className ="threadName"
        onClick={props.changeThread}>
        {props.thread.title}
      </p>
      <p className ="threadReplyCount">{props.thread.replies.length-1}</p>
    </div>
  );

}

interface NewThreadBannerProps {
  setMode : Dispatch<SetStateAction<Mode>>;
}
function NewThreadBanner (props : NewThreadBannerProps) {

  function clicked () : void {
    props.setMode('newThread');
  }

  return (
    <div id="newThreadBanner">
      <div id="newThreadButton" onClick={clicked}>+</div>
      <div id="ugh">a</div>
    </div>
  );
}
