import { memo } from "react";
import BaseActiviyNode from "./BaseActiviyNode";
import { BaseActiviyNodeProps } from "@/types/app";
import If from "@/components/icons/if";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { RxCaretDown, RxCaretUp, RxCross2, RxTriangleDown } from "react-icons/rx";
import ConditionStart from "@/components/icons/condition-start";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const computed = [{
    "symbol": "=",
}, {
    "symbol": ">"
}, {
    "symbol": "<"
}, {
    "symbol": ">="
}, {
    "symbol": "<="
}, {
    "symbol": "Starts with"
}, {
    "symbol": "Ends with"
}, {
    "symbol": "Contains"
}, {
    "symbol": "Not Contains"
}, {
    "symbol": "Empty",
    "diabledInput": true
}, {
    "symbol": "Not Empty",
    "diabledInput": true
}]
const sysVars = ["session_id", "user_id", "current_timestamp", "locale", "last_response", "user_query", "chat_history"]

const IfNode = memo((node: BaseActiviyNodeProps) => {

    const { t } = useTranslation()
    return (
        <BaseActiviyNode
            {...node}
            onNodeSidebar={
                <div className="flex flex-col gap-2">
                    {
                        node.data.groups[0].actions.map((action) =>
                            <Collapsible
                                open={action.params?.open}
                                onOpenChange={(state) => {
                                    if (action.params) {
                                        action.params.open = state;
                                    }
                                }}
                            >
                                <div className="flex items-center justify-between space-x-2">
                                    <Input value={action.params?.name} />
                                    <CollapsibleTrigger asChild>
                                        <Button variant="ghost" size="sm">
                                            {!!action.params?.open ? <RxCaretUp /> : <RxCaretDown />}
                                            <span className="sr-only">Toggle</span>
                                        </Button>
                                    </CollapsibleTrigger>
                                </div>
                                <CollapsibleContent className="space-y-2">
                                    {
                                        action.params?.conditions.map(((condition, idx) =>
                                            condition.type === 'pattern' &&
                                            <div className=" flex gap-2 my-3">
                                                <div className={cn("w-[130px] h-[45px] bg-no-repeat bg-cover flex items-center justify-center mr-1 text-slate-500", idx === 0 ? "bg-[url('/images/icon/graph/condition-start.svg')]" : "bg-[url('/images/icon/graph/condition-end.svg')]")}>
                                                    {
                                                        idx === 0 ?
                                                            <div>IF</div> : (

                                                                <DropdownMenu>
                                                                    <DropdownMenuTrigger asChild>
                                                                        <div className="flex items-center"><span>{action.params?.logic} </span><RxTriangleDown /></div>
                                                                    </DropdownMenuTrigger>
                                                                    <DropdownMenuContent className="w-[130px]">
                                                                        <DropdownMenuCheckboxItem>AND</DropdownMenuCheckboxItem>
                                                                        <DropdownMenuCheckboxItem>OR</DropdownMenuCheckboxItem>
                                                                    </DropdownMenuContent>
                                                                </DropdownMenu>
                                                            )
                                                    }
                                                </div>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <div className=" border hover:border-primary border-slate-200 rounded-sm  flex items-center p-2 text-slate-500 justify-between text-sm w-full shadow">
                                                            <div className=" gap-2 flex">
                                                                <span>{condition.expression.left.value}</span>
                                                                <span className=" text-black font-bold">{condition.expression.computed}</span>
                                                                <span>{condition.expression.right.value}</span>
                                                            </div>

                                                            <RxCross2 />
                                                        </div>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent className="w-[260px]">
                                                        <div className="p-3 flex flex-col gap-2">
                                                            <Label htmlFor="variable">{t('extends.wf.expression')}</Label>
                                                            <Select>
                                                                <SelectTrigger className="w-full">
                                                                    <SelectValue placeholder={t('extends.wf.variable')} />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                {
                                                                    sysVars.map(item => 
                                                                        <SelectItem value={item}>{item}</SelectItem>)
                                                                }
                                                                </SelectContent>
                                                            </Select>

                                                            <Select defaultValue="=">
                                                                <SelectTrigger className="w-[100px]">
                                                                    <SelectValue />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                {
                                                                    computed.map(item => 
                                                                        <SelectItem value={item.symbol}>{item.symbol}</SelectItem>)
                                                                }
                                                                
                                                                </SelectContent>
                                                            </Select>

                                                            <Input />
                                                        </div>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>

                                            </div>
                                        ))

                                    }



                                    <Button className="my-2" variant="outline">{t('extends.wf.addCondition')}</Button>


                                </CollapsibleContent>
                            </Collapsible>
                        )
                    }
                    <div>

                    </div>
                </div>
            }
            preIcon={
                <If className="w-5 h-5 block" />
            }
        />
    )
})


IfNode.displayName = "IfNode"

export default IfNode