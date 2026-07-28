import React from 'react';
import { Bot, User } from 'lucide-react';

export type Sender = 'user' | 'bot';

export interface ChatMessageData {
  id: string;
  sender: Sender;
  text: string;
}

interface ChatMessageProps {
  message: ChatMessageData;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  return (
    <div
      className={`flex gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
    >
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
          isUser
            ? 'bg-secondary text-secondary-foreground'
            : 'btn-gradient'
        }`}
      >
        {isUser ? (
          <User className="h-4 w-4" />
        ) : (
          <Bot className="h-4 w-4" />
        )}
      </span>
      <div
        className={`max-w-[78%] whitespace-pre-wrap break-words rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? 'rounded-tr-sm bg-secondary text-secondary-foreground'
            : 'glass-card rounded-tl-sm text-foreground'
        }`}
      >
        {message.text}
      </div>
    </div>
  );
};

export default ChatMessage;
