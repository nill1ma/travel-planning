interface BaseListItemProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    onClick?: () => void;
}
const BaseListItem = ({children, style, className, onClick}: BaseListItemProps) => {
    return (
        <li style={style} className={className} onClick={onClick}>
            {children}
        </li>
    )
}

export default BaseListItem