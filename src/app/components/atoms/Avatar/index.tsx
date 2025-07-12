interface AvatarProps {
    src?: string;
    alt?: string;
    size?: "small" | "medium" | "large";
    className?: string;
    label?: string;
}
const Avatar = ({src, alt, size, label, className}: AvatarProps) => {

    const splitedLabel = label?.split(" ") || []    
    console.log(splitedLabel, "  length lablel")
    const avatarLabel = splitedLabel.length > 1 ? `${splitedLabel[0].slice(0, 1).toUpperCase()} ${splitedLabel[1].slice(0, 1).toUpperCase()}` : splitedLabel.slice(0, 2).join(" ").toUpperCase() || ""
    const avatarSize = {
        small: "w-8 h-8",
        medium: "w-12 h-12",
        large: "w-16 h-16"
    }
    console.log(avatarLabel, "avatarLabel")
    return (
        <div className={`flex justify-center items-center gap-2 rounded-full backdrop-opacity-50 bg-stone-300 ${className} ${avatarSize[size || "medium"]}`}>
            {src ? <img src={src} alt={alt || ""} className="w-full h-full rounded-full" /> : <span className="text-2xl font-bold">{avatarLabel}</span>}
        </div>
    )
}

export default Avatar
