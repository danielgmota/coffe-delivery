import { ButtonComponent } from "./Button.styles";
import { ButtonVariant } from "./Button.types";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button(props: IButtonProps) {
  const { variant, children, ...rest } = props;
  return (
    <ButtonComponent variant={variant ?? "primary"} {...rest}>
      {children}
    </ButtonComponent>
  );
}
