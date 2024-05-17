"use client"
import VivaGrid from '@/components/modules/viva-grid'
import VivaInput from '@/components/modules/viva-input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChatBubbleIcon, DotsVerticalIcon, Share1Icon } from '@radix-ui/react-icons'
import React, { memo, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next'
import { Separator } from '@radix-ui/react-separator'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Vector from '@/components/icons/vector'
import Image from "next/image";
import { Badge } from '@/components/ui/badge'
import { z } from 'zod'
import { DialogHeader } from '@/components/ui/dialog'
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Form, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from '@/components/ui/form'
import { Checkbox } from '@radix-ui/react-checkbox'
import { Input } from 'postcss'
import { toast } from '@/components/ui/use-toast'
import { FormFieldSchema } from '@/types/appSchema'
import DynamicForm from '@/components/modules/dynamic-form'
import { RxPlus } from 'react-icons/rx'


const modelProvider = [{
    id: '1',
    name: 'openai',
    seted: true,
    modelProduct: 'ChatGPT',
    modelTypes: ["LLM", "TTS", "TEXT Embeding", "Speech2Text", "Moderation"],
    configSchema: {
        "schema": {
            type: 'object',
            properties: {
                api_key: { type: 'string' },
                base_url: {type: 'string'},
                organization_id: { type: 'string'}
            },
            required: ['api_key']
        },
        "config": {
            "errMessages": {
                "api_key": { required:"extends.errorMessages.common.requried" },
            }
        },
        "ui": {
            "api_key": {"component":"input", "displayName": "API Key"},
            "base_url": {"component":"input", "displayName": "API Base"},
            "organization_id": {"component":"input", "displayName": "Organization ID"},
        },
    }
}, {
    id: '1',
    name: 'anthropic',
    modelProduct: 'Claude3',
    modelTypes: ["LLM"],
    configSchema: {
        "schema": {
            type: 'object',
            properties: {
                api_key: { type: 'string' },
                base_url: {type: 'string'},
                organization_id: { type: 'string'}
            },
            required: ['api_key']
        },
        "config": {
            "errMessages": {
                "api_key": { required:"extends.errorMessages.common.requried" },
            }
        },
        "ui": {
            "api_key": {"component":"input", "displayName": "API Key"},
            "base_url": {"component":"input", "displayName": "API Base"},
            "organization_id": {"component":"input", "displayName": "Organization ID"},
        }
    }
}, {
    id: '1',
    name: 'azure',
    suffix: 'png',
    modelProduct: 'ChatGPT',
    modelTypes: ["LLM", "TTS", "TEXT Embeding", "Speech2Text", "Moderation"],
    
}, {
    id: '1',
    name: 'zhipu',
    modelProduct: 'ChatGLM',
    modelTypes: ["LLM", "TEXT Embeding"],
}, {
    id: '1',
    name: 'deepseek',
    modelProduct: 'DeepSeek',
    modelTypes: ["LLM", "TEXT Embeding"],
    
}]

const ModelPage = memo((props) => {
    const { t } = useTranslation()
    const [settings, setSettings] = useState<FormFieldSchema>()
    const [currentModel, setCurrentModel] = useState<Record<string, any>>()
    const [settingsOpen, setSettingsOpen] = useState(false)
    const settingsHandle = (model: Record<string, any>) => {
        setSettingsOpen(true)
        setSettings(model.configSchema)
        setCurrentModel(model)
        
    }

    
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
                        <div className='flex h-[150px] relative min-w-[300px] max-w-[400px] group'>
                            {
                                !!!item.seted &&
                                <>
                                    <div className=' absolute w-full h-full opacity-50 bg-slate-300 left-0 top-0 z-10'></div>
                                    <Button className=' absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300' variant="outline" onClick={(e) => { e.preventDefault();settingsHandle(item) }}>{t('common.operation.settings')}</Button>
                                </>
                            }
                            <div className=''>
                                <div className='w-[150px] h-[150px] bg-blue-100 relative'>
                                    <img src={`/images/models/${item.name}/logo.${item.suffix ? item.suffix : 'svg'}`} alt={item.name} className='w-3/4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                                </div>
                            </div>
                            <div className='w-[200px] py-2 px-3'>
                                <p className=' font-bold'>{item.modelProduct}</p>
                                <div className='flex gap-1 text-slate-400 flex-wrap'>
                                    {
                                        item.modelTypes.map((item: string) => <span className=' border rounded-xl border-slate-300 p-1 text-xs'>{item}</span>)
                                    }
                                </div>
                            </div>
                        </div>
                    )}
                />
            </div>
            {
                settings &&
                <Dialog open={settingsOpen} onOpenChange={setSettingsOpen} >
                
                    <DialogContent className='w-[700px]'>
                        <DialogHeader>
                            <DialogTitle className='flex gap-3'>
                                <div>{t('common.operation.settings')}</div>
                                <img src={`/images/models/${currentModel.name}/logo.${currentModel.suffix ? currentModel.suffix : 'svg'}`} alt={currentModel.name} className=' h-5'/>
                            </DialogTitle>
                            <DialogDescription>
                                <DynamicForm formSchema={settings} />
                                <div className='my-1'>
                                    <Button variant="outline">
                                        <RxPlus />
                                        添加模型
                                    </Button>
                                    <div className='models flex flex-col rounded bg-secondary text-xs divide-y my-2 max-h-[300px] overflow-y-auto'>
                                        
                                        <div className='flex gap-2 items-center p-2'>
                                            <span className=' text-sm font-bold'>GPT-4o</span>
                                            <span className='border rounded p-1'>CHAT</span>
                                            <span className='border rounded p-1'>128K</span>
                                            <span className='border rounded p-1'>Vision</span>
                                        </div>
                                        <div className='flex gap-2 items-center p-2'>
                                            <span className=' text-sm font-bold'>GPT-4o</span>
                                            <span className='border rounded p-1'>CHAT</span>
                                            <span className='border rounded p-1'>128K</span>
                                            <span className='border rounded p-1'>Vision</span>
                                        </div>
                                        <div className='flex gap-2 items-center p-2'>
                                            <span className=' text-sm font-bold'>GPT-4o</span>
                                            <span className='border rounded p-1'>CHAT</span>
                                            <span className='border rounded p-1'>128K</span>
                                            <span className='border rounded p-1'>Vision</span>
                                        </div>
                                        <div className='flex gap-2 items-center p-2'>
                                            <span className=' text-sm font-bold'>GPT-4o</span>
                                            <span className='border rounded p-1'>CHAT</span>
                                            <span className='border rounded p-1'>128K</span>
                                            <span className='border rounded p-1'>Vision</span>
                                        </div>
                                        <div className='flex gap-2 items-center p-2'>
                                            <span className=' text-sm font-bold'>GPT-4o</span>
                                            <span className='border rounded p-1'>CHAT</span>
                                            <span className='border rounded p-1'>128K</span>
                                            <span className='border rounded p-1'>Vision</span>
                                        </div>
                                        <div className='flex gap-2 items-center p-2'>
                                            <span className=' text-sm font-bold'>GPT-4o</span>
                                            <span className='border rounded p-1'>CHAT</span>
                                            <span className='border rounded p-1'>128K</span>
                                            <span className='border rounded p-1'>Vision</span>
                                        </div>
                                        <div className='flex gap-2 items-center p-2'>
                                            <span className=' text-sm font-bold'>GPT-4o</span>
                                            <span className='border rounded p-1'>CHAT</span>
                                            <span className='border rounded p-1'>128K</span>
                                            <span className='border rounded p-1'>Vision</span>
                                        </div>
                                        <div className='flex gap-2 items-center p-2'>
                                            <span className=' text-sm font-bold'>GPT-4o</span>
                                            <span className='border rounded p-1'>CHAT</span>
                                            <span className='border rounded p-1'>128K</span>
                                            <span className='border rounded p-1'>Vision</span>
                                        </div>
                                        <div className='flex gap-2 items-center p-2'>
                                            <span className=' text-sm font-bold'>GPT-4o</span>
                                            <span className='border rounded p-1'>CHAT</span>
                                            <span className='border rounded p-1'>128K</span>
                                            <span className='border rounded p-1'>Vision</span>
                                        </div>
                                        <div className='flex gap-2 items-center p-2'>
                                            <span className=' text-sm font-bold'>GPT-4o</span>
                                            <span className='border rounded p-1'>CHAT</span>
                                            <span className='border rounded p-1'>128K</span>
                                            <span className='border rounded p-1'>Vision</span>
                                        </div>
                                    </div>
                                </div>
                                
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            }
            
        </div>
    )
})


export default ModelPage