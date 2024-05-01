import React, { memo } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { ActivityLogIcon, GearIcon } from '@radix-ui/react-icons'

const UserProfile = memo(() => {
  return (
    <>
        <div className="flex justify-between w-full">
            <div className="items-center gap-1 flex">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>DV</AvatarFallback>
                </Avatar>
                <div className="text-slate-500 text-sm">David</div>
            </div>
            <div className=' flex items-center gap-3 text-slate-500 mr-5'>
                <GearIcon />
                <ActivityLogIcon />
            </div>
        </div>
    </>
  )
})

export default UserProfile