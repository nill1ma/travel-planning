export interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    className?: string;
    size?: "small" | "medium" | "large";
    [key: string]: any;
}

const sizes = {
    small: "text-xs py-2 px-4",
    medium: "text-sm py-2 px-6",
    large: "text-base py-3 px-8"
}

const Input = ({ type, placeholder, value, onChange, disabled, className, size, ...props }: InputProps) => {
    return (
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} disabled={disabled} className={"" + className + " " + sizes[size || "medium"]} {...props} />
    )
}

export default Input