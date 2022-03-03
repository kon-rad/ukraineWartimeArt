import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/hero';
import { Box, Center, Text } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Box m={16}>
      <Center>
        <Hero />
      </Center>
    </Box>
  )
}

export default Home
