"use client"
import Folder from '@/components/icons/folder'
import VivaGrid from '@/components/modules/viva-grid'
import VivaInput from '@/components/modules/viva-input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { Checkbox } from '@radix-ui/react-checkbox'
import { CaretSortIcon, ChatBubbleIcon, DotsHorizontalIcon, DotsVerticalIcon, Share1Icon } from '@radix-ui/react-icons'
import React, { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { RxArrowLeft, RxCaretRight, RxDotsVertical, RxEnvelopeClosed, RxFile, RxGear, RxLayers, RxLoop, RxPerson, RxTokens } from 'react-icons/rx'
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





const DatasetWizardOnePage = memo(() => {
    const [files, setFiles] = useState<FileItem[]>([])
    const [currentFile, setCurrentFile] = useState<File | undefined>()
    const shouldShowDataSourceTypeList = true
    const updateFileList = (preparedFiles: FileItem[]) => {
        setFiles(preparedFiles)
    }
    const updateFile = (fileItem: FileItem, progress: number, list: FileItem[]) => {
        const targetIndex = list.findIndex(file => file.fileID === fileItem.fileID)
        list[targetIndex] = {
          ...list[targetIndex],
          progress,
        }
        setFiles([...list])
        
    }

    const updateCurrentFile = (file: File) => {
        setCurrentFile(file)
      }

    const { t } = useTranslation()
    return (
        <div className='flex h-full overflow-hidden w-full'>
            <div className=" p-5 split overflow-y-auto flex flex-col w-56 justify-between">
                <Wizard />
            </div>
            <div className="flex-grow p-5 flex flex-col space-y-3  h-full">
                <h3>{t('datasetCreation.stepThree.label')}</h3>
                <VivaInput className={cn('w-96')} icon="none" />
                
                <FileUploader
                    fileList={files}
                    titleClassName={!shouldShowDataSourceTypeList ? 'mt-[30px] !mb-[44px] !text-lg !font-semibold !text-gray-900' : undefined}
                    prepareFileList={updateFileList}
                    onFileListUpdate={updateFileList}
                    onFileUpdate={updateFile}
                    onPreview={updateCurrentFile}
                    notSupportBatchUpload={true}
                />
                <div className="h-px bg-primary border w-full"></div>
                <Button className='w-36'>{t('datasetCreation.stepOne.button')}</Button>
            </div>
        </div>

    )
})

export default DatasetWizardOnePage