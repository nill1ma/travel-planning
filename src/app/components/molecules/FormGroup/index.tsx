import InputLabel from "../../atoms/InputLabel";
import Input from "../../atoms/Input";
import { InputProps } from "../../atoms/Input";
interface FormGroupProps {
    label: string;
    inputProps: InputProps;
    style?: React.CSSProperties;
    className?: string;
}
const FormGroup = ({label, style, className, inputProps}: FormGroupProps) => {
    return (
        <div style={style} className={`flex flex-col gap-2 ${className}`}>
            <InputLabel>{label}</InputLabel>
            <Input {...inputProps} />   
        </div>
    )
}

export default FormGroup