interface TableDataProps {
    children: React.ReactNode | string;
    style?: React.CSSProperties;
    className?: string;
}
const TableData = ({children, style, className}: TableDataProps) => {
    return (
        <td style={style} className={`h-auto leading-none ${className || ''}`}>{children}</td>
    )
}

export default TableData