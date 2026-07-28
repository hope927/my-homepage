import React, { useEffect, useRef, useState } from 'react';
import { Send, Bot, Sparkles } from 'lucide-react';
import ChatMessage, { type ChatMessageData } from './ChatMessage';
import { matchAnswer, suggestedQuestions } from '@/data/knowledge';

const WELCOME_MESSAGE: ChatMessageData = {
  id: 'welcome',
  sender: 'bot',
  text:
    '你好，我是 hope 的数字分身 👋\n可以问我关于 hope 的任何问题，比如下方的推荐问题。',
};

// 打字中指示器
const TypingIndicator: React.FC = () => (
  <div className="flex gap-2.5">
    <span className="btn-gradient flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
      <Bot className="h-4 w-4" />
    </span>
    <div className="glass-card flex items-center gap-1 rounded-2xl rounded-tl-sm px-4 py-3">
      {[0, 150, 300].map((delay) => (
        <span
          key={delay}
          className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/60"
          style={{ animationDelay: `${delay}ms` }}
        />
      ))}
    </div>
  </div>
);

const ChatPanel: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessageData[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, isTyping]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const send = (text: string) => {
    const q = text.trim();
    if (!q || isTyping) return;
    const userMsg: ChatMessageData = {
      id: `${Date.now()}-u`,
      sender: 'user',
      text: q,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const answer = matchAnswer(q);
    timerRef.current = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: `${Date.now()}-b`, sender: 'bot', text: answer },
      ]);
      setIsTyping(false);
    }, 600 + Math.random() * 500);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <section className="animate-rise glass-card flex w-full flex-col gap-4 rounded-3xl p-4 shadow-card md:p-6" style={{ animationDelay: '0.45s' }}>
      {/* 标题 */}
      <div className="flex items-center gap-2">
        <span className="relative btn-gradient flex h-8 w-8 items-center justify-center rounded-lg">
          <Sparkles className="h-4 w-4" />
          {/* 图标呼吸光点 */}
          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 animate-ping rounded-full bg-emerald-400" />
        </span>
        <div className="min-w-0">
          <h2 className="text-base font-semibold text-foreground">数字分身</h2>
          <p className="text-xs text-muted-foreground">
            和 hope 的 AI 分身聊一聊
          </p>
        </div>
      </div>

      {/* 消息列表 */}
      <div
        ref={scrollRef}
        className="max-h-[360px] min-h-[180px] flex-1 overflow-y-auto"
      >
        <div className="flex flex-col gap-4 py-1">
          {messages.map((m) => (
            <ChatMessage key={m.id} message={m} animate={m.id !== 'welcome'} />
          ))}
          {isTyping && <TypingIndicator />}
        </div>
      </div>

      {/* 推荐问题 */}
      <div className="flex flex-wrap gap-2">
        {suggestedQuestions.map((q) => (
          <button
            key={q}
            type="button"
            onClick={() => send(q)}
            disabled={isTyping}
            className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs text-primary transition-all hover:-translate-y-0.5 hover:bg-primary/10 hover:shadow-[0_4px_12px_rgba(139,92,246,0.2)] disabled:opacity-50"
          >
            {q}
          </button>
        ))}
      </div>

      {/* 输入区 */}
      <form onSubmit={onSubmit} className="flex items-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="问点什么吧…（例如：你接触ai多久了？）"
          className="min-w-0 flex-1 rounded-xl border border-border bg-white/70 px-3 py-2.5 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
        />
        <button
          type="submit"
          disabled={!input.trim() || isTyping}
          aria-label="发送"
          className="btn-gradient flex h-10 w-10 shrink-0 items-center justify-center rounded-xl disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </section>
  );
};

export default ChatPanel;
