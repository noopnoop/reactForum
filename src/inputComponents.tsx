import * as React from 'react';
import { addMessage, updateThreads } from './pureFunctions';
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
    const newMessage = {
      content : content,
      author : author
    };
    let siteCopy = [...props.site];

    siteCopy[props.currentThread] = addMessage(
      siteCopy[props.currentThread],
      newMessage
    );
    siteCopy = updateThreads(siteCopy, props.currentThread);
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
export function NameInput (props : NameInputProps) : JSX.Element {

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
export function MessageInput (props : MessageInputProps) : JSX.Element {

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

