import React from 'react'
import {Box, Image,Text} from "@chakra-ui/react"

const Home = () => {
  return (
  <Box bgColor={"pink"} w={"full"} maxH={"150vh"} > 
    <Image w={"100vw"} objectFit={"contain"} src={"https://root-nation.com/wp-content/uploads/2018/01/bitcoin.jpg"}/>
    <Text position={"absolute"} top={["50vh","25vh"]} right={["18vw","32vw"]} fontSize={["4xl","8xl"]} textAlign={"center"} color={"black"} >Analysis Platform</Text>
  </Box>
  )
}

export default Home