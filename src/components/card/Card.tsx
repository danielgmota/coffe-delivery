import { CardContainer } from "./Card.styles";

interface ICardProps {
  children: React.ReactNode;
}

export function Card({ children }: ICardProps) {
  return <CardContainer>{children}</CardContainer>;
}
