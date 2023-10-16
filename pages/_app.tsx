import "@app/styles/globals.css";
'use client';
//import "near-social-bridge/near-social-bridge.css";
import RootLayout from "@app/components/layout";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
       <Component {...pageProps} />
    </RootLayout>
  )
  
}
