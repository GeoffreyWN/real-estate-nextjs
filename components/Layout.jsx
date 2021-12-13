import Head from 'next/head'
import { Flex, Box, Text, Button, Avatar } from '@chakra-ui/react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title> DanMar Real Estate</title>
      </Head>

      <Box maxWidth='1280px' m='auto'>
        <header>  <Navbar/></header>
        <main>{children}</main>
        <footer></footer>
      </Box>
    </>
  )
}

export default Layout
