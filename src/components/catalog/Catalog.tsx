import { ShoppingCartSimple } from "phosphor-react";
import { Button } from "../button";
import { Card } from "../card";
import { InputNumber } from "../input-number";
import {
  CatalogDesc,
  CatalogFooter,
  CatalogImage,
  CatalogPrice,
  CatalogTags,
  CatalogTitle,
} from "./Catalog.styles";
import { getCoffeTypeImage, ICoffeType } from "../../utils/coffe-type";

interface ICatalogProps {
  title: string;
  description: string;
  price: string;
  tags: string[];
  coffeType: ICoffeType;
}

export function Catalog({
  title,
  description,
  price,
  tags,
  coffeType,
}: ICatalogProps) {
  return (
    <Card>
      <CatalogImage>{getCoffeTypeImage(coffeType)}</CatalogImage>
      <CatalogTags>{tags ? tags.map((tag) => <b>{tag}</b>) : null}</CatalogTags>
      <CatalogTitle>{title}</CatalogTitle>
      <CatalogDesc>{description}</CatalogDesc>
      <CatalogFooter>
        <CatalogPrice>
          R$ <span>{price}</span>
        </CatalogPrice>
        <InputNumber />
        <Button variant="icon">
          <ShoppingCartSimple />
        </Button>
      </CatalogFooter>
    </Card>
  );
}
