import BaseList from "../../atoms/BaseList"
import BaseListItem from "../../atoms/BaseListItem";
interface BaseListGroupProps<T> {
    list: T[];
    style?: React.CSSProperties;
    className?: string;
    variant?: "ul" | "ol";
}
const BaseListGroup = <T,>({list, style, className, variant}: BaseListGroupProps<T>) => {
    return (
        <BaseList variant={variant || "ul"} style={style} className={className}>
            <BaseListItem><span>Item</span></BaseListItem>
            {/* {list.map((item, index) => (
                <BaseListItem key={index}><span>{item}</span></BaseListItem>
            ))} */}
        </BaseList>
    )
}