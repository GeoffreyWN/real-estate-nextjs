import '../styles/globals.css'
import Head from 'next/head'
import NProgress from 'nprogress'

import Router from 'next/router'
import { ChakraProvider } from '@chakra-ui/react'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
