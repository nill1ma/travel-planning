interface TableHeaderProps {
    children: React.ReactNode;
    style?: React.CSSProperties;    
    className?: string;
}
const TableHeader = ({children, style, className}: TableHeaderProps) => {
    return (
        <thead style={style} className={className}>
            {children}
        </thead>
    )
}

export default TableHeader
