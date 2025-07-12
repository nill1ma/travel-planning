interface BaseListProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    variant?: "ul" | "ol";
}
const BaseList = ({children, style, className, variant}: BaseListProps) => {

    const ListVariant = {
        ul: <ul style={style} className={className}>{children}</ul>,
        ol: <ol style={style} className={className}>{children}</ol>
    }
    return (
        ListVariant[variant || "ul"]
    )
}

export default BaseList