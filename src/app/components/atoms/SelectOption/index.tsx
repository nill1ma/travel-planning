"use client"
interface SelectOptionProps {
    value: string;
    label: string;
    className?: string;
    style?: React.CSSProperties;
}
const SelectOption = ({ value, label, className, style }: SelectOptionProps) => {
    return (
        <option value={value} className={className} style={style}>{label}</option>
    )
}

export default SelectOption
