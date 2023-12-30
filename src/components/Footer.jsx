import { Avatar, Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend,AiFillYoutube,AiFillInstagram} from "react-icons/ai";
const Footer = () => {
  return <Box bgColor={'blackAlpha.700'} minH={"48"} px={"16"} py={["16","8"]} color={"whiteAlpha.700"}>
    <Stack direction={["column","row"]} h={"full"} alignItems={"center"}>

        <VStack w={"full"} alignItems={["center","flex-start"]}>
            <Text fontWeight={"bold"}>About Us</Text>
            <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>We are one of the best crypto trading guidance app in India and we provide guidance at very reasonable prices.</Text>
        </VStack>
        <VStack>
            <Avatar boxSize={"28"} mt={["4","0"]} />
            <Text>Our Founder</Text>
        </VStack>       
    </Stack>
  </Box>
}

export default Footer

{/*<VStack alignItems={"stretch"} w={"full"} px={"4"}>

            <Heading size={"md"} textTransform={"uppercase"} textAlign={["center","left"]}>
                Follow us to get more such updates
            </Heading>
            <HStack borderBottom={"2px solid white"} py={"2"}>
                <Input placeholder='Enter Email Here...' colorScheme='whiteAlpha.900' textTransform={"revert"} border={"0"} px={"1"} py={"0.5"} borderRadius={"20px 0 0 20px"} textAlign={"flex-start"} variant={"outline"} focusBorderColor='whiteAlpha.900'/>
                <Button
                p={"0"}
                
                colorScheme='purple'
                variant={"ghost"}
                borderRadius={"0 20px 20px 0"}>
                    <AiOutlineSend size={20} />
                </Button>
            </HStack>

        </VStack>
        <VStack w={"full"}
        borderLeft={["none","1px solid white"]}
        borderRight={["none","1px solid white"]}>
            <Heading textTransform={"uppercase"} textAlign={"center"}>VIDEOS ADDA</Heading>
            <Text>All rights received</Text>
        </VStack>
        <VStack w={"full"}>
            <Heading size={"md"} textTransform={"uppercase"}>SOCIAL MEDIA</Heading>
            <HStack p={"4"}>
            <Button size={"lg"} variant={"link"} colorScheme='white'>
                <a href='https://www.youtube.com/@SigmaaaMotivation/featured'><AiFillYoutube /> </a>
            </Button>
            <Button size={"lg"} variant={"link"} colorScheme='white'>
                <a href='https://www.instagram.com/@theonlysigma'><AiFillInstagram /></a>
            </Button>
            </HStack>
        </VStack> */}