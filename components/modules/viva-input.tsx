import React, { memo } from 'react'
import { Input, InputProps } from '../ui/input'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { cn } from "@/lib/utils"

export interface VivaInputProps extends InputProps {
    icon?: string
}

const VivaInput = React.forwardRef<HTMLInputElement, VivaInputProps>(({ className, type, ...props }, ref) => {
    
    return (
        // 
        <form className='w-full'>
            <div className="inputWrapper relative w-full ">
                {props?.icon !== 'none' && <MagnifyingGlassIcon className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />}
                <Input ref={ref} type={type} className={cn(
                    "w-full py-5 bg-white rounded-lg shadow border border-gray-100 justify-between items-center inline-flex", !props?.icon && 'pl-8', className)}
                     {...props} 
                />
            </div>
        </form>
        
    )
})

export default VivaInput