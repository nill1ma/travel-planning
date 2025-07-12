"use client"
import InputLabel from "../../atoms/InputLabel";
import Select from "../../atoms/Select";
import SelectOption from "../../atoms/SelectOption";

interface SelectGroupProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}
const SelectGroup = ({ label, value, onChange, className, style, children }: SelectGroupProps) => {
    return (
        <div className={`flex flex-col gap-2 ${className}`} style={style}>
            <InputLabel>{label}</InputLabel>
            <Select className={`${className}`} style={style} value={value} onChange={onChange}>
               {children}
            </Select>
        </div>
    )
}

export default SelectGroup
