import { useRef, useState } from "react";

export default function useChatInput() {
      const [selectedImage, setSelectedImage] = useState<string|undefined>(undefined);
      const fileInputRef=useRef<HTMLInputElement|null>(null)
      function handleImageChange(e:React.ChangeEvent<HTMLInputElement>){
        const file=e.target.files?.[0]
        if(file){
          const reader=new FileReader()
          reader.onloadend=()=>{
            setSelectedImage(reader.result as string)
          }
          reader.readAsDataURL(file)
        }
      }
    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement|HTMLTextAreaElement>, input: string,onSend: (message: string, image?: string | undefined) => void ) {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
           handleSend(input,onSend)
        
        }
      }
    function handleSend(input: string, onSend: (message: string, image?: string | undefined) => void){
      if(!input.trim()&&!selectedImage) return;
      onSend(input,selectedImage)
      setSelectedImage(undefined)
      if(fileInputRef.current)
        fileInputRef.current.value=""
    }
      function handlePaste(e:React.ClipboardEvent<HTMLInputElement|HTMLTextAreaElement>){
        const items=e.clipboardData?.items
        if(!items) return;
        for (let i = 0; i < items.length; i++) {
          const item=items[i]
          if(item.type.startsWith("image/")){
            e.preventDefault();
            const file=item.getAsFile()
            if(!file) continue;
            const reader=new FileReader()
            reader.onload=(event)=>{
              const baseString=event.target?.result as string
              if(baseString){
                
                setSelectedImage(baseString)
              }
    
            }
            reader.readAsDataURL(file)
            break;
          }
          
        }
      }
    
  return {
    handleImageChange,
    handleKeyDown,
    handlePaste,
    handleSend,
    fileInputRef,
    selectedImage,
    setSelectedImage
  }
}
