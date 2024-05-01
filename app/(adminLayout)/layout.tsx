import LeftSidebar from "@/components/modules/left-sidebar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { RocketIcon } from "@radix-ui/react-icons";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="pr-2 py-2 bg-gray-50 flex relative">
                <LeftSidebar />
                <Card className="w-full">{children}</Card>
                <div className="main-background absolute top-1/2 left-1/2 w-1/2 h-1/2 blur-3xl opacity-20">
                    <div className="w-1/2 h-1/2 left-0 top-0 absolute bg-indigo-600 bg-opacity-70 rounded-full blur-3xl" />
                    {/* <div className="relative opacity-20 blur-3xl"> */}
                        {/* <div className="w-96 h-96 left-0 top-0 absolute bg-blue-500 rounded-full" />
                        <div className="w-96 h-96 left-0 top-0 absolute bg-blue-600 rounded-full" />
                        <div className="w-96 h-96 left-[-435.20px] top-[-416.82px] absolute bg-indigo-600 bg-opacity-70 rounded-full blur-3xl" />
                        <div className="w-96 h-96 left-[829.01px] top-[182.15px] absolute mix-blend-overlay bg-rose-500 rounded-full blur-3xl" />
                        <div className="w-96 h-96 left-[-206.08px] top-[246.40px] absolute mix-blend-overlay bg-orange-600 rounded-full blur-3xl" /> */}
                    {/* </div> */}
                </div>
            </div>
        </>
    );
}