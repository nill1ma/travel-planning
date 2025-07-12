interface AvatarProps {
    src?: string;
    alt?: string;
    size?: "small" | "medium" | "large";
    className?: string;
    label?: string;
}
const Avatar = ({src, alt, size, label, className}: AvatarProps) => {

    const avatarLabel = label?.slice(0, 2).toUpperCase() || ""
    const avatarSize = {
        small: "w-8 h-8",
        medium: "w-12 h-12",
        large: "w-16 h-16"
    }
    return (
        <div className={`flex items-center gap-2 ${className} ${avatarSize[size || "medium"]}`}>
            {src ? <img src={src} alt={alt || ""} className="w-full h-full rounded-full" /> : <span className="text-2xl font-bold">{avatarLabel}</span>}
        </div>
    )
}

export default Avatar
