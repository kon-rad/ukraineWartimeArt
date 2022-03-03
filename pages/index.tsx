import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/hero';
import Collections from '../components/collections';
import Team from '../components/team';
import Roadmap from '../components/roadmap';
import SignUp from '../components/signup';

import { Box, Center, Text } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Box m={16}>
      <Hero />
      <SignUp />
      {/* <Collections />
      <Team />
      <Roadmap /> */}
    </Box>
  )
}

export default Home
