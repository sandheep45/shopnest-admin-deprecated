import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "react-aria /utils/api";

import "react-aria /styles/globals.css";
import MainLayout from "react-aria /components/Layouts/MainLayout";
import ThemeContextProvider from "react-aria /context/ThemeContextProvider";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeContextProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeContextProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
