"use client"
import VivaGrid from '@/components/modules/viva-grid'
import VivaInput from '@/components/modules/viva-input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChatBubbleIcon, DotsVerticalIcon, Share1Icon } from '@radix-ui/react-icons'
import React, { memo } from 'react'
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next'
import { Separator } from '@radix-ui/react-separator'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Vector from '@/components/icons/vector'
import { RxLayers } from 'react-icons/rx'
const appDatas: App[] = [{
    id: '1',
    name: 'App name',
}, {
    id: '1',
    name: 'App name',
}]

const DatasetsPage = memo((props) => {
    const {t} = useTranslation()
    const router = useRouter()
    return (
        <div className='flex flex-col'>
            <div className='p-4 border-b border-b-gray-200 justify-between flex'>
                <div className="justify-start items-center gap-6 flex">
                    <div className="">Datasets</div>
                    <div className='w-72'><VivaInput /></div>
                </div>
                <div className="">
                    <Button className=' rounded-full'>Create New Datasets</Button>
                </div>
            </div>
            <div className='content m-5 flex flex-col'>

                <VivaGrid    
                    data={appDatas}
                    loading={false} 
                    render={item => (
                        <div className='flex h-[120px] relative' onClick={() => router.push("/apps/_create")}>
                            <div className='my-3 mx-2'>
                                <div className='w-[35px] h-[35px] bg-secondary rounded-full relative'>
                                    <div className=' absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                        <RxLayers className={cn('text-primary')} />
                                    </div>
                                </div>
                            </div>
                            <div className='flex-grow py-2 px-3'>
                                <p className=''>{item.name}</p>
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
                    )}
                />
            </div>
        </div>



    )
})


export default DatasetsPage