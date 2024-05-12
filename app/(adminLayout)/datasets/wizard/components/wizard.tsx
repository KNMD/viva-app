
import { cn } from '@/lib/utils'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { RxArrowLeft } from 'react-icons/rx'

const wizard = memo((props) => {
    const { t } = useTranslation()
    return (
        <div className=' flex flex-col space-y-4'>
            <div className='w-full flex items-center space-x-2'>
                <div className='w-[35px] h-[35px] bg-secondary rounded-full relative'>
                    <div className=' absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-sm p-2 border hover:shadow-lg'>
                        <RxArrowLeft className={cn('text-primary ')} />
                    </div>
                </div>
                <h3 className=' text-base'>{t('dataset.createDataset')}</h3>
            </div>
            <div className=' flex flex-col space-y-3'>
                <div className={cn('flex items-center space-x-2 hover:bg-blue-100 px-2 py-1 rounded-md cursor-pointer w-full')}>
                    <div className={cn('bg-primary rounded-full w-7 h-7 flex items-center justify-center text-slate-200')}>1</div>
                    <span>{t('datasetCreation.steps.one')}</span>
                </div>
                <div className={cn('flex items-center space-x-2 hover:bg-blue-100 px-2 py-1 rounded-md cursor-pointer w-full')}>
                    <div className={cn('bg-primary rounded-full w-7 h-7 flex items-center justify-center text-slate-200')}>2</div>
                    <span>{t('datasetCreation.steps.two')}</span>
                </div>
                <div className={cn('flex items-center space-x-2 hover:bg-blue-100 px-2 py-1 rounded-md cursor-pointer w-full')}>
                    <div className={cn('bg-primary rounded-full w-7 h-7 flex items-center justify-center text-slate-200')}>3</div>
                    <span>{t('datasetCreation.steps.three')}</span>
                </div>
            </div>

        </div>
    )
})


export default wizard