import * as React from 'react';
import {
  useState,
  Dispatch,
  SetStateAction
} from 'react';
import type { Thread, Mode } from './types';
import { NameInput, MessageInput } from './inputComponents';

interface NewThreadContainerProps {
  site : Thread[];
  updateSite : Dispatch<SetStateAction<Thread[]>>;
  setMode : Dispatch<SetStateAction<Mode>>;
  updateThread : Dispatch<SetStateAction<number>>;
}
export function NewThreadContainer (props : NewThreadContainerProps) : JSX.Element {

  const [author, setAuthor] = useState<string>(
    'Username');
  const [title, setTitle] = useState<string>(
    'Thread name');
  const[content, setContent] = useState<string>(
    'Enter your message here.');

  function handleSubmit () : void {
    const firstPost = {
      content : content,
      author : author
    };

    const newThread = {
      title : title,
      replies : [firstPost]
    };

    const siteCopy = [...props.site];
    siteCopy.unshift(newThread);
    props.updateSite(siteCopy);

    props.updateThread(0);
    props.setMode('viewThread');
  }

  return(
    <div id="newThreadContainer">
      <NameInput
        author={author}
        setAuthor={setAuthor}
      />
      <NameInput
        author={title}
        setAuthor={setTitle}
      />
      <MessageInput
        content={content}
        setContent={setContent}
      />
      <input
        type="button"
        id="newThreadSubmit"
        onClick={handleSubmit}
        value="Submit"
      />
    </div>
  );
}
