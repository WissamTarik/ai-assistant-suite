import { useEffect, useRef } from "react";
import type { TMessage } from "../../types/chat.types";

export default function useChatList(messages:TMessage[]) {
    const messageEndRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages]);
  return {messageEndRef}
}
