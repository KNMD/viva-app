import { BaseActivityData } from "@/types";
import { memo, useState } from "react";
import styles from '../../BaseActiviyNode.module.css'
import Textarea from "./Textarea";
import TablerIcon from "@/components/tabler";
import { ReactFlowState, useStore } from "reactflow";

const connectionNodeIdSelector = (state:ReactFlowState) => state.connectionNodeId;

type BaseActittiesProp = {
    data: BaseActivityData
}

const BaseActiviies: React.FC<BaseActittiesProp> = memo(({data}) => {
    const connectionNodeId = useStore(connectionNodeIdSelector);
    const isConnecting = !!connectionNodeId
    const colorName = data.themes?.colorName || "slate"
    const theme = {
        ...data.themes,
        colorName
    }
    const [edit, setEdit] = useState<boolean>(true)
    return (
        <div className={`${styles.baseActivityWrapper} ${styles['theme_border_' + colorName]} ${isConnecting && styles.baseActivityWrapperConnectting}`}>
            <div className={`${styles.baseActivity} ${styles['theme_bg_' + colorName]} `}>
                <div className={styles.nodeTitle}>
                    <div className='flex rounded justify-between'>
                        <div className='text-field cursor-text'>
                            {
                                !edit ? 
                                <div onClick={() => {setEdit(true)}}> {data.title} </div> : 
                                <Textarea themes={theme}  value={data.title} />
                            }
                        </div>
                        {
                            data.enableDebug ? 
                            <div className='px-2 text-center leading-10 align-middle'>
                                <TablerIcon iconName='TbPlayerPlayFilled' size="20" className='text-slate-400 cursor-pointer' />
                            </div>
                            : <></>
                        }
                    </div>
                </div>
                <div className='node-body'>
                {
                    data.groups.map((groups,index)=> (
                        <div className='group bg-slate-50 rounded my-2 border-1 border-slate-300 border-solid' key={index}>
                        {
                            groups.actions.map((action,index)=> (
                                <div className='action flex' key={index}>
                                    {
                                        action.preIcon ? 
                                        <div className='pre-icon w-10 m-auto ml-3'>
                                            <TablerIcon iconName={action.preIcon} size='20' className={`${styles['theme_title_' + colorName]}`} />
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
                                                <TablerIcon iconName={action.suffixIcon} size='18' />
                                            </div>
                                            : <></>
                                        }
                                        {
                                            action.enableOutput ? 
                                            <div className='handle w-5 mx-1 my-auto'>
                                                <TablerIcon iconName='TbCircleDot' size='18' />
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
    )
})

BaseActiviies.displayName = "BaseActiviies"

export default BaseActiviies