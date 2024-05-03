import {
  memo,
  useEffect,
  useState,
} from 'react'
import { useTranslation } from 'react-i18next'
import {
  COMMAND_PRIORITY_EDITOR,
} from 'lexical'
import { mergeRegister } from '@lexical/utils'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { useSelectOrDelete } from '../../hooks'
import type { WorkflowNodesMap } from './node'
import { WorkflowVariableBlockNode } from './node'
import {
  DELETE_WORKFLOW_VARIABLE_BLOCK_COMMAND,
  UPDATE_WORKFLOW_NODES_MAP,
} from './index'
// import { Variable02 } from '@/app/components/base/icons/src/vender/solid/development'
import { TbVariable } from "react-icons/tb";
// import { VarBlockIcon } from '@/app/components/workflow/block-icon'
import { TbBlockquote } from "react-icons/tb";
// import { Line3 } from '@/app/components/base/icons/src/public/common'
import { RxSlash } from "react-icons/rx";
// import { isSystemVar } from '@/app/components/workflow/nodes/_base/components/variable/utils'
// import { AlertCircle } from '@/app/components/base/icons/src/vender/solid/alertsAndFeedback'
import { RxInfoCircled } from "react-icons/rx";
// import TooltipPlus from '@/app/components/base/tooltip-plus'

type WorkflowVariableBlockComponentProps = {
  nodeKey: string
  variables: string[]
  workflowNodesMap: WorkflowNodesMap
}

const WorkflowVariableBlockComponent = ({
  nodeKey,
  variables,
  workflowNodesMap = {},
}: WorkflowVariableBlockComponentProps) => {
  const { t } = useTranslation()
  const [editor] = useLexicalComposerContext()
  const [ref, isSelected] = useSelectOrDelete(nodeKey, DELETE_WORKFLOW_VARIABLE_BLOCK_COMMAND)
  const variablesLength = variables.length
  const lastVariable = false
  const [localWorkflowNodesMap, setLocalWorkflowNodesMap] = useState<WorkflowNodesMap>(workflowNodesMap)
  const node = localWorkflowNodesMap![variables[0]]

  useEffect(() => {
    if (!editor.hasNodes([WorkflowVariableBlockNode]))
      throw new Error('WorkflowVariableBlockPlugin: WorkflowVariableBlock not registered on editor')

    return mergeRegister(
      editor.registerCommand(
        UPDATE_WORKFLOW_NODES_MAP,
        (workflowNodesMap: WorkflowNodesMap) => {
          setLocalWorkflowNodesMap(workflowNodesMap)

          return true
        },
        COMMAND_PRIORITY_EDITOR,
      ),
    )
  }, [editor])

  const Item = (
    <div
      className={`
        mx-0.5 relative group/wrap flex items-center h-[18px] pl-0.5 pr-[3px] rounded-[5px] border
        ${isSelected ? ' border-[#84ADFF] bg-[#F5F8FF]' : ' border-black/5 bg-white'}
        ${!node && '!border-[#F04438] !bg-[#FEF3F2]'}
      `}
      ref={ref}
    >
      <div className='flex items-center'>
        {
          node?.type && (
            <div className='p-[1px]'>
              <TbBlockquote
                className='!text-gray-500'
                type={node?.type}
              />
            </div>
          )
        }
        <div className='shrink-0 mx-0.5 text-xs font-medium text-gray-500 truncate' title={node?.title} style={{
        }}>{node?.title}</div>
        <RxSlash className='mr-0.5 text-gray-300' />
      </div>
      <div className='flex items-center text-primary-600'>
        <TbVariable className='w-3.5 h-3.5' />
        <div className='shrink-0 ml-0.5 text-xs font-medium truncate' title={lastVariable}>{lastVariable}</div>
        {
          !node && (
            <RxInfoCircled className='ml-0.5 w-3 h-3 text-[#D92D20]' />
          )
        }
      </div>
    </div>
  )

  if (!node) {
    return (
      <div className='tooltip-plus'>
        {t('workflow.errorMsg.invalidVariable')}
        <span>{Item}</span>
      </div>
    )
  }

  return Item
}

export default memo(WorkflowVariableBlockComponent)
