import { ButtonIcon, ButtonPrimary, ButtonSecoundary } from "./Button.styles";
import { TButtonVariant } from "./Button.types";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: TButtonVariant;
}

export function Button(props: IButtonProps) {
  const { variant, children, ...rest } = props;

  return (
    <>
      {variant === "primary" ? (
        <ButtonPrimary {...rest}>{children}</ButtonPrimary>
      ) : variant === "secondary" ? (
        <ButtonSecoundary {...rest}>{children}</ButtonSecoundary>
      ) : variant === "icon" ? (
        <ButtonIcon {...rest}>{children}</ButtonIcon>
      ) : null}
    </>
  );
}
