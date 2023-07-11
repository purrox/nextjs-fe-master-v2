import clsx from "clsx";

interface IProps{
    children:any,
    className: string
}
const GlassPane = ({children, className}: IProps) => {

    return <div className={clsx('glass border-solid border-2 border-gray-200', className) }>
        {children}
    </div>
}

export default GlassPane;