import { Layout } from "../../components/layout";
import { Banner } from "./components/banner";

export function Home() {
  return (
    <>
      <Layout outside={<Banner />}>
        <h3>Nossos cafes</h3>
      </Layout>
    </>
  );
}
