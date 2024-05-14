import { memo } from "react";
import BaseActiviyNode from "./BaseActiviyNode";
import { BaseActiviyNodeProps } from "@/types/app";
import If from "@/components/icons/if";


const IfNode = memo((node: BaseActiviyNodeProps) => {
    
    return (
        <BaseActiviyNode 
            {...node} 
            onNodeSidebar={
                <div>asdf</div>
            } 
            preIcon={
                <If className="w-5 h-5 block"/>
            }
        />
    )
})


IfNode.displayName = "IfNode"

export default IfNode