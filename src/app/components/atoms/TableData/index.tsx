interface TableDataProps {
    children: React.ReactNode | string;
    style?: React.CSSProperties;
    className?: string;
    colSpan?: number;
}
const TableData = ({children, style, className, colSpan}: TableDataProps) => {
    return (
        <td style={style} className={`h-auto leading-none ${className || ''}`} colSpan={colSpan}>{children}</td>
    )
}

export default TableData