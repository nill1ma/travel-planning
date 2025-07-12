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
        <div style={style} className={className}>
            <InputLabel>{label}</InputLabel>
            <Input {...inputProps} />   
        </div>
    )
}

export default FormGroup