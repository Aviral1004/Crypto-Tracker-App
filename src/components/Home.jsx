import { Box, Container, Image, Text } from '@chakra-ui/react'
import React from 'react'
import btcSrc from "../assets/btc.png";
import {motion} from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.700"} w={"full"} h={"85vh"}>
      <motion.div style={{
        height:"80vh",
      }}
      animate={{
        translateY:"20px",
        
      }}
      transition={{
        duration:1,
        repeat:Infinity,
        repeatType:"mirror",
      }}
      >
      <Image w={"full"} h={"95%"} objectFit={"contain"} src={btcSrc} filter={"grayscale(1)"} />
      </motion.div>

      <Text fontSize={"6xl"} textAlign={"center"} fontWeight={"semibold"} color={"whiteAlpha.700"} mt={"-25"}>Crypto Guide</Text>

    </Box>
  )
}

export default Home