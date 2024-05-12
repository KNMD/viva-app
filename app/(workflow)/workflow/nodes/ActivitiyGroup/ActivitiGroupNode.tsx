import { ActivityGroupNode } from "@/types/app";
import { memo, useState } from "react";
import styles from '../BaseActiviyNode.module.css'
import { Handle, Position, ReactFlowState, useStore } from "reactflow";
import Textarea from "../components/BaseActivities/Textarea";
import Icon from "@/components/modules/icon";
const connectionNodeIdSelector = (state:ReactFlowState) => state.connectionNodeId;

const ActivityGroupNode = memo((node: ActivityGroupNode) => {
    const connectionNodeId = useStore(connectionNodeIdSelector);
    const isTarget = connectionNodeId && connectionNodeId !== node.id;
    const isConnecting = !!connectionNodeId
    
    const [edit, setEdit] = useState<boolean>(true)
    // setEdit(true)
    const colorName = node.data.themes?.colorName || "slate"
    const theme = {
        ...node.data.themes,
        colorName
    }
    const handleEnter = () => {
        console.log("!2312312312")
    }
    return (
        <div className={styles.baseActivityNode + " activityGroupNode relative" + node.className } style={node.style}>
            <Handle
                type="target"
                position={Position.Left}
                className={isConnecting ? styles.connecting_base_node_target_handle : styles.static_base_node_target_handle}
                onMouseEnter={handleEnter}
            />
            <div className={`${styles.baseActivityWrapper} ${styles['theme_border_' + colorName]} ${isConnecting && styles.baseActivityWrapperConnectting}`}>
                <div className={`${styles.baseActivity} ${styles['theme_bg_' + colorName]} `}>
                    <div className={styles.nodeTitle}>
                        <div className='flex rounded justify-between'>
                            <div className='text-field cursor-text'>
                                {
                                    !edit ? 
                                    <div onClick={() => {setEdit(true)}}> {node.data.title} </div> : 
                                    <Textarea themes={theme}  value={node.data.title} />
                                }
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
                </div>
            </div>
            <div className='activity-body'>
                
            </div>
            
            
            
        </div>
    )
})

ActivityGroupNode.displayName = "ActivityGroupNode"

export default ActivityGroupNode