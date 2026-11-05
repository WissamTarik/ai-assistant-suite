import Groq from "groq-sdk";

export const groq=new Groq({
    apiKey: import.meta.env.VITE_API_KEY as string,
    dangerouslyAllowBrowser:true
})