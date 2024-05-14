
import React, { CSSProperties, memo, useCallback, useEffect, useState } from 'react'
import { Handle, Node, NodeProps, OnConnect, Position, ReactFlowState, useStore } from 'reactflow';
import Textarea from "./components/BaseActivities/Textarea";
import styles from './BaseActiviyNode.module.css'
import { NodeTheme, BaseActiviyNode } from '@/types/app';
import Icon from '@/components/modules/icon';
import { useGraphContext } from '../context';

const connectionNodeIdSelector = (state:ReactFlowState) => state.connectionNodeId;



const BaseActiviyNode = memo((node: BaseActiviyNode) => {
    const connectionNodeId = useStore(connectionNodeIdSelector);
    const isTarget = connectionNodeId && connectionNodeId !== node.id;
    const isConnecting = !!connectionNodeId

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
        if(!isConnecting) {
            setHighlightWrapperLabel("")
        }
    }, [isConnecting]);

    const readyConnectHandle = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        if(target.dataset) {
            console.log("event.target.dataset['nodeid']", target.dataset )
            setHighlightWrapperLabel(target.dataset.handleid || "")
        }
        
    }
    const abortConnectHandle = () => {
        setHighlightWrapperLabel("")
    }
    const nodeClickHandle = (node: BaseActiviyNode) => {
        console.log("e, node", node)
        const { autoLayout } = useGraphContext();
        autoLayout([], [])
    }
    
    return (
        <div className={`${styles.baseActivityNode} + " relative " + ${node.className} ${isConnecting && highlightWrapperLabel === node.id && styles.baseActivityWrapperConnectting}`} style={node.style} onClick={() => {nodeClickHandle(node)}}>
            <div className={`${styles.baseActivityWrapper} ${styles['theme_border_' + colorName]} `}>
                
                <div className={`${styles.baseActivity} ${styles['theme_bg_' + colorName]} `}>
                    <Handle
                        type="target"
                        position={Position.Left}
                        className={isConnecting ? styles.connecting_base_node_target_handle : styles.static_base_node_target_handle}
                        onMouseOver={ readyConnectHandle }
                        onMouseOut={ abortConnectHandle }
                        id={node.id}
                    />
                    <div className={styles.nodeTitle + " relative z-0"}>
                        <div className='flex rounded justify-between'>
                            <div className='text-field cursor-text'>
                                {node.data.title}
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
                        node.data.groups.map((groups,index)=> (
                            <div className={`group bg-slate-50 cursor-pointer rounded my-2 border-1 border-slate-300 border-solid relative ${isConnecting && highlightWrapperLabel === (node.id + '-' + groups.id) && styles.baseActivityWrapperConnectting}`} key={index}>
                                <Handle
                                    type="target"
                                    position={Position.Left}
                                    style={{color: '#000'}}
                                    className={isConnecting ? styles.connecting_base_node_target_handle : styles.static_base_node_target_handle}
                                    onMouseEnter={ readyConnectHandle }
                                    onMouseLeave={ abortConnectHandle }
                                    id={`${node.id}-${groups.id}`}
                                />
                            {
                                groups.actions.map((action,index)=> (
                                    <div className='action flex' key={index}>
                                        
                                        {
                                            action.preIcon ? 
                                            <div className='pre-icon w-10 m-auto ml-3'>
                                                <Icon iconName={action.preIcon} size='20' className={`${styles['theme_title_' + colorName]}`} />
                                            </div>
                                            : <></>
                                        }
                                        
                                        <div className={'body-main w-full flex justify-between ' + styles.nodeActionBorder}>
                                            <div className='grid grid-cols-1 flex-wrap overflow-hidden my-2'>
                                                <div className='flex flex-wrap text-sm font-medium'>
                                                    { action.title }
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
                                                <div className='handle w-5 mx-1 my-auto'>
                                                    <Icon iconName='TbCircleDot' size='18' />
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
                    
                    {/* <div className='group'>
                        <div className='action flex '>
                            <div className='pre-icon w-10 mx-1 my-auto'>
                                <TablerIcon iconName="TbApiApp" size='20' />
                            </div>
                            <div className={'body-main w-full flex justify-between ' + styles.nodeActionBorder}>
                                <div className='grid grid-cols-1 flex-wrap overflow-hidden my-1'>
                                    <div className='flex flex-wrap text-sm'>
                                        POST
                                    </div>
                                    <div className='text-xs text-slate-400'>
                                    https://api.openai.com/v1/completionadsdfasdfasdfasdfasdfs
                                    </div>
                                </div>
                                <div className='suffix-icon w-10 mx-1 my-auto'>
                                    <TablerIcon iconName='TbEditCircle' size='20' />
                                </div>
                                <div className='handle w-10 mx-1 my-auto'>
                                    <TablerIcon iconName='TbCircleDot' size='20' />
                                </div>
                            </div>
                        </div>
                    </div> */}
                    </div>
                </div>
                
            </div>
        </div>
    )
})

BaseActiviyNode.displayName = "BaseActiviyNode"

export default BaseActiviyNode