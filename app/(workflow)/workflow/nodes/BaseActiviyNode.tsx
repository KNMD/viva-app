"use client"
import React, { CSSProperties, memo, useCallback, useEffect, useState } from 'react'
import { Handle, Node, NodeProps, OnConnect, Position, ReactFlowState, useStore } from 'reactflow';
import Textarea from "./components/BaseActivities/Textarea";
import styles from './BaseActiviyNode.module.css'
import { NodeTheme, BaseActiviyNodeProps } from '@/types/app';
import Icon from '@/components/modules/icon';
import { useGraphContext } from '../context';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { FaBullseye } from 'react-icons/fa';
import BaseSidebar from '../sidebar/BaseSidebar';
import { useTranslation } from 'react-i18next';

const connectionNodeIdSelector = (state: ReactFlowState) => state.connectionNodeId;



const BaseActiviyNode = ((node: BaseActiviyNodeProps) => {
    const connectionNodeId = useStore(connectionNodeIdSelector);
    const {t} = useTranslation()
    const [open, setOpen] = useState(false)
    const isTarget = connectionNodeId && connectionNodeId !== node.id;
    const isConnecting = !!connectionNodeId
    const { onSideBar } = useGraphContext();
    const [highlightWrapperLabel, setHighlightWrapperLabel] = useState<string>("")
    const [edit, setEdit] = useState<boolean>(true)
    // setEdit(true)
    const colorName = node.data.themes?.colorName || "slate"
    const theme = {
        ...node.data.themes,
        colorName
    }
    useEffect(() => {
        console.log("isConnect: ", isConnecting)
        if (!isConnecting) {
            setHighlightWrapperLabel("")
        }
    }, [isConnecting]);

    const readyConnectHandle = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        if (target.dataset) {
            console.log("event.target.dataset['nodeid']", target.dataset)
            setHighlightWrapperLabel(target.dataset.handleid || "")
        }

    }
    const abortConnectHandle = () => {
        setHighlightWrapperLabel("")
    }
    const nodeClickHandle = (node: BaseActiviyNodeProps) => {
        console.log("e, node", node)
        setOpen(true)
    }


    return (
        <div className={`${styles.baseActivityNode} + " relative " + ${node.className} ${isConnecting && highlightWrapperLabel === node.id && styles.baseActivityWrapperConnectting}`} style={node.style}>
            <div className={`${styles.baseActivityWrapper} ${styles['theme_border_' + colorName]} `} onClick={() => { nodeClickHandle(node) }}>

                <div className={`${styles.baseActivity} ${styles['theme_bg_' + colorName]} `}>
                    <Handle
                        type="target"
                        position={Position.Left}
                        className={isConnecting ? styles.connecting_base_node_target_handle : styles.static_base_node_target_handle}
                        onMouseOver={readyConnectHandle}
                        onMouseOut={abortConnectHandle}
                        id={node.id}
                    />
                    <div className={styles.nodeTitle + " relative z-0"}>
                        <div className='flex rounded justify-between'>
                            <div className='text-field cursor-text'>
                                {node.data.title || t(`extends.wf.nodeType.${node.type}`)}
                            </div>
                            {
                                node.data.enableDebug ?
                                    <div className='px-2 text-center leading-10 align-middle'>
                                        <Icon iconName='TbPlayerPlayFilled' size="20" className='text-slate-400 cursor-pointer' />
                                    </div>
                                    : <></>
                            }
                        </div>
                    </div>
                    <div className='node-body relative z-20'>

                        {
                            node.data.groups.map((groups, index) => (
                                <div className={`group bg-slate-50 cursor-pointer rounded my-2 border-1 border-slate-300 border-solid relative ${isConnecting && highlightWrapperLabel === (node.id + '-' + groups.id) && styles.baseActivityWrapperConnectting}`} key={index}>
                                    <Handle
                                        type="target"
                                        position={Position.Left}
                                        style={{ color: '#000' }}
                                        className={isConnecting ? styles.connecting_base_node_target_handle : styles.static_base_node_target_handle}
                                        onMouseEnter={readyConnectHandle}
                                        onMouseLeave={abortConnectHandle}
                                        id={`${node.id}-${groups.id}`}
                                    />
                                    {
                                        groups.actions.map((action, index) => (
                                            <div className='action flex items-center' key={index}>
                                                <div className='pre-icon w-10  ml-3'>
                                                    {
                                                        action.preIcon ?

                                                            <Icon iconName={action.preIcon} size='20' className={`${styles['theme_title_' + colorName]}`} />

                                                            : (node.preIcon ? node.preIcon : <></>)
                                                    }
                                                </div>

                                                <div className={'body-main w-full flex justify-between ' + styles.nodeActionBorder}>
                                                    <div className='grid grid-cols-1 flex-wrap overflow-hidden my-2'>
                                                        <div className='flex flex-wrap text-sm font-medium'>
                                                            {action.title}
                                                        </div>
                                                        {
                                                            action.subTitle ?
                                                                <div className='text-xs text-slate-400'>{action.subTitle}</div>
                                                                : <></>
                                                        }
                                                    </div>
                                                    <div className='actions flex justify-between'>
                                                        {
                                                            action.suffixIcon ?
                                                                <div className='suffix-icon w-5 mx-1 my-auto'>
                                                                    <Icon iconName={action.suffixIcon} size='18' />
                                                                </div>
                                                                : <></>
                                                        }
                                                        {
                                                            action.enableOutput ?

                                                                <div className='relative handle w-5 mx-1 my-auto'>
                                                                    <Handle type="source" position={Position.Right} className={styles.connecting_base_node_target_handle} id={`${node.id}-${groups.id}-${action.id}`}>

                                                                    </Handle>
                                                                    <FaBullseye />
                                                                </div>
                                                                : <></>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }

                    </div>
                </div>

            </div>
            {node.onNodeSidebar && 
            <BaseSidebar open={open} onOpenChange={setOpen} nodeProps={node}>
                {node.onNodeSidebar}
            </BaseSidebar>}
        </div>
    )
})

BaseActiviyNode.displayName = "BaseActiviyNode"

export default BaseActiviyNode