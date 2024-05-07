"use client"
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChatBubbleIcon, DotsVerticalIcon, Share1Icon } from '@radix-ui/react-icons'
import React, { memo, useState } from 'react'

import PromptEditor from '@/components/modules/prompt-editor'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import PromptEditorHeightResizeWrap from '@/components/modules/prompt-editor-height-resize-wrap'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { RxInfoCircled } from "react-icons/rx";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { RxCode } from "react-icons/rx";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { RxGear } from "react-icons/rx";
import { PromptVariable } from '@/types/app'
import { Switch } from '@/components/ui/switch'
import { TbBook2 } from "react-icons/tb";
import { TbFolderOpen } from "react-icons/tb";
import { RxChatBubble } from "react-icons/rx";
import { RxCrossCircled } from "react-icons/rx";
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Chat from '@/components/modules/chat'

const AppDetailPage = memo((props) => {
    const minHeight = 230
    const { t } = useTranslation()
    const [editorHeight, setEditorHeight] = useState(minHeight)
    const [promptTemplate, setPromptTemplate] = useState("")
    const [promptVariables, setPromptVariables] = useState<PromptVariable[]>([{
        "name": "姓名",
        "key": "name",
        "type": "string",
        "required": false
    }])
    const [datasets, setDatasets] = useState([{
        "id": "1",
        "name": "文档1"
    }, {
        "id": "2",
        "name": "文档2"
    }])
    const [openerOptions, setOpenerOptions] = useState([
        "1", "2", "3"
    ])

    const promptVariablesObj = (() => {
        const obj: Record<string, boolean> = {}
        promptVariables.forEach((item) => {
            obj[item.key] = true
        })
        return obj
    })()

    const handleChange = (newTemplates: string, keys: string[]) => {
        console.log("newTemplates: ", newTemplates, "keys: ", keys)
    }
    return (
        <div className='flex h-full overflow-hidden w-full'>
            <div className=" flex-1 p-5 split overflow-y-auto flex flex-col space-y-3 w-1/2">
                <Card className=' shadow-lg'>
                    <CardHeader className='p-3 space-y-0'>
                        <CardTitle className='flex space-x-1'>
                            <RxInfoCircled className=' text-primary' />
                            <span>{t('appDebug.pageTitle.line1')}</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className='px-3 mt-1 pb-2'>
                        <PromptEditorHeightResizeWrap
                            className='min-h-[228px] text-sm text-gray-700'
                            height={editorHeight}
                            minHeight={minHeight}
                            onHeightChange={setEditorHeight}
                            footer={(
                                <div className='pl-4 pb-2 flex bg-white rounded-b-xl'>
                                    <div className="h-[18px] leading-[18px] px-1 rounded-md bg-gray-100 text-xs text-gray-500">{promptTemplate.length}</div>
                                </div>
                            )}
                        >
                            <PromptEditor
                                className='min-h-[210px]'
                                compact
                                value={promptTemplate}
                                contextBlock={{
                                    show: false,
                                    datasets: [],

                                }}
                                variableBlock={{
                                    show: true,
                                    variables: [{
                                        name: "abc",
                                        value: "abc"
                                    }],
                                }}
                                externalToolBlock={{
                                    show: true,
                                }}
                                historyBlock={{
                                    show: false,
                                    selectable: false,
                                    history: {
                                        user: '',
                                        assistant: '',
                                    },
                                    onEditRole: () => { },
                                }}
                                queryBlock={{
                                    show: false,
                                }}
                                onChange={(value) => {
                                    handleChange?.(value, [])
                                }}
                                onBlur={() => {
                                    handleChange(promptTemplate, [""])
                                }}
                            />
                        </PromptEditorHeightResizeWrap>
                    </CardContent>

                </Card>

                <div className='flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent bg-muted'>
                    <div className='title flex space-x-1 items-center'>
                        <RxCode className=' text-primary' />
                        <span>{t('appDebug.variableTitle')}</span>
                    </div>
                    <Table className=' bg-white border-1 w-full rounded'>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">{t('appDebug.variableTable.key')}</TableHead>
                                <TableHead>{t('appDebug.variableTable.name')}</TableHead>
                                <TableHead>{t('appDebug.variableTable.optional')}</TableHead>
                                <TableHead className="text-right">{t('appDebug.variableTable.action')}</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {promptVariables.map((variable) => (
                                <TableRow key={variable.key}>
                                    <TableCell className="font-medium">{variable.key}</TableCell>
                                    <TableCell>{variable.name}</TableCell>
                                    <TableCell>
                                        <Switch />
                                    </TableCell>
                                    <TableCell className=" flex justify-end">
                                        <RxGear />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </div>

                <div className='flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent bg-muted'>
                    <div className='title flex space-x-1 items-center'>
                        <TbBook2 className=' text-red-700' />
                        <span>{t('common.menus.datasets')}</span>
                    </div>
                    {datasets.map((dataset) => (
                        <div className=' bg-white border-1 w-full rounded p-2' key={dataset.id}>
                            <div className=' flex justify-between'>
                                <div className=' flex space-x-2'>
                                    <TbFolderOpen className=' text-primary' />
                                    <span className=' text-xs'>{dataset.name}</span>
                                </div>
                                <div className=' flex space-x-3'>
                                    <RxGear className='text-primary hover:bg-primary-foreground rounded-full cursor-pointer' />
                                    <RxCrossCircled className=' text-red-700 hover:bg-red-300 rounded-full cursor-pointer' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className=''>

                    <div className="flex items-center justify-start my-3">
                        <div className="px-2 text-gray-500 text-xs w-[100px]">{t('appDebug.feature.groupChat.title')}</div>
                        <div className="h-[1px] bg-gray-300 w-full"></div>
                    </div>
                    <div className=' bg-primary-foreground p-4 rounded-sm'>

                        <Collapsible>
                            <div className=' text-sm justify-between flex w-full'>
                                <div className='flex items-center space-x-2'>
                                    <RxChatBubble className=' text-violet-500' />
                                    <p>{t('appDebug.feature.conversationOpener.title')}</p>
                                </div>
                                <CollapsibleTrigger className=''>
                                    <Switch />
                                </CollapsibleTrigger>
                            </div>  
                            <CollapsibleContent className=' text-xs py-3 h-auto flex flex-col space-y-2'>
                                <Textarea placeholder="Type your message here." />
                                {openerOptions.map((option) => (
                                    <div className=' space-x-1 flex w-full justify-between items-center'>
                                        <div className='w-full'>
                                            <Input value={option} />
                                        </div>
                                        <div className='p-1 hover:bg-red-400 hover:text-white rounded-sm'>
                                            <RxCrossCircled className='' />
                                        </div>
                                    </div>
                                ))}
                                <Button variant="secondary">{t('appDebug.variableConig.addOption')}</Button>
                            </CollapsibleContent>
                        </Collapsible>
                    </div>
                </div>

            </div>
            <div className="w-1/2">
                <Chat />
            </div>

        </div>



    )
})


export default AppDetailPage