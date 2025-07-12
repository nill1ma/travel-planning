interface TableDataProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}
const TableData = ({children, style, className}: TableDataProps) => {
    return (
        <td style={style} className={className}>{children}</td>
    )
}

export default TableData