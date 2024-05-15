import { memo } from "react";
import { BaseActiviyNodeProps, BaseSidebarProps } from "@/types/app";
import If from "@/components/icons/if";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from "@/components/ui/sheet";
import node from "postcss/lib/node";
import { Button } from "react-day-picker";
import { useTranslation } from "react-i18next";



const BaseSidebar = memo((props: BaseSidebarProps) => {
    const { t } = useTranslation()
    return (
        <Sheet {...props}>
            <SheetContent className="p-0 rounded-l-xl">
                <SheetHeader className="border-b-slate-100 border-b ">
                    <SheetTitle className="my-2 flex pl-5">{props.nodeProps.data.title || t(`extends.wf.nodeType.${props.nodeProps.type}`)}</SheetTitle>
                </SheetHeader>
                <div className="p-3">
                {props.children}
                </div>
                {props.footerSlot && <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>}
            </SheetContent>
        </Sheet>
    )
})


BaseSidebar.displayName = "BaseSidebar"

export default BaseSidebar