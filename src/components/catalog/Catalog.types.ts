import { ICoffeType } from "../../utils/coffe-type";

export interface ICatalogProps {
  title: string;
  description: string;
  price: string;
  tags: string[];
  coffeType: ICoffeType;
}
