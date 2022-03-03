import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Features from '../components/features';
import { Box, Center, Text } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Box m={16}>
      <Center>
        <Text fontSize="xl">Ukraine Wartime Art</Text>
      </Center>
    </Box>
  )
}

export default Home
