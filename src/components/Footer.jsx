import React from 'react'
import { Flex, Text, Image, Box } from '@chakra-ui/react'
import logo from '../assets/openai.png'

const Footer = () => {
  return (
    <Box marginTop={50}>
      <Flex justifyContent={'center'} alignItems={'center'}>
        <Image src={logo} marginRight={1}/>
        <Text>
          Powered By Open Ai
        </Text>
      </Flex>
    </Box>
  )
}

export default Footer
