import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import React, { memo, useState } from 'react'
import { RxCopy } from "react-icons/rx";
import { RxReload } from "react-icons/rx";
import { RxMix } from "react-icons/rx";
import { RxPlay } from "react-icons/rx";
import { RxPaperPlane } from "react-icons/rx";
import { RxBookmark } from "react-icons/rx";
import { useTranslation } from 'react-i18next'
import { GrAttachment } from "react-icons/gr";
import { RxSize } from "react-icons/rx";
import Micphone from '@/components/icons/micphone';
import Picture from '@/components/icons/picture';
import Paperclip from '@/components/icons/paperclip';
import Maximize from '@/components/icons/maximize';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RxSlider } from "react-icons/rx";
import ModelSelector from '../model-selector';
import ChatInput from './chat-input';
import manifest from '@/lib/app.json'
import user from '@/lib/user.json'
import { ChatMessage, EventCallbacks } from '@/types/app';
import EngineFetch from '@/lib/requests/app-fetch'
const Chat = memo(() => {
    const { t } = useTranslation()
    const [messages, setMessages] = useState<ChatMessage[]>([{
        role: "assistant",
        content: 'hello',
        time: 123123123123,
        options: ['1', '2'],
        tokens: 200,
        enableCopy: true,
        enableRefresh: true
    }, {
        role: 'user',
        content: 'je;;',
        time: 12312323234,
        audioURL: 'http://sssss'
    }]);
    const [sendding, setSendding] = useState(false)
    const handleMessage = (inputMessages: ChatMessage[]) => {
        let sentence = '';
        setSendding(true)
        const callbacks: EventCallbacks = {
            onMessage: (delta) => {
              if(delta.content) {
                sentence = `${sentence}${delta.content}`;
              }
              
              setMessages([
                ...newMessages,
                {
                  role: 'assistant',
                  content: sentence,
                  time: 123123123123,
                  enableCopy: true,
                  enableRefresh: true
                },
              ]);
            },
            onFinally: (sentence) => {
                setSendding(false)
            }
        }
        const newMessages: ChatMessage[] = [
            ...messages,
            ...inputMessages
        ];
        setMessages(newMessages)
        EngineFetch.appPreview({
            app:{
                name: "preview",
                app_config: {
                    base_model_id:"01HZK24711BWNHQXFWWAPAY36K"
                }
            },
            input: {
                conversation_id:"124343",
                messages: [{
                    role: "user",
                    content: "你好"
                }]
            }
      }, callbacks)
    }
    return (
        <div className='chat-wrapper w-full bg-secondary relative h-full flex flex-col justify-between overflow-hidden'>
            <ModelSelector />
            <div className='flex flex-col px-3 py-2 overflow-y-auto'>
                <div className="time-wrapper w-full justify-center items-center gap-4 inline-flex my-5">
                    <div className="grow basis-0 h-[0.5px] border border-gray-100"></div>
                    <div className="text-slate-500 text-xs font-normal leading-none">Today 2:45 PM</div>
                    <div className="grow basis-0 h-[0.5px] border border-gray-100"></div>
                </div>
                {
                    messages && messages.map((item, idx) => {
                        if(item.role === 'assistant') {
                            return (
                                <div key={idx} className="robot-wrapper p-6 border rounded-2xl shadow justify-start items-start gap-3 inline-flex my-5">
                                    <Avatar className='w-[24px] h-[24px]'>
                                        <AvatarImage src={manifest.app.icon} />
                                        <AvatarFallback>{manifest.app.name}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-col justify-start items-start gap-2 flex w-full">
                                        <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                                            <div className="justify-start items-center gap-3 inline-flex">
                                                <div className="text-sm leading-tight">{manifest.app.name}</div>
                                                <Separator orientation='vertical' />
                                                <div className="text-xs leading-none">2:46 PM</div>
                                            </div>
                                            <div className="text-sm leading-tight text-slate-500">{item.content}</div>
                                        </div>

                                        
                                        <div className="selection w-full flex flex-col space-y-2 text-xs text-slate-400">
                                        {
                                            item.options && item.options.map((option, idx) => (
                                                <div key={idx} className="flex items-center space-x-2 border rounded-sm shadow-sm w-full p-2">
                                                    <Checkbox id="terms2" />
                                                    <label htmlFor="terms2">{option}</label>
                                                </div>
                                            ))
                                        }
                                        </div>
                                        <div className=" justify-between items-center inline-flex w-full">
                                            <div className='flex space-x-2'>
                                                {
                                                    item.enableRefresh && (
                                                        <div className='p-1 rounded hover:bg-secondary cursor-pointer'>
                                                            <RxReload />
                                                        </div>
                                                    )
                                                }
                                                {
                                                    item.enableCopy && (
                                                        <div className='p-1 rounded hover:bg-secondary cursor-pointer'>
                                                            <RxCopy />
                                                        </div>
                                                    )
                                                }
                                            </div>
                                            {item.tokens && (
                                                <div className="p-1.5 bg-secondary  rounded shadow justify-center items-center gap-1 flex">
                                                    <div className="text-center text-slate-800 text-xs font-medium font-['Inter'] leading-none">{item.tokens}</div>
                                                </div>
                                            )}
                                            
                                        </div>
                                    </div>
                                </div>
                            )
                        }else if(item.role === 'user') {
                            return (
                                <div key={idx} className="user-wrapper justify-start items-start gap-3 inline-flex my-5">
                                    <Avatar>
                                        <AvatarImage src={user.avatarURL} alt="@shadcn" />
                                        <AvatarFallback>{user.shortName}</AvatarFallback>
                                    </Avatar>
                                    <div className="grow shrink basis-0  flex-col justify-start items-start gap-4 inline-flex">
                                        <div className="flex-col justify-start items-start gap-2 flex">
                                            <div className=" justify-start items-center gap-3 inline-flex">
                                                <div className="justify-start items-center gap-3 flex h-5">
                                                    <div className="text-sm leading-tight">{user.name}</div>
                                                    <Separator orientation='vertical' />
                                                    <div className="text-xs leading-none">2:45 PM</div>
                                                </div>
                                            </div>
                                            <div className=" text-slate-500 text-sm leading-tight">{item.content}</div>
                                        </div>
                                        {
                                            item.audioURL && (
                                                <div className='my-2 p-2 rounded-sm shadow flex w-full items-center justify-between space-x-2'>
                                                    <div className='grow flex'>
                                                        <div className='p-1 rounded hover:bg-secondary cursor-pointer'>
                                                            <RxPlay />
                                                        </div>
                                                        <Slider defaultValue={[50]} max={100} step={1} />
                                                    </div>
                                                    <div className='leading-none text-slate-500 text-xs'>
                                                        0:32 / 1:00
                                                    </div>
                                                </div>
                                            )
                                        }
                                        
                                    </div>

                                </div>
                            )
                        }
                    })
                }
                
            </div>
            <div className='input w-full justify-center items-center flex'>
                <ChatInput onMessageSend={handleMessage} sendding={sendding} />
            </div>
        </div>
    )
})

export default Chat