import img_americano from "../assets/img/coffe-types/americano.png";
import img_arabe from "../assets/img/coffe-types/arabe.png";
import img_cafe_com_leite from "../assets/img/coffe-types/cafe-com-leite.png";
import img_cafe_gelado from "../assets/img/coffe-types/cafe-gelado.png";
import img_capuccino from "../assets/img/coffe-types/capuccino.png";
import img_chocolate_quente from "../assets/img/coffe-types/chocolate-quente.png";
import img_cubano from "../assets/img/coffe-types/cubano.png";
import img_expresso_cremoso from "../assets/img/coffe-types/expresso-cremoso.png";
import img_havaiano from "../assets/img/coffe-types/havaiano.png";
import img_irlandes from "../assets/img/coffe-types/irlandes.png";
import img_latte from "../assets/img/coffe-types/latte.png";
import img_macchiato from "../assets/img/coffe-types/macchiato.png";
import img_mochaccino from "../assets/img/coffe-types/mochaccino.png";
import img_tradicional from "../assets/img/coffe-types/tradicional.png";

export type ICoffeType =
  | "americano"
  | "arabe"
  | "cafe-com-leite"
  | "cafe-gelado"
  | "capuccino"
  | "chocolate-quente"
  | "cubano"
  | "expresso-cremoso"
  | "havaiano"
  | "irlandes"
  | "latte"
  | "macchiato"
  | "mochaccino"
  | "tradicional";

export const getCoffeTypeImage = (coffe: ICoffeType) => {
  switch (coffe) {
    case "americano":
      return <img src={img_americano} alt="americano" />;
    case "arabe":
      return <img src={img_arabe} alt="arabe" />;
    case "cafe-com-leite":
      return <img src={img_cafe_com_leite} alt="cafe com leite" />;
    case "cafe-gelado":
      return <img src={img_cafe_gelado} alt="cafe gelado" />;
    case "capuccino":
      return <img src={img_capuccino} alt="capuccino" />;
    case "chocolate-quente":
      return <img src={img_chocolate_quente} alt="chocolate quente" />;
    case "cubano":
      return <img src={img_cubano} alt="cubano" />;
    case "expresso-cremoso":
      return <img src={img_expresso_cremoso} alt="expresso cremoso" />;
    case "havaiano":
      return <img src={img_havaiano} alt="havaiano" />;
    case "irlandes":
      return <img src={img_irlandes} alt="irlandes" />;
    case "latte":
      return <img src={img_latte} alt="latte" />;
    case "macchiato":
      return <img src={img_macchiato} alt="macchiato" />;
    case "mochaccino":
      return <img src={img_mochaccino} alt="mochaccino" />;
    case "tradicional":
      return <img src={img_tradicional} alt="tradicional" />;
  }
};
