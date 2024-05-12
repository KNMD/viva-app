import React, { memo } from 'react'


import styles from './ToolNavBar.module.css'
import Icon from '@/components/modules/icon'


const ToolNavBar = memo(() => {
  const onDragStart = (event, nodeType: string) => {
    console.log("event", event)
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  return (
    <div className='toolbar-nav-bar text-gray-600 text-sm'>
      <div className={styles.toolbarNavBox}>
        <div className={styles.iconWrap}>
          <Icon iconName="svg" src="/images/icon/graph/size.svg" />
          <div className={styles.iconWrap}>
            <Icon iconName="svg" src="/images/icon/graph/text.svg" />
          </div>
          <div className={styles.iconWrap}>
            <Icon iconName="svg" src="/images/icon/graph/comments.svg" />
          </div>
          <div className={styles.iconWrap} onDragStart={(event) => onDragStart(event, 'base-action')} draggable>
            <Icon iconName="svg" src="/images/icon/graph/shape.svg" />
          </div>
          <div className={styles.iconWrap}>
            <Icon iconName="svg" src="/images/icon/graph/remark.svg" />
          </div>
          <div className={styles.iconWrap}>
            <Icon iconName="svg" src="/images/icon/graph/line-edit.svg" /></div>
          <div className={styles.iconWrap}>
            <Icon iconName="svg" src="/images/icon/graph/attack.svg" /></div>
          <div className={styles.iconWrap}>

            <Icon iconName="svg" src="/images/icon/graph/settings.svg" /></div>
          <div className={styles.iconWrap}>
            <Icon iconName="svg" src="/images/icon/graph/comments.svg" /></div>
          <div className={styles.iconWrap}>
            <Icon iconName='TbMessageCircle2' />
          </div>
          <div className={styles.iconWrap}><Icon iconName="svg" src="/images/icon/graph/connection.svg" /></div>
        </div>
      </div>
    </div>
  )
})

export default ToolNavBar
