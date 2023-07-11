import clsx from "clsx";
import React from "react";


// @ts-ignore
const Input = ({ className, ...props }) : React.JSX.Element => {
    return (
        <input
            className={clsx(
                "border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full",
                className
            )}
            {...props}
        />
    );
};

export default Input;