import { Header } from "../header";
import { Main } from "./Layout.styles";
interface ILayoutProps {
  children: React.ReactNode;
}

export function Layout(props: ILayoutProps) {
  return (
    <>
      <Header />
      <Main>{props.children}</Main>
    </>
  );
}
