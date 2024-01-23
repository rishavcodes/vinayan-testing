'use client';
import React from 'react'
import Layout from '../components/Layout/Layout'
import '../styles/globals.css'
import { NextUIProvider } from "@nextui-org/react";

import { ThemeProvider } from "@material-tailwind/react";


function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </NextUIProvider>
  )
}

export default MyApp