import type { TMessage } from "../../types/chat.types";

export interface IChatService{
      streamMessageAsync(userMessage: string, currentMessages: TMessage[],imageDefaultUrl?:string): AsyncIterable<string> 
}