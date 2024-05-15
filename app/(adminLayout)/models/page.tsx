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
import Image from "next/image";
import { Badge } from '@/components/ui/badge'

const modelProvider = [{
    id: '1',
    name: 'openai',
    seted: true,
    modelProduct: 'ChatGPT',
    modelTypes: ["LLM", "TTS", "TEXT Embeding", "Speech2Text", "Moderation"]
}, {
    id: '1',
    name: 'anthropic',
    modelProduct: 'Claude3',
    modelTypes: ["LLM"]
}, {
    id: '1',
    name: 'azure',
    suffix: 'png',
    modelProduct: 'ChatGPT',
    modelTypes: ["LLM", "TTS", "TEXT Embeding", "Speech2Text", "Moderation"]
}, {
    id: '1',
    name: 'zhipu',
    modelProduct: 'ChatGLM',
    modelTypes: ["LLM", "TEXT Embeding"]
}, {
    id: '1',
    name: 'deepseek',
    modelProduct: 'DeepSeek',
    modelTypes: ["LLM", "TEXT Embeding"]
}]

const ModelPage = memo((props) => {
    const { t } = useTranslation()
    const router = useRouter()
    return (
        <div className='flex flex-col'>
            <div className='p-4 border-b border-b-gray-200 justify-between flex'>
                <div className="justify-start items-center gap-6 flex">
                    <div className='w-72'><VivaInput /></div>
                </div>
            </div>
            <div className='content m-5 flex flex-col'>

                <VivaGrid
                    data={modelProvider}
                    loading={false}
                    render={item => (
                        <div className='flex h-[150px] relative min-w-[300px] max-w-[400px] group' onClick={() => router.push("/apps/_create")}>
                            {
                                !!!item.seted &&
                                <>
                                    <div className=' absolute w-full h-full opacity-50 bg-slate-300 left-0 top-0 z-10'></div>
                                    <Button className=' absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300' variant="outline">{t('common.operation.settings')}</Button>
                                </>
                            }

                            <div className=''>
                                <div className='w-[150px] h-[150px] bg-blue-100 relative'>
                                    <img src={`/images/models/${item.name}/logo.${item.suffix ? item.suffix : 'svg'}`} className='w-3/4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                                </div>
                            </div>
                            <div className='w-[200px] py-2 px-3'>
                                <p className=' font-bold'>{item.modelProduct}</p>
                                <div className='flex gap-1 text-slate-400 flex-wrap'>
                                    {
                                        item.modelTypes.map((item: string)=> <span className=' border rounded border-slate-300 p-1 text-xs'>{item}</span>)
                                    }
                                
                                    
                                </div>
                                
                            </div>
                        </div>
                    )}
                />
            </div>
        </div>
    )
})


export default ModelPage