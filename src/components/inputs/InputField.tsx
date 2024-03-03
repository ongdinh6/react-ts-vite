
interface InputFieldProps {
    value?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    inputRef?: React.LegacyRef<HTMLInputElement>
}

const InputField = ({ value, onChange, inputRef }: InputFieldProps) => {

    return <input ref={inputRef} value={value} onChange={onChange} />
}

export default InputField;
