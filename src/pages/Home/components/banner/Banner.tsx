import { BannerComponent } from "./Banner.styles";
import img_banner1 from "../../../../assets/img/banner1.png";
import { Coffee, Package, ShoppingCartSimple, Timer } from "phosphor-react";

export function Banner() {
  return (
    <BannerComponent>
      <div className="leftBanner">
        <h2>Encontre o café perfeito para qualquer hora do dia</h2>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <div className="itemsBanner">
          <div className="item">
            <div className="icon" id="icon1">
              <ShoppingCartSimple />
            </div>
            <span>Compra simples e segura</span>
          </div>
          <div className="item">
            <div className="icon" id="icon2">
              <Package />
            </div>
            <span>Embalagem mantém o café intacto</span>
          </div>
          <div className="item">
            <div className="icon" id="icon3">
              <Timer />
            </div>
            <span>Entrega rápida e rastreada</span>
          </div>
          <div className="item">
            <div className="icon" id="icon4">
              <Coffee />
            </div>
            <span>O café chega fresquinho até você</span>
          </div>
        </div>
      </div>
      <img src={img_banner1} />
    </BannerComponent>
  );
}
