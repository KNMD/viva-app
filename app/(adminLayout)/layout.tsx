import LeftSidebar from "@/components/modules/left-sidebar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { RocketIcon } from "@radix-ui/react-icons";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <div className={cn('pr-2 py-2 flex text-sm text-slate-500 bg-secondary bg-[url("/images/background.svg")] bg-no-repeat bg-cover')}>
                <LeftSidebar />
                <div className="w-full bg-white relative rounded-md border shadow overflow-y-auto" style={{'height': 'calc(100vh - 20px)'}}>
                    {children}
                </div>
                
                
            </div>
           
        </>
    );
}