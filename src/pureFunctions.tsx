import type { Message, Thread } from './types';

export function copyThread (thread: Thread) : Thread {
  return {
    title : thread.title,
    replies : [...thread.replies]
  };
}

export function copyMessage (message : Message) : Message {
  return {
    author : message.author,
    content : message.content
  };
}

export function addMessage (thread : Thread, msg : Message) : Thread {
  const threadCopy = copyThread(thread);
  const msgCopy = copyMessage(msg);
  threadCopy.replies.push(msgCopy);
  return threadCopy;
}

export function updateThreads (threads : Thread[], index : number) : Thread[] {
  const threadsCopy = [...threads];
  const updatedThread = copyThread(threadsCopy[index]);
  threadsCopy.splice(index, 1);
  threadsCopy.unshift(updatedThread);
  return threadsCopy;
}
