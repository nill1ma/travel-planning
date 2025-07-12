type HeadingProps = {
    children: React.ReactNode;
    size: "h1" | "h2" | "h3" | "h4" | "h5";
    [key: string]: any;
}

const Heading = ({ children, size, ...props }: HeadingProps) => {
    const HeadingVariants = {
        "h1": <h1 {...props}>{children}</h1>,
        "h2": <h2 {...props}>{children}</h2>,
        "h3": <h3 {...props}>{children}</h3>,
        "h4": <h4 {...props}>{children}</h4>,
        "h5": <h5 {...props}>{children}</h5>,
        "h6": <h6 {...props}>{children}</h6>
    }
    return (
        HeadingVariants[size]
    )
}       

export default Heading