import Image from "next/future/image";
import Nav from "react-bootstrap/Nav";
import { Layout } from "../lib/components/Layout";
import logo from "../public/logo.svg";
import type { AppProps as NextAppProps } from "next/app";
import "../lib/theme.scss";

export interface AppProps {
  pages: Array<{
    id: string;
    url: string;
  }>;
}

function App({ Component, pageProps }: NextAppProps<AppProps>) {
  const { pages } = pageProps;
  return (
    <Layout
      logo={<Image src={logo} alt="Logo" />}
      nav={pages.map(({ id, url }) => (
        <Nav.Link key={id} href={url}>
          {id}
        </Nav.Link>
      ))}
    >
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
