import { Header } from "../header";
import { Article, Main } from "./Layout.styles";
interface ILayoutProps {
  children: React.ReactNode;
  outside?: React.ReactNode;
}

export function Layout(props: ILayoutProps) {
  return (
    <>
      <Header />
      <Main>
        {props.outside}
        <Article>{props.children}</Article>
      </Main>
    </>
  );
}
