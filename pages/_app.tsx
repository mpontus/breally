import type { AppProps as NextAppProps } from "next/app";
import "../lib/theme.scss";
import { useMemo } from "react";
import { ApiClient } from "../lib/api";
import { AppContext } from "../lib/context";

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

function App({ Component, pageProps }: NextAppProps) {
  const contextValue = useMemo<React.ContextType<typeof AppContext>>(
    () => ({ api }),
    []
  );

  return (
    <AppContext.Provider value={contextValue}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default App;
