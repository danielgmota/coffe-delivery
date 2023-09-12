import { MapPinLine } from "phosphor-react";
import { HeaderSections } from "../../components/header-sections";
import { Layout } from "../../components/layout";
import { CheckoutCard, CheckoutContainer } from "./Checkout.styles";

export function Checkout() {
  return (
    <Layout>
      <CheckoutContainer>
        <CheckoutCard>
          <h3>Complete seu pedido</h3>
          <HeaderSections
            icon={<MapPinLine />}
            iconColor={"yellowDark"}
            title={"Endereço de Entrega"}
            subTitle={"Informe o endereço onde deseja receber seu pedido"}
          />
        </CheckoutCard>
      </CheckoutContainer>
    </Layout>
  );
}

// margin: 24px 0;
// border-bottom: 1px solid ${(props) => props.theme["base-button"]};
