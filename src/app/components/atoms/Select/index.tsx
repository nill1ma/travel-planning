"use client"
interface SelectProps {
    children: React.ReactNode;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    className?: string;
    style?: React.CSSProperties;
}
const Select = ({ children, value, onChange, className, style }: SelectProps) => {
    return (
        <select value={value} onChange={onChange} className={`border rounded-md ${className}`} style={style}>
            {children}
        </select>
    )
}

export default Select
