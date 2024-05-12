"use client"
import Folder from '@/components/icons/folder'
import VivaGrid from '@/components/modules/viva-grid'
import VivaInput from '@/components/modules/viva-input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

import { CaretSortIcon, ChatBubbleIcon, DotsHorizontalIcon, DotsVerticalIcon, Share1Icon } from '@radix-ui/react-icons'
import React, { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { RxArrowLeft, RxCaretRight, RxDotsVertical, RxEnvelopeClosed, RxFile, RxGear, RxLayers, RxLoop, RxMagicWand, RxMagnifyingGlass, RxPerson, RxQuestionMarkCircled, RxRows, RxSlider, RxTokens } from 'react-icons/rx'
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import App from 'next/app'
import FileUploader from '@/components/modules/file-uploader'
import { FileItem } from '@/types/dataSchemas'
import { Separator } from '@radix-ui/react-separator'
import Wizard from '../components/wizard'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { toast } from '@/components/ui/use-toast'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const FormSchema = z.object({
    username: z.string().min(2).max(50),
    maxLength: z.number(),
    overlab: z.number(),
    ruleReplace: z.boolean().default(false).optional(),
    ruleEmailremove: z.boolean().default(false).optional(),
})

const DatasetWizardTwoPage = memo(() => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
        },
    })
    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }



    const { t } = useTranslation()
    return (
        <div className='flex h-full overflow-hidden w-full'>
            <div className=" p-5 split overflow-y-auto flex flex-col w-56 justify-between">
                <Wizard />
            </div>
            <div className="flex-grow flex overflow-hidden w-full">
                <div className='p-5 split overflow-y-auto flex flex-col space-y-3 w-3/5'>
                    <Card>
                        <div className='flex items-center m-3 space-x-3'>
                            <RxRows className=' text-xl text-violet-400' />
                            <div>
                                <h3 className=' text-base'>{t('datasetCreation.stepTwo.segmentation')}</h3>
                                <p className=' text-slate-400 text-sm'>{t('datasetCreation.stepTwo.autoDescription')}</p>
                            </div>
                        </div>
                        <div className="h-px bg-primary border w-full"></div>
                        <CardContent className='mt-5'>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                                    <FormField
                                        control={form.control}
                                        name="username"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>{t('datasetCreation.stepTwo.separator')}</FormLabel>
                                                <FormControl>
                                                    <Input placeholder={t('datasetCreation.stepTwo.separatorPlaceholder')} {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="username"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>{t('datasetCreation.stepTwo.maxLength')}</FormLabel>
                                                <FormControl>
                                                    <Input  {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="maxLength"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>{t('datasetCreation.stepTwo.overlap')}</FormLabel>
                                                <FormControl>
                                                    <Input  {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <div className=' font-bold'>{t('datasetCreation.stepTwo.rules')}</div>

                                    <FormField
                                        control={form.control}
                                        name="ruleReplace"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormDescription>
                                                        {t('datasetCreation.stepTwo.removeExtraSpaces')}
                                                    </FormDescription>
                                                </div>
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="ruleEmailremove"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormDescription>
                                                        {t('datasetCreation.stepTwo.removeUrlEmails')}
                                                    </FormDescription>
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                    <div className='flex space-x-2'>
                                        <Button type="submit">{t('datasetCreation.stepTwo.preview')}</Button>
                                        <Button type="reset" variant="secondary">{t('datasetCreation.stepTwo.reset')}</Button>
                                    </div>

                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                    <Card>
                        <div className='flex items-center m-3 space-x-3'>
                            <RxMagicWand className=' text-xl text-violet-400' />
                            <div>
                                <h3 className=' text-base'>{t('extends.chooseEmbeddingModel')}</h3>
                                <p className=' text-slate-400 text-sm'>{t('extends.embeddingModelDescription')}</p>
                            </div>
                        </div>
                        <div className="h-px bg-primary border w-full"></div>
                        <CardContent className='mt-5'>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Tabs defaultValue="account">
                                        <TabsList>
                                            <TabsTrigger value="account" className='flex '>
                                                <div className='flex text-xs text-slate-500 space-x-2 items-center'>
                                                    <img src='/images/ai_providers/openai.svg' className='w-4 h-4' />
                                                    <span>GPT-3.5-turbo</span>
                                                    <span className='border rounded px-1'>chat</span>
                                                    <RxSlider />
                                                </div>
                                            </TabsTrigger>
                                        </TabsList>
                                    </Tabs>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
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
                        </CardContent>
                    </Card>
                    <Card>
                        <div className='flex items-center m-3 space-x-3'>
                            <RxMagnifyingGlass className=' text-xl text-violet-400' />
                            <div>
                                <h3 className=' text-base'>{t('datasetSettings.form.retrievalSetting.title')}</h3>
                                <p className=' text-slate-400 text-sm'>{t('datasetSettings.form.retrievalSetting.longDescription')}</p>
                            </div>
                        </div>
                        <div className="h-px bg-primary border w-full"></div>
                        <CardContent className='mt-5 flex flex-col space-y-2'>
                            <div className='flex items-center text-slate-400 text-sm space-x-2 my-2'>
                                <label>Top K </label>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div>
                                                <RxQuestionMarkCircled className=' cursor-pointer' />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{t('appDebug.datasetConfig.top_kTip')}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>

                            <Slider
                                defaultValue={[50]}
                                max={100}
                                step={1}

                            />

                            <div className='flex items-center text-slate-400 text-sm space-x-2 my-2'>
                                <label>{t('appDebug.datasetConfig.score_threshold')}</label>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div>
                                                <RxQuestionMarkCircled className=' cursor-pointer' />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{t('appDebug.datasetConfig.score_thresholdTip')}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>

                            </div>

                            <Slider
                                defaultValue={[50]}
                                max={100}
                                step={1}

                            />
                        </CardContent>

                    </Card>
                    
                </div>
                <div className='p-5 w-2/5'>
                    <h3 className=' text-base my-3'>{t('datasetCreation.stepTwo.previewTitle')}</h3>                           
                    <div className=' flex flex-col space-y-2'>
                        <div className=' rounded-xl bg-secondary p-3'>
                            <div className=' flex justify-between items-center my-2'>
                                <span className='px-2 rounded-sm border'>#001</span>
                                <span>50 {t('datasetCreation.stepTwo.characters')}</span>
                            </div>
                            <p>类型:肤龄;阶段:1-10岁;报告话术:皮肤水分充足，弹性极佳，几乎不显示出衰老迹象。这个阶段的肌肤最需要的是温和护理，避免刺激性强的化学成分，保持皮肤的自然健康状态</p>
                        </div>
                        <div className=' rounded-xl bg-secondary p-3'>
                            <div className=' flex justify-between items-center my-2'>
                                <span className='px-2 rounded-sm border'>#001</span>
                                <span>50 {t('datasetCreation.stepTwo.characters')}</span>
                            </div>
                            <p>类型:肤龄;阶段:1-10岁;报告话术:皮肤水分充足，弹性极佳，几乎不显示出衰老迹象。这个阶段的肌肤最需要的是温和护理，避免刺激性强的化学成分，保持皮肤的自然健康状态</p>
                        </div>
                        <div className=' rounded-xl bg-secondary p-3'>
                            <div className=' flex justify-between items-center my-2'>
                                <span className='px-2 rounded-sm border'>#001</span>
                                <span>50 {t('datasetCreation.stepTwo.characters')}</span>
                            </div>
                            <p>类型:肤龄;阶段:1-10岁;报告话术:皮肤水分充足，弹性极佳，几乎不显示出衰老迹象。这个阶段的肌肤最需要的是温和护理，避免刺激性强的化学成分，保持皮肤的自然健康状态</p>
                        </div>
                        <div className=' rounded-xl bg-secondary p-3'>
                            <div className=' flex justify-between items-center my-2'>
                                <span className='px-2 rounded-sm border'>#001</span>
                                <span>50 {t('datasetCreation.stepTwo.characters')}</span>
                            </div>
                            <p>类型:肤龄;阶段:1-10岁;报告话术:皮肤水分充足，弹性极佳，几乎不显示出衰老迹象。这个阶段的肌肤最需要的是温和护理，避免刺激性强的化学成分，保持皮肤的自然健康状态</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
})

export default DatasetWizardTwoPage