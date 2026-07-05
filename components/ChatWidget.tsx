"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { matchAnswer, SUGGESTED_QUESTIONS } from "@/lib/chatbotKnowledge";

type Message = { from: "bot" | "user"; text: string };

const GREETING: Message = {
  from: "bot",
  text: "Hallo! Ich bin der Bußmann-Assistent. Wie kann ich Ihnen helfen – zu Leistungen, Öffnungszeiten oder Karriere?",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  function ask(question: string) {
    const q = question.trim();
    if (!q) return;
    setMessages((prev) => [...prev, { from: "user", text: q }]);
    setInput("");
    setTyping(true);
    window.setTimeout(() => {
      const answer = matchAnswer(q);
      setMessages((prev) => [...prev, { from: "bot", text: answer }]);
      setTyping(false);
    }, 500);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    ask(input);
  }

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-panel" role="dialog" aria-label="Bußmann Chat-Assistent">
          <div className="chat-panel__header">
            <div>
              <strong>Bußmann Assistent</strong>
              <span>Antworten zu Leistungen, Öffnungszeiten &amp; Karriere</span>
            </div>
            <button
              className="chat-panel__close"
              onClick={() => setOpen(false)}
              aria-label="Chat schließen"
            >
              ×
            </button>
          </div>

          <div className="chat-panel__messages" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg chat-msg--${m.from}`}>
                {m.text}
              </div>
            ))}
            {typing && <div className="chat-msg chat-msg--bot chat-msg--typing">…</div>}
          </div>

          {messages.length <= 1 && (
            <div className="chat-panel__suggestions">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button key={q} onClick={() => ask(q)} type="button">
                  {q}
                </button>
              ))}
            </div>
          )}

          <form className="chat-panel__input" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ihre Frage …"
              aria-label="Ihre Frage an den Chat-Assistenten"
            />
            <button type="submit" aria-label="Senden">
              →
            </button>
          </form>
        </div>
      )}

      <button
        className="chat-fab"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Chat schließen" : "Chat öffnen"}
      >
        {open ? "×" : "Chat"}
      </button>
    </div>
  );
}
