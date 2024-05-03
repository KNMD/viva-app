"use client"
import VivaGrid from '@/components/modules/viva-grid'
import VivaInput from '@/components/modules/viva-input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChatBubbleIcon, DotsVerticalIcon, Share1Icon } from '@radix-ui/react-icons'
import React, { memo, useState } from 'react'
import './style.css'
import PromptEditor from '@/components/modules/prompt-editor'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import PromptEditorHeightResizeWrap from '@/components/modules/prompt-editor-height-resize-wrap'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const promptVariables: any[] = []
const AppDetailPage = memo((props) => {
    const minHeight = 230
    const [editorHeight, setEditorHeight] = useState(minHeight)
    const [promptTemplate, setPromptTemplate] = useState("")

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
        <div className='flex h-full overflow-hidden'>

            <div className=" flex-1 px-6 py-8 split overflow-hidden flex flex-col">
                <Tabs defaultValue="prompt" className='mb-3'>
                    <TabsList>
                        <TabsTrigger value="prompt">Prompt</TabsTrigger>
                        <TabsTrigger value="workflow">Workflow</TabsTrigger>
                    </TabsList>
                </Tabs>
                <Card className=' shadow-lg'>
                    <PromptEditorHeightResizeWrap
                        className='px-4 pt-2 min-h-[228px] bg-white rounded-t-xl text-sm text-gray-700'
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
                </Card>

            </div>
            <div className="grow shrink"></div>

        </div>



    )
})


export default AppDetailPage