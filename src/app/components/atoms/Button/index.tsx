type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    variant: "primary" | "secondary";
    size: "small" | "medium" | "large";
    disabled?: boolean;
    className?: string;
}

const variants = {
    primary: "bg-sky-500 text-stone-50 font-bold",
    secondary: "bg-red-500 text-stone-50 font-bold"
}

const sizes = {
    small: "text-sm py-2 px-4",
    medium: "text-base py-2 px-6",
    large: "text-lg py-3 px-8"
}

const Button = ({ children, variant, size, disabled, onClick, className }: ButtonProps) => {
    return (
        <button className={`cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`} onClick={onClick} disabled={disabled}>{children}</button>
    )
}

export default Button
