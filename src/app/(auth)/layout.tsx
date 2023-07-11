import '@/styles/global.css'
import GlassPane from "@/components/GlassPane";

interface IProps{
    children:any
}
const AuthRootLayout = ({children}:IProps) => {
    return (
        <html lang="en">
        <head><title></title></head>
            <body className="h-screen w-screen rainbow-mesh">
            <GlassPane className={"w-full h-full flex items-center justify-center"}>
                {children}
            </GlassPane>
            </body>
        </html>
    )
}

export default AuthRootLayout;