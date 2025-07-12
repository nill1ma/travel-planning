interface TableBodyProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}
const TableBody = ({children, style, className}: TableBodyProps) => {
    return (
        <tbody style={style} className={className}>
            {children}
        </tbody>
    )
}
export default TableBody