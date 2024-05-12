
import React, { CSSProperties, memo, useCallback, useEffect, useState } from 'react'
import { Handle, Node, NodeProps, OnConnect, Position, ReactFlowState, useStore } from 'reactflow';
import Textarea from "./components/BaseActivities/Textarea";
import styles from './BaseActiviyNode.module.css'
import { BaseActiviyNode, StartNode } from '@/types/app';
import Icon from '@/components/modules/icon';
import { useTranslation } from 'react-i18next';
import { PiFlagBannerLight } from 'react-icons/pi';
import { FaBullseye } from 'react-icons/fa';
import { cn } from '@/lib/utils';

const connectionNodeIdSelector = (state: ReactFlowState) => state.connectionNodeId;



const StartNode = memo((node: StartNode) => {
    const connectionNodeId = useStore(connectionNodeIdSelector);
    const isTarget = connectionNodeId && connectionNodeId !== node.id;
    const isConnecting = !!connectionNodeId
    const { t } = useTranslation()
    const [highlightWrapperLabel, setHighlightWrapperLabel] = useState<string>("")
    const [edit, setEdit] = useState<boolean>(true)
    // setEdit(true)
    const colorName = node.data?.themes?.colorName || "violet"

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
    return (
        <div className={cn('pl-6 pr-2 py-2 text-white rounded-full flex items-center space-x-3 justify-between', `bg-violet-500`)}>
            <div className='flex items-center gap-2'>
                <PiFlagBannerLight />
                <span>{t('workflow.blocks.start')}</span>
            </div>

            <div className='relative'>
                <Handle type="source" position={Position.Right} className={styles.connecting_base_node_target_handle}>
                    
                </Handle>
                <FaBullseye />
            </div>
        </div>
    )
})

StartNode.displayName = "StartNode"

export default StartNode