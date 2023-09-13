import { InputComponent, InputContainer } from "./Input.styles";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean;
  className?: string;
}

export function Input(props: IInputProps) {
  const { optional, className, ...rest } = props;

  return (
    <InputContainer className={className}>
      <InputComponent {...rest} />
      {optional ? <span>Opcional</span> : null}
    </InputContainer>
  );
}
