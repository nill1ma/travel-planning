type BadgeProps = {
    children: React.ReactNode;
    variant: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    [key: string]: any;
}

const variants = {
    "primary": "bg-sky-500 text-white",
    "secondary": "bg-gray-500 text-white",
    "success": "bg-green-500 text-white",
    "danger": "bg-red-500 text-white",
    "warning": "bg-yellow-500 text-white",
    "info": "bg-blue-500 text-white",
    "light": "bg-gray-500 text-white",
    "dark": "bg-gray-500 text-white"
}

const Badge = ({ children, variant, ...props }: BadgeProps) => {
    return (
        <div {...props} className={`rounded-full flex items-center justify-center ${variants[variant]}`}>{children}</div>
    )
}

export default Badge
