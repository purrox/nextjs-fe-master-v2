import '@/styles/global.css'
import GlassPane from "@/components/GlassPane";
import Sidebar from "@/components/Sidebar";

interface IProps{
    children:any
}
const DashBoardLayout = ({children}:IProps) => {
    return (
        <html lang="en">
        <head><title></title></head>
        <body className="h-screen w-screen rainbow-mesh">
        <GlassPane className={"w-full h-full flex items-center"}>
            <Sidebar />
            {children}
        </GlassPane>
        </body>
        </html>
    )
}

export default DashBoardLayout;