import { ReactNode } from "react";

interface BasicButtonProps {
    children: ReactNode
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const BasicButton = ({children, onClick}: BasicButtonProps) => {
    return <button className="bg-white shadow-md" onClick={onClick}>{children}</button>
}

export default BasicButton;