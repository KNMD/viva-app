"use client"
import VivaGrid from '@/components/modules/viva-grid'
import VivaInput from '@/components/modules/viva-input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChatBubbleIcon, DotsVerticalIcon, Share1Icon } from '@radix-ui/react-icons'
import React, { memo } from 'react'
import { useRouter } from 'next/navigation';
const appDatas: App[] = [{
    id: '1',
    name: 'App name',
}, {
    id: '1',
    name: 'App name',
}]

const AppPage = memo((props) => {
    const router = useRouter()
    return (
        <div className='flex flex-col'>
            <div className='p-4 border-b border-b-gray-200 justify-between flex'>
                <div className="justify-start items-center gap-6 flex">
                    <div className="">Apps</div>
                    <div className='w-72'><VivaInput /></div>
                </div>
                <div className="">
                    <Button className=' rounded-full'>Create New Apps</Button>
                </div>
            </div>
            <div className='content m-2 mt-5'>
                <VivaGrid data={appDatas}>
                    <div className='flex h-[120px] relative' onClick={() => router.push("/apps/_create")}>
                        <div className=''>
                            <Avatar className='w-[120px] h-[120px] rounded-none'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback className='rounded-none'>
                                    <img src="/images/apps/app_default_logo.png" />
                                </AvatarFallback>
                            </Avatar>
                        </div>
                        <div className='w-[200px] py-2 px-3'>
                            <p className=''>App name</p>
                            <p className=' text-xs font-extralight'>Tristique senectus et netus et malesuada fames ac turpis egestas consetuter</p>
                            <div className='flex justify-between mt-2'>
                                <div className=' space-x-1 text-slate-400 flex'>
                                    <ChatBubbleIcon />
                                    <span className=' text-xs'>17.3k</span>
                                </div>
                                <div className='flex space-x-1 text-slate-400'>
                                    <Share1Icon />
                                    <div  className='rounded-full bg-primary-200'>
                                        <DotsVerticalIcon />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </VivaGrid>
            </div>
        </div>



    )
})


export default AppPage