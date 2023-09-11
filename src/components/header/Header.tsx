import { HeaderComponent, LocationHeader } from "./Header.styles";
import img_logo from "../../assets/logo.svg";
import { MapPin } from "phosphor-react";
import { Cart } from "../cart";

export function Header() {
  return (
    <>
      <HeaderComponent>
        <img src={img_logo} />
        <div>
          <LocationHeader>
            <MapPin />
            Rio de Janeiro, RJ
          </LocationHeader>
          <Cart />
        </div>
      </HeaderComponent>
    </>
  );
}
