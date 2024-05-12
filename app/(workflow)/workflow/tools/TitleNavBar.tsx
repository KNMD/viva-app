import React from 'react'

import Icon from '@/components/modules/icon'
import { RxArrowLeft, RxDotsHorizontal } from 'react-icons/rx'
import IconConnectRed from '@/public/images/icon/graph/connect-red.svg'
import IconImagePurple from '@/public/images/icon/graph/image-purple.svg'
import IconConnectGreen from '@/public/images/icon/graph/connect-green.svg'
import IconP from '@/public/images/icon/graph/p.svg'

export default function TitleNavBar() {
  return (
    <div className='title-nav-bar text-gray-600 text-sm'>
      <div className='py-2 divide-x flex bg-white shadow-md rounded items-center'>
        <div className='back flex px-2 '>
          <RxArrowLeft />
        </div>
        <div className="title px-3 flex items-center">
          <span className='px-2'>未命名文件</span>
          <RxDotsHorizontal />
        </div>
        
        <div className='flex px-4 gap-3'>
          <Icon iconName='svg' src="/images/icon/graph/image-purple.svg" width="18" height="18" />
          <Icon iconName='svg' src="/images/icon/graph/connect-green.svg" width="18" height="18" />
          <Icon iconName='svg' src="/images/icon/graph/connect-red.svg" width="18" height="18" />
          <Icon iconName='svg' src="/images/icon/graph/p.svg" width="18" height="18" />
        {/* <div className='px-2'><IconImagePurple /></div> */}
          {/* <div className='px-2'><IconConnectGreen /></div>
          <div className='px-2'><IconConnectRed /></div>
          <div className='px-2'><IconP /></div>     */}
        </div>
      </div>
    </div>
  )
}
