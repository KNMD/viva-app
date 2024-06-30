import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import React, { memo } from 'react'
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
const Chat = memo(() => {
    const { t } = useTranslation()
    return (
        <div className='chat-wrapper w-full bg-secondary relative h-full flex flex-col justify-between overflow-hidden'>
            <ModelSelector />
            <div className='flex flex-col px-3 py-2 overflow-y-auto'>
                <div className="time-wrapper w-full justify-center items-center gap-4 inline-flex my-5">
                    <div className="grow basis-0 h-[0.5px] border border-gray-100"></div>
                    <div className="text-slate-500 text-xs font-normal leading-none">Today 2:45 PM</div>
                    <div className="grow basis-0 h-[0.5px] border border-gray-100"></div>
                </div>

                <div className="robot-wrapper p-6 border rounded-2xl shadow justify-start items-start gap-3 inline-flex my-5">
                    <Avatar className='w-[24px] h-[24px]'>
                        <AvatarImage src="/images/viva-avatar.png" alt="@shadcn" />
                        <AvatarFallback>Viva</AvatarFallback>
                    </Avatar>
                    <div className="flex-col justify-start items-start gap-2 flex">
                        <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                            <div className="justify-start items-center gap-3 inline-flex">
                                <div className="text-sm leading-tight">Viva.AI</div>
                                <Separator orientation='vertical' />
                                <div className="text-xs leading-none">2:46 PM</div>
                            </div>
                            <div className="text-sm leading-tight text-slate-500">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat conser dolor amer conserlormer</div>
                        </div>


                        <div className="selection w-full flex flex-col space-y-2 text-xs text-slate-400">
                            <div className="flex items-center space-x-2 border rounded-sm shadow-sm w-full p-2">
                                <Checkbox id="terms2" />
                                <label htmlFor="terms2">问题1</label>
                            </div>
                            <div className="flex items-center space-x-2 border rounded-sm shadow-sm w-full p-2">
                                <Checkbox id="terms2" />
                                <label htmlFor="terms2">问题2</label>
                            </div>
                            <div className="flex items-center space-x-2 border rounded-sm shadow-sm w-full p-2">
                                <Checkbox id="terms2" />
                                <label htmlFor="terms2">问题3</label>
                            </div>
                        </div>
                        <div className=" justify-between items-center inline-flex w-full">
                            <div className='flex space-x-2'>
                                <div className='p-1 rounded hover:bg-secondary cursor-pointer'>
                                    <RxReload />
                                </div>
                                <div className='p-1 rounded hover:bg-secondary cursor-pointer'>
                                    <RxBookmark />
                                </div>
                                <div className='p-1 rounded hover:bg-secondary cursor-pointer'>
                                    <RxCopy />
                                </div>
                                <div className='p-1 rounded hover:bg-secondary cursor-pointer'>
                                    <RxMix />
                                </div>
                            </div>
                            <div className="p-1.5 bg-secondary  rounded shadow justify-center items-center gap-1 flex">
                                <div className="text-center text-slate-800 text-xs font-medium font-['Inter'] leading-none">50 tokens</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="user-wrapper justify-start items-start gap-3 inline-flex my-5">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div className="grow shrink basis-0  flex-col justify-start items-start gap-4 inline-flex">
                        <div className=" h-16 flex-col justify-start items-start gap-2 flex">
                            <div className=" justify-start items-center gap-3 inline-flex">
                                <div className="justify-start items-center gap-3 flex h-5">
                                    <div className="text-sm leading-tight">David</div>
                                    <Separator orientation='vertical' />
                                    <div className="text-xs leading-none">2:45 PM</div>
                                </div>
                            </div>
                            <div className=" text-slate-500 text-sm leading-tight">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam</div>
                        </div>
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
                    </div>

                </div>
                <div className="user-wrapper justify-start items-start gap-3 inline-flex my-5">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div className="grow shrink basis-0  flex-col justify-start items-start gap-4 inline-flex">
                        <div className=" h-16 flex-col justify-start items-start gap-2 flex">
                            <div className=" justify-start items-center gap-3 inline-flex">
                                <div className="justify-start items-center gap-3 flex h-5">
                                    <div className="text-sm leading-tight">David</div>
                                    <Separator orientation='vertical' />
                                    <div className="text-xs leading-none">2:45 PM</div>
                                </div>
                            </div>
                            <div className=" text-slate-500 text-sm leading-tight">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam</div>
                        </div>
                        <div className='my-2 p-2 rounded-sm shadow flex w-full items-center justify-between space-x-2'>
                            <div className='grow flex'>
                                <div className='p-1 rounded hover:bg-secondary cursor-pointer'>
                                    <RxPlay />
                                </div>
                                <Slider defaultValue={[50]} max={100} step={1} />
                            </div>
                            <div className=' text-sm leading-none text-slate-500'>
                                0:32 / 1:00
                            </div>
                        </div>
                    </div>

                </div>
                <div className="user-wrapper justify-start items-start gap-3 inline-flex my-5">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div className="grow shrink basis-0  flex-col justify-start items-start gap-4 inline-flex">
                        <div className=" h-16 flex-col justify-start items-start gap-2 flex">
                            <div className=" justify-start items-center gap-3 inline-flex">
                                <div className="justify-start items-center gap-3 flex h-5">
                                    <div className="text-sm leading-tight">David</div>
                                    <Separator orientation='vertical' />
                                    <div className="text-xs leading-none">2:45 PM</div>
                                </div>
                            </div>
                            <div className=" text-slate-500 text-sm leading-tight">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam</div>
                        </div>
                        <div className='my-2 p-2 rounded-sm shadow flex w-full items-center justify-between space-x-2'>
                            <div className='grow flex'>
                                <div className='p-1 rounded hover:bg-secondary cursor-pointer'>
                                    <RxPlay />
                                </div>
                                <Slider defaultValue={[50]} max={100} step={1} />
                            </div>
                            <div className=' text-sm leading-none text-slate-500'>
                                0:32 / 1:00
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='input w-full justify-center items-center flex'>
                <ChatInput />
            </div>
        </div>
    )
})

export default Chat