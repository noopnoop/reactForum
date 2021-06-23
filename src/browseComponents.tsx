import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { Thread } from './types';

interface ThreadListProps {
  threads : Thread[];
  newThread : Dispatch<SetStateAction<number | null>>;
}
export function ThreadList(props: ThreadListProps) : JSX.Element {

  const list = props.threads.map((thread, index) => {
    return (
      <ThreadEntry
        thread={thread}
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
}
export function ThreadEntry(props: ThreadEntryProps) : JSX.Element {

  return (
    <div className="threadEntry">
      <p className ="threadName">{props.thread.title}</p>
      <p className ="threadReplyCount">{props.thread.replies.length}</p>
    </div>
  );

}

export function PageControl() : JSX.Element {
  return (
    <div id="pageControl">
      <button type="button" id="pageBack">←</button>
      <p id="pageNumber">fixme</p>
      <button type="button" id="pageForward">→</button>
    </div> );
}
