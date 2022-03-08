import type { NextPage } from 'next'
import Hero from '../components/hero';
import Collections from '../components/collections';
import Team from '../components/team';
import SignUp from '../components/signup';

import { Box, Center, Text } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Box m={16}>
      <Hero />
      <Collections />
      <SignUp />
      <Team />
    </Box>
  )
}

export default Home
