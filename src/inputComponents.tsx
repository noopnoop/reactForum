import * as React from 'react';
import {
  Dispatch,
  SetStateAction,
  useState,
  ChangeEvent,
} from 'react';
import type { Thread } from './types';

interface InputContainerProps {
  currentThread : number;
  updateThread : Dispatch<SetStateAction<number>>;
  site : Thread[];
  updateSite : Dispatch<SetStateAction<Thread[]>>;
}
export function InputContainer (props : InputContainerProps) : JSX.Element {

  const [content, setContent] =
    useState<string>('Enter your message here.');
  const [author, setAuthor] = useState<string>('Username');

  function handleSubmit () {
    const threadCopy = {
      title : props.site[props.currentThread].title,
      replies : [...props.site[props.currentThread].replies]
    };
    const siteCopy = [...props.site];

    const newMessage = {
      author : author,
      content : content
    };

    threadCopy.replies.push(newMessage);
    siteCopy.splice(props.currentThread, 1);
    siteCopy.unshift(threadCopy);
    props.updateSite(siteCopy);
    props.updateThread(0);
  }

  return (
    <div id="inputContainer">
      <NameInput
        author={author}
        setAuthor={setAuthor}
      />
      <MessageInput
        content={content}
        setContent={setContent}
      />
      <input type="button"
        id="messageSubmit"
        value="Submit"
        onClick={handleSubmit}>
      </input>
    </div>
  );
}

interface NameInputProps {
  author : string;
  setAuthor : Dispatch<SetStateAction<string>>;
}
function NameInput (props : NameInputProps) {

  function onAuthorChanged (e : ChangeEvent<HTMLInputElement>) {
    props.setAuthor(e.target.value);
  }

  return (
    <input
      type="text"
      onChange={onAuthorChanged}
      id="nameEntry"
      value={props.author}
    ></input>
  );
}


interface MessageInputProps {
  content : string;
  setContent : Dispatch<SetStateAction<string>>;
}
function MessageInput (props : MessageInputProps) {

  function onContentChanged (e : ChangeEvent<HTMLTextAreaElement>) {
    props.setContent(e.target.value);
  }

  return (
    <textarea
      onChange={onContentChanged}
      id="messageEntry"
      value={props.content}
    ></textarea>
  );
}

