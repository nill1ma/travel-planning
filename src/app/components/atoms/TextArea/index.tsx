interface TextAreaProps {
    content?: string;
    style?: React.CSSProperties;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const TextArea = ({ content, style, className, onChange }: TextAreaProps) => {
    return (
        <textarea style={style} className={className} value={content} onChange={onChange} />
    );
}

export default TextArea