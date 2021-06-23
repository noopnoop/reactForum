export interface Message {
  author: string;
  content: string;
}

export interface Thread {
  title: string;
  replies: Message[];
}
