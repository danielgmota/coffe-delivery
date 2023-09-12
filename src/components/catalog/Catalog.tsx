import { ShoppingCartSimple } from "phosphor-react";
import { Button } from "../button";
import { Card } from "../card";
import { InputNumber } from "../input-number";
import {
  CatalogContainer,
  CatalogDesc,
  CatalogFooter,
  CatalogImage,
  CatalogPrice,
  CatalogTags,
  CatalogTitle,
} from "./Catalog.styles";
import { getCoffeTypeImage } from "../../utils/coffe-type";
import { ICatalogProps } from "./Catalog.types";
import { useNavigate } from "react-router-dom";

export function Catalog({
  title,
  description,
  price,
  tags,
  coffeType,
}: ICatalogProps) {
  const navigate = useNavigate();
  return (
    <CatalogContainer>
      <Card>
        <CatalogImage>{getCoffeTypeImage(coffeType)}</CatalogImage>
        <CatalogTags>
          {tags ? tags.map((tag) => <b>{tag}</b>) : null}
        </CatalogTags>
        <CatalogTitle>{title}</CatalogTitle>
        <CatalogDesc>{description}</CatalogDesc>
        <CatalogFooter>
          <CatalogPrice>
            R$ <span>{price}</span>
          </CatalogPrice>
          <InputNumber />
          <Button variant="icon" onClick={() => navigate("/checkout")}>
            <ShoppingCartSimple />
          </Button>
        </CatalogFooter>
      </Card>
    </CatalogContainer>
  );
}
