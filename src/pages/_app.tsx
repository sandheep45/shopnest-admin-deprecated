import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "@src/utils/api";

import "@src/styles/globals.css";
import MainLayout from "@src/components/Layouts/MainLayout";
import ThemeContextProvider from "@src/context/ThemeContextProvider";
import { useRouter } from "next/router";

function cleanUrl(url: string): string {
  const regex = /^([^?]+)/;
  const match: RegExpMatchArray | null = url.match(regex);
  if (match) {
    return match[1] || url;
  } else {
    return url; // return the original URL if no match is found
  }
}

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();
  const pathToExclude = ["/signin"];
  return (
    <SessionProvider session={session}>
      <ThemeContextProvider>
        {pathToExclude.includes(cleanUrl(router.asPath)) ? (
          <Component {...pageProps} />
        ) : (
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        )}
      </ThemeContextProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
