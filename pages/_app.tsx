"use client";
import "@app/styles/globals.css";
import "near-social-bridge/near-social-bridge.css";
import { useAuth } from "near-social-bridge";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import RootLayout from "@app/components/layout";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
    )
    
  
}
