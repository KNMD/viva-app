"use client"
import Folder from '@/components/icons/folder'
import VivaGrid from '@/components/modules/viva-grid'
import VivaInput from '@/components/modules/viva-input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { ChatBubbleIcon, DotsVerticalIcon, Share1Icon } from '@radix-ui/react-icons'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { RxCaretRight, RxDotsVertical, RxEnvelopeClosed, RxPerson, RxTokens } from 'react-icons/rx'
const appDatas: App[] = [{
    id: '1',
    name: 'App name1',
}, {
    id: '1',
    name: 'App name2',
}, {
    id: '1',
    name: 'App name3',
}, {
    id: '1',
    name: 'App name4',
},{
    id: '1',
    name: 'App name5',
}]
const AppPage = memo(() => {
    const { t } = useTranslation()
    return (
        <div className='flex h-full overflow-hidden w-full'>
            <div className=" p-5 split overflow-y-auto flex flex-col w-96 justify-between">
                <div className=' flex flex-col space-y-4'>
                    <h3 className=''>{t('extends.allApps')}</h3>
                    <div className='w-full'>
                        <Tabs defaultValue="my" className="w-full ">
                            <TabsList className='w-full flex'>
                                <TabsTrigger className='w-1/2 flex space-x-2' value="my">
                                    <RxPerson />
                                    <span className=' text-xs'>{t('extends.my')}</span>
                                </TabsTrigger>
                                <TabsTrigger className='w-1/2 flex space-x-2' value="all">
                                    <RxTokens />
                                    <span className=' text-xs'>{t('extends.all')}</span>
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>
                    <div>
                        <VivaInput placeholder='search your apps...' />
                    </div>
                    <div className="h-px border border-gray-100"></div>
                    <div className='tree mt-5'>
                        <Collapsible defaultOpen={true} onOpenChange={() => { }}>
                            <CollapsibleTrigger className={cn('CollapsibleTrigger flex space-x-2 items-center p-2 justify-between w-full border rounded-lg border-white focus:text-primary focus:border-primary')}>
                                <div className=' flex space-x-2'>
                                    <RxCaretRight />
                                    <RxEnvelopeClosed />
                                    <div className=' text-xs'>{t('extends.all')}</div>
                                </div>
                                <div className=''>
                                    <RxDotsVertical />
                                </div>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="CollapsibleContent">
                                <Collapsible defaultOpen={false} onOpenChange={() => { }}>
                                    <CollapsibleTrigger className={cn('CollapsibleTrigger flex space-x-2 items-center p-2 justify-between w-full border rounded-lg border-white focus:text-primary focus:border-primary')}>
                                        <div className=' flex space-x-2'>
                                            <RxCaretRight />
                                            <RxEnvelopeClosed />
                                            <div className=' text-xs'>{t('extends.all')}</div>
                                        </div>
                                        <div className=''>
                                            <RxDotsVertical />
                                        </div>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="CollapsibleContent">
                                        Yes. Free to use for personal and commercial projects. No attribution
                                        required.
                                    </CollapsibleContent>
                                </Collapsible>
                            </CollapsibleContent>
                        </Collapsible>
                    </div>
                </div>

                <div>
                    <Button variant="secondary" className="w-full">{t('extends.createCategory')}</Button>
                </div>
            </div>
            <div className="flex-grow p-5">
                <VivaGrid
                    data={appDatas}
                    loading={false}
                    render={item => (
                        <div className='flex h-[120px] relative'>
                            <div className=''>
                                <Avatar className='w-[120px] h-[120px] rounded-none'>
                                    <AvatarImage src="/images/apps/app_backgroud_img.png" />
                                    <AvatarFallback className='rounded-none'>
                                        <img src="/images/apps/app_default_logo.png" />
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                            <div className='w-[200px] py-2 px-3'>
                                <p className=''>{item.name}</p>
                                <p className=' text-xs font-extralight'>Tristique senectus et netus et malesuada fames ac turpis egestas consetuter</p>
                                <div className='flex justify-between mt-2'>
                                    <div className=' space-x-1 text-slate-400 flex'>
                                        <ChatBubbleIcon />
                                        <span className=' text-xs'>17.3k</span>
                                    </div>
                                    <div className='flex space-x-1 text-slate-400'>
                                        <Share1Icon />
                                        <div className='rounded-full bg-primary-200'>
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

export default AppPage