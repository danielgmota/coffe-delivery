import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { HeaderSections } from "../../components/header-sections";
import { Layout } from "../../components/layout";
import {
  CheckoutCard,
  CheckoutContainer,
  CheckoutItems,
} from "./Checkout.styles";
import { Card } from "../../components/card";
import { CartItem } from "../../components/cart-item";
import { Input } from "../../components/input";
import { Select } from "../../components/select/Select";
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";

export function Checkout() {
  const navigate = useNavigate();

  return (
    <Layout>
      <CheckoutContainer>
        <div>
          <h3>Complete seu pedido</h3>
          <CheckoutCard>
            <HeaderSections
              icon={<MapPinLine />}
              iconColor={"yellowDark"}
              title={"Endereço de Entrega"}
              subTitle={"Informe o endereço onde deseja receber seu pedido"}
            />
            <form>
              <div>
                <div className="cep">
                  <Input placeholder="CEP" />
                </div>
                <div className="rua">
                  <Input placeholder="Rua" />
                </div>
                <div className="numero">
                  <Input placeholder="Número" />
                </div>
                <div className="complemento">
                  <Input placeholder="Complemento" optional />
                </div>
                <div className="bairro">
                  <Input placeholder="Bairro" />
                </div>
                <div className="cidade">
                  <Input placeholder="Cidade" />
                </div>
                <div className="uf">
                  <Input placeholder="UF" />
                </div>
              </div>
            </form>
          </CheckoutCard>
          <CheckoutCard>
            <HeaderSections
              icon={<CurrencyDollar />}
              iconColor={"purple"}
              title={"Pagamento"}
              subTitle={
                "O pagamento é feito na entrega. Escolha a forma que deseja pagar"
              }
            />
            <Select
              options={[
                {
                  text: "Cartão de Crédito",
                  value: "creditCart",
                  icon: <CreditCard />,
                },
                {
                  text: "Cartão de Débido",
                  value: "debitCart",
                  icon: <Bank />,
                },
                {
                  text: "Dinheiro",
                  value: "cash",
                  icon: <Money />,
                },
              ]}
            />
          </CheckoutCard>
        </div>
        <div>
          <h3>Cafés selecionados</h3>
          <Card>
            <CheckoutItems>
              <CartItem
                title={"Cafe tradicional"}
                price={"3"}
                coffeType={"tradicional"}
              />
              <hr />
              <CartItem
                title={"Cafe americano"}
                price={"4"}
                coffeType={"americano"}
              />
              <hr />
              <div className="summary">
                <div>
                  <span>Total Itens</span>
                  <span>R$ 29</span>
                </div>
                <div>
                  <span>Entrega</span>
                  <span>R$ 2</span>
                </div>
                <div>
                  <b>Total</b>
                  <b>R$ 30</b>
                </div>
              </div>
              <Button variant="primary" onClick={() => navigate("/confirmed")}>
                CONFIRMAR PEDIDO
              </Button>
            </CheckoutItems>
          </Card>
        </div>
      </CheckoutContainer>
    </Layout>
  );
}
