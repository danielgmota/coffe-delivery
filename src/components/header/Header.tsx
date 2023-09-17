import { HeaderComponent, LocationHeader } from "./Header.styles";
import img_logo from "../../assets/logo.svg";
import { MapPin } from "phosphor-react";
import { Cart } from "../cart";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <HeaderComponent>
        <Link to="/">
          <img src={img_logo} />
        </Link>
        <div>
          <LocationHeader>
            <MapPin />
            Rio de Janeiro, RJ
          </LocationHeader>
          <Link to="/checkout">
            <Cart />
          </Link>
        </div>
      </HeaderComponent>
    </>
  );
}
