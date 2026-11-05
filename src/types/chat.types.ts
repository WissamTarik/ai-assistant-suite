import type Groq from "groq-sdk"

export type TMessage={
    text:string,
    isBot:boolean,
    image?:string
}
export type TGroqChatMessage=Groq.Chat.Completions.ChatCompletionMessageParam

export type TGroqResponse=Groq.Chat.Completions.ChatCompletion
