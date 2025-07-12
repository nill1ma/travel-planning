interface InputLabelProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}
const InputLabel = ({children, style, className}: InputLabelProps) => {
    return (
        <label style={style} className={className}>
            {children}
        </label>
    )
}

export default InputLabel
