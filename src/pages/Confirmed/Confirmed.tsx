import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Layout } from "../../components/layout";
import { CardConfirmed, ConfirmedContainer } from "./Confirmed.styles";
import confirmed from "../../assets/confirmed.svg";

export function Confirmed() {
  return (
    <Layout>
      <ConfirmedContainer>
        <div>
          <h3>Uhu! Pedido confirmado</h3>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>
        <div>
          <CardConfirmed>
            <div className="card__item">
              <div className="card__item_icon card__item_icon_1">
                <MapPin />
              </div>
              <p>
                Entrega em <b>Rua Lorem impsum, 102</b>
                <br />
                Farrapos - Rio de Janeiro, RJ
              </p>
            </div>
            <div className="card__item">
              <div className="card__item_icon card__item_icon_2">
                <Timer />
              </div>
              <p>
                Previsão de entrega
                <br />
                <b>20 min - 30 min</b>
              </p>
            </div>
            <div className="card__item">
              <div className="card__item_icon card__item_icon_3">
                <CurrencyDollar />
              </div>
              <p>
                Pagamento na entrega
                <br />
                <b>Cartão de Crédito</b>
              </p>
            </div>
          </CardConfirmed>
          <img src={confirmed} />
        </div>
      </ConfirmedContainer>
    </Layout>
  );
}
