import clsx from "clsx";

type IProps = {
    className?: string,
    children: any
}
const Card = ({ className, children }: IProps) => {
    return (
        <div
            className={clsx(
                "px-10 py-4 drop-shadow-xl bg-white",
                className
            )}
        >
            {children}
        </div>
    );
};

export default Card;