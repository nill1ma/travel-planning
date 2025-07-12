interface TableProps {
    children: React.ReactNode;
    style?: React.CSSProperties;    
    className?: string;
}
const Table = ({children, style, className}: TableProps) => {
    return (
        <table style={style} className={className}>
            {children}
        </table>
    )
}

export default Table
