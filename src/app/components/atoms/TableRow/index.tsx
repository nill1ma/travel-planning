interface TableRowProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}
const TableRow = ({children, style, className}: TableRowProps) => {
    return (
        <tr style={style} className={className}>
            {children}
        </tr>
    )
}

export default TableRow
