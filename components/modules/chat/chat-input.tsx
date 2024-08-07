import Maximize from "@/components/icons/maximize"
import Micphone from "@/components/icons/micphone"
import Paperclip from "@/components/icons/paperclip"
import Picture from "@/components/icons/picture"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { memo, useState } from "react"
import { RxPaperPlane } from "react-icons/rx"
import { useTranslation } from 'react-i18next'
import { ChatMessage, Message } from "@/types/app"

interface ChatInputProps {
    sendding: boolean
    onMessageSend: (messages: ChatMessage[]) => void;
}
const ChatInput = memo((props: ChatInputProps) => {
    const { t } = useTranslation()
    const [message, setMessage] = useState<string>()
    const handleKeyDown = (event:React.KeyboardEvent<HTMLTextAreaElement>) => { 
        if (event.key === 'Enter' && !event.shiftKey) {
          event.preventDefault();
          sendMessage();
        }
    };
    const sendMessage = () => {
        console.log("send: ", message)
        if(message) {
            props.onMessageSend([{"role": "user", "content": message, "time": 12312321}])

        }
        setMessage("")
    }
    return (
        <div className=' bg-white border rounded-xl shadow justify-start items-start gap-3 flex my-5 flex-col w-full mx-4 py-2 px-4 overflow-hidden'>
            <textarea className='border-0 w-full min-h-[50px] max-h-[150px] focus-visible:outline-none text-sm text-slate-500 resize-y overflow-y-auto'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
             />
            <Separator />
            <div className='features flex justify-between items-center w-full'>
                <div className='flex space-x-2'>
                    <div className='p-1 rounded hover:bg-secondary cursor-pointer'>
                        <Paperclip />
                    </div>
                    <div className='p-1 rounded hover:bg-secondary cursor-pointer'>
                        <Micphone />
                    </div>
                    <div className='p-1 rounded hover:bg-secondary cursor-pointer'>
                        <Picture />
                    </div>
                    <div className='p-1 rounded hover:bg-secondary cursor-pointer'>
                        <Maximize />
                    </div>
                </div>
                <Button className=' space-x-2' disabled={props.sendding}>
                    <RxPaperPlane />
                    <span>{t("appApi.chatMode.createChatApi")}</span>
                </Button>
            </div>
        </div>
    )
})
export default ChatInput