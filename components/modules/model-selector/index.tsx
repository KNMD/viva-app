"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ModelFetch from "@/lib/requests/model-fetch";
import { memo, useEffect, useState } from "react";
import { RxSlider } from "react-icons/rx";

import { cn, errorToast } from '@/lib/utils'
import { useTranslation } from 'react-i18next'


const ModelSelector = memo(() => {
    const { t } = useTranslation()
    const [modelGroupList, setModelGroupList] = useState<ModelGroup[]>([])
    const [model, setModel] = useState<ModelEntity>()
    useEffect(()=> {
        ModelFetch.modelsByGroups({'type': 'llm'}).then((res) => {
            setModelGroupList(res.data)
            const groupData = res.data
            if(groupData.length !== 0 && groupData[0].modelList.length !== 0) {
                setModel(groupData[0].modelList[0])
            }
            
        }).catch(error=> {
            errorToast(error, t)
        })
    }, [])
    const handleModelChange = (value: string) => {
        modelGroupList.forEach(group => {
            const has = group.modelList.filter(I => I.id === value)
            if(has && has[0]) {
                setModel(has[0])
            }
        })
    }
    return (
        <div className='header-wrapper w-full m-3 flex justify-end pr-10'>
        { model &&  
            <DropdownMenu>
                
                <DropdownMenuTrigger asChild>
                    <Tabs defaultValue="account">
                        <TabsList>
                            <TabsTrigger value="account" className='flex '>
                                <div className='flex text-xs text-slate-500 space-x-2 items-center'>
                                    <img src={`/images/ai_providers/${model.provider_name}.svg`} className='w-4 h-4' />
                                    <span>{model.name}</span>
                                    <span className='border rounded px-1'>chat</span>
                                    <RxSlider />
                                </div>
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>
                        <Select value={model.id} onValueChange={handleModelChange}>
                            <SelectTrigger className="w-[280px]">
                                <SelectValue placeholder={t('extends.model.select.placeholder')} />
                            </SelectTrigger>
                            <SelectContent>
                            {
                                modelGroupList && modelGroupList.map((item, idx) => (
                                    <SelectGroup key={idx}>
                                        <SelectLabel className="flex gap-2">
                                            <img src={`/images/ai_providers/${model.provider_name}.svg`} className='w-4 h-4' />
                                            <span>{item.providerName}</span>
                                        </SelectLabel>
                                        {
                                            item.modelList && item.modelList.map((model,idx) => (
                                                <SelectItem key={idx} value={model.id}>
                                                    {model.name}
                                                </SelectItem>
                                            ))
                                        }
                                    </SelectGroup>
                                ))
                            }
                            </SelectContent>
                        </Select>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            Profile
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Billing
                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Settings
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Keyboard shortcuts
                            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                                <DropdownMenuSubContent>
                                    <DropdownMenuItem>Email</DropdownMenuItem>
                                    <DropdownMenuItem>Message</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>More...</DropdownMenuItem>
                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>
                        <DropdownMenuItem>
                            New Team
                            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>GitHub</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuItem disabled>API</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        Log out
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        }
        </div>
    )
})

export default ModelSelector