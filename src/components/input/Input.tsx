import { InputComponent, InputContainer } from "./Input.styles";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean;
}

export function Input(props: IInputProps) {
  const { optional, ...rest } = props;

  return (
    <InputContainer>
      <InputComponent {...rest} />
      {optional ? <span>Opcional</span> : null}
    </InputContainer>
  );
}
