type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    variant: "primary" | "secondary";
    size: "small" | "medium" | "large";
    disabled?: boolean;   
}

const variants = {
    primary: "bg-primary",
    secondary: "bg-secondary"
}

const sizes = {
    small: "text-xs py-2 px-4",
    medium: "text-sm py-2 px-6",
    large: "text-base py-3 px-8"
}

const Button = ({ children, variant, size, disabled, onClick }: ButtonProps) => {
    return (
        <button className={variants[variant] + " " + sizes[size]} onClick={onClick} disabled={disabled}>{children}</button>
    )
}

export default Button
