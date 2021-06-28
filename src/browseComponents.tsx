import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { Thread } from './types';

interface ThreadsContainerProps {
  threads : Thread[];
  updateThread : Dispatch<SetStateAction<number>>;
  updateViewingThread : Dispatch<SetStateAction<boolean>>;
}
export function ThreadsContainer (props : ThreadsContainerProps) : JSX.Element {
  return (
    <div id="threadsContainer">
      <ThreadKey/>
      <ThreadList
        threads={props.threads}
        updateThread={props.updateThread}
        updateViewingThread={props.updateViewingThread}
      />
      <PageControl/>
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
  updateViewingThread : Dispatch<SetStateAction<boolean>>;
}
function ThreadList (props: ThreadListProps) : JSX.Element {

  function viewThread (n : number) : void {
    props.updateThread(n);
    props.updateViewingThread(true);
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

export function PageControl () : JSX.Element {
  return (
    <div id="pageControl">
      <button type="button" id="pageBack">←</button>
      <p id="pageNumber">fixme</p>
      <button type="button" id="pageForward">→</button>
    </div> );
}
