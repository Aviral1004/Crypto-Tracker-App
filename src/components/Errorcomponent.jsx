import { Heading, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import img1 from "./2.jpg"
import "../shake.css";
import "../shakev.css";

const Errorcomponent = ({message}) => {
  return (
    <VStack m={"100"} animation="shake 1s infinite">
        <Image w={"28%"} src={img1} mixBlendMode={"hidden"}/>
        <Heading textTransform={"uppercase"} color={"red.600"} boxShadow={"0px 4px 6px rgba(0,0,0,0.1)"}>{message}</Heading>
    </VStack>
  )
}

export default Errorcomponent