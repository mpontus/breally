import Image from "next/future/image";
import Nav from "react-bootstrap/Nav";
import { Layout } from "../lib/components/Layout";
import logo from "../public/logo.svg";
import type { AppProps as NextAppProps } from "next/app";
import "../lib/theme.scss";
import { useMemo } from "react";
import { ApiClient } from "../lib/api";
import { AppContext } from "../lib/context";

export interface AppProps {
  pages: Array<{
    id: string;
    url: string;
  }>;
}

if (!process.env.NEXT_PUBLIC_BREALLY_API_BASE_URL) {
  throw new Error(
    `Environment variable NEXT_PUBLIC_BREALLY_API_BASE_URL must be set.`
  );
}

if (!process.env.NEXT_PUBLIC_BREALLY_API_USERNAME) {
  throw new Error(
    `Environment variable NEXT_PUBLIC_BREALLY_API_USERNAME must be set.`
  );
}

if (!process.env.NEXT_PUBLIC_BREALLY_API_PASSWORD) {
  throw new Error(
    `Environment variable NEXT_PUBLIC_BREALLY_API_PASSWORD must be set.`
  );
}

export const api = new ApiClient(process.env.NEXT_PUBLIC_BREALLY_API_BASE_URL, {
  username: process.env.NEXT_PUBLIC_BREALLY_API_USERNAME,
  password: process.env.NEXT_PUBLIC_BREALLY_API_PASSWORD,
});

function App({ Component, pageProps }: NextAppProps<AppProps>) {
  const { pages } = pageProps;
  const contextValue = useMemo<React.ContextType<typeof AppContext>>(
    () => ({ api }),
    []
  );
  return (
    <AppContext.Provider value={contextValue}>
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
    </AppContext.Provider>
  );
}

export default App;
