import React, { ReactNode, memo } from 'react'
import { Card } from '../ui/card'
import { Skeleton } from '../ui/skeleton'

interface VivaGridProp {
    data: Record<string, any>[]
    loading: boolean
    skeletonCount?: number
    height?: string
    render?: (item: Record<string, any>) => ReactNode,
}

const VivaGrid: React.FC<VivaGridProp> = memo(({
     data, loading, skeletonCount, height, render
}) => {
    
    if(!height) {
        height = "100%"
    }
  
    if(!skeletonCount) {
        skeletonCount = 10
    }
    return (
        // <div className={`content-start grid grid-cols-1 pt-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 grow shrink-0 flex-wrap gap-2`} >
        <div className={`content-start flex flex-wrap gap-2`} >
            {!loading && 
            data && data.map((item, index) => {
                return (
                    <Card key={index} className=' w-[300px]  overflow-hidden rounded hover:shadow-md hover:bg-primary-50 transition duration-500 ease-in-out transform hover:-translate-y-1 cursor-pointer'>
                        {render?.(item)}
                    </Card>
                )
            })}
            {loading && 
            Array.from({ length: skeletonCount }, (_, index) => 
                <Card key={index} className=' overflow-hidden rounded shadow-md p-3 space-y-2'>
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                    </div>
                </Card>
            )}
        </div>
    )
})

export default VivaGrid