import saveAs from "file-saver";
import jsPDF from "jspdf";
import { useState } from "react";

export default function useChatMessage(text:string) {

      const [copied, setCopied] = useState(false);
    const [linkCopied, setLinkCopied] = useState(false);

    
      const [showShareModal, setShowShareModal] = useState(false);
      function handleCopyText() {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      }
    
     function handleExport(format: "md" | "txt" | "json"|"pdf") {
        const fileName = `response.${format}`;
        if(format==="pdf"){
            savePdf(fileName)
        }else{
        const blob = new Blob([text], {
          type: "text/plain;charset=utf-8",
        });
        saveAs(blob, fileName);
      }
      }
      function savePdf(fileName:string){
        const docs=new jsPDF()
        const margin=10;
        const initialY=10;
        const lineHeight=7;
        const pageHeight=docs.internal.pageSize.getHeight();
        const pageWidth=docs.internal.pageSize.getWidth()-margin*2;
        const maxY=pageHeight-margin;
        const lines:string[]=docs.splitTextToSize(text,pageWidth)
        let y=initialY
        lines.forEach((line)=>{
                 if(y>maxY){
                  docs.addPage()
                  y=margin
                 }
                 docs.text(line,margin,y)
                 y+=lineHeight;
        })
        docs.save(fileName)
      }
    function formatDate() {
        const now = new Date(Date.now());

        const year = now.getFullYear();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");

        return `${year}-${hours}-${minutes}-${seconds}`;
    }
    function handleShareCopyLink() {
        const sharableUrl = `${location.origin}?chat=${formatDate()}`;
        navigator.clipboard.writeText(sharableUrl);
        setLinkCopied(true);
        setTimeout(() => {
            setLinkCopied(false);
        }, 2000);
    }
  return {
 handleExport,
 handleCopyText,
 handleShareCopyLink,
 copied,
 showShareModal,
 setShowShareModal,
 linkCopied

  }
}
