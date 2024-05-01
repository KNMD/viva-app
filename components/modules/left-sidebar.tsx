import React, { memo } from 'react'
import UserProfile from './user-profile'
import VivaInput from './viva-input';
import appData from '@/lib/app.json'
import Icon from './icon';
import { Button } from '../ui/button';


function groupByType(navs: Navigation[]): { [key: string]: Navigation[] } {
    const groupedObject: { [key: string]: Navigation[] } = {};
    navs.forEach(item => {
        if (!groupedObject[item.type]) {
            groupedObject[item.type] = [];
        }
        groupedObject[item.type].push(item);
    });

    return groupedObject;
}
const LeftSidebar = memo(() => {
    const groupTypeAppData = groupByType(appData.leftNavs);
    return (
        <>
            <div className="w-[245px] p-2 flex-col justify-between items-start flex relative" style={{ 'height': 'calc(100vh - 20px)'}}>
                <div className="self-stretch h-[841px] flex-col justify-start items-start gap-5 flex">
                    <div className="self-stretch h-[86px] flex-col justify-start items-start gap-3 flex">
                        <div className="self-stretch justify-between items-center inline-flex">
                            <UserProfile />
                        </div>
                        <VivaInput placeholder='Search...' />
                    </div>
                    <div className="w-full flex-col justify-start items-start gap-3 flex">

                        <div className="w-full flex-col flex">
                        {
                            groupTypeAppData.fixed.map((item: Navigation) => {
                                return (
                                    <div className="p-3 rounded-lg justify-between items-center inline-flex hover:bg-white hover:shadow">
                                        <div className="grow shrink basis-0 justify-start items-center gap-2 flex">
                                            {item.leftIcon && <Icon iconName={item.leftIcon} className='text-slate-500' />}
                                            <div className="grow shrink basis-0 text-slate-500 text-sm font-normal">{item.name}</div>
                                        </div>
                                        {/* <div className="h-7 p-1.5 bg-white rounded shadow border border-gray-100 justify-center items-center gap-1 flex">
                                            <div className="w-[11px] h-[11px] pl-[0.83px] pr-[0.82px] pt-[0.83px] pb-[0.82px] justify-center items-center flex" />
                                            <div className="text-center text-slate-800 text-xs font-medium font-['Inter'] leading-none">1</div>
                                        </div> */}
                                    </div>
                                )
                            })
                        }       
                        </div>
                    </div>
                    <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                        <div className="self-stretch px-2.5 justify-start items-center inline-flex">
                            <div className="text-neutral-300 text-xs font-medium font-['Inter'] uppercase leading-none tracking-wide">
                            {groupTypeAppData.scorllable[0].label}
                            </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-1 flex">
                        {
                        groupTypeAppData.scorllable.map((item: Navigation) => {
                            return (
                                <div className="pl-3 pr-2.5 py-2 rounded-lg justify-start items-center inline-flex">
                                    <div className="grow shrink basis-0 h-[18px] justify-start items-center gap-2 flex">
                                        <div className="grow shrink basis-0 text-slate-500 text-sm hover:text-primary hover:cursor-pointer">{item.name}</div>
                                    </div>
                                </div>
                            )
                        })
                        }
                        </div>
                        
                    </div>
                </div>
                <div className=" absolute bottom-5 w-full pr-5">
                    <Button className='w-full'>Create Chats</Button>
                </div>
            </div>
        </>
    )
})

export default LeftSidebar