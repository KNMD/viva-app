import React, { memo } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { ActivityLogIcon, GearIcon } from '@radix-ui/react-icons'
import Gear from '../icons/gear'
import MenuSlide from '../icons/menu-slide'
import user from '@/lib/user.json'
const UserProfile = memo(() => {
    return (
        <>
            <div className="flex justify-between w-full">
                <div className="items-center gap-1 flex">
                    <Avatar>
                        <AvatarImage src={user.avatarURL} alt={user.name} />
                        <AvatarFallback>{user.shortName}</AvatarFallback>
                    </Avatar>
                    <div className="text-slate-500 text-sm">{user.name}</div>
                </div>
                <div className=' flex items-center gap-3 text-slate-500 mr-5'>
                    <div className='p-1 rounded hover:bg-secondary cursor-pointer'>
                        <Gear />
                    </div>
                    <div className='p-1 rounded hover:bg-secondary cursor-pointer'>
                        <MenuSlide />
                    </div>

                </div>
            </div>
        </>
    )
})

export default UserProfile