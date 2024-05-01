import React, { memo } from 'react'
import { Input, InputProps } from '../ui/input'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { cn } from "@/lib/utils"

const VivaInput = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
    return (
        // 
        <form className='w-full'>
            <div className="inputWrapper relative w-full ">
                <MagnifyingGlassIcon className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input ref={ref} type={type} className={cn(
                    "w-full pl-8 py-5 bg-white rounded-lg shadow border border-gray-100 justify-between items-center inline-flex", className)}
                     {...props} 
                />
            </div>
        </form>
        
    )
})

export default VivaInput