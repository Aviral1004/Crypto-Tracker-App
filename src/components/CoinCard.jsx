import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CoinCard = ({id,name,img,symbol,price,currencySymbol="₹"}) =>(
  
    <Link to={`/coin/${id}`} >
      <VStack w={"52"} p={"8"} borderRadius={"lg"} transition={"all 0.3s"} m={"4"} boxShadow="rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset" css={{"&:hover":{
        transform:"scale(1.1)",
        border:"5px solid teal",
      }}} >
        <Image src={img} w={"10"} h={"10"} objectFit={"contain"} alt={"Exchange"} />
        <Heading size={"md"} noOfLines={1}>{symbol}</Heading>
        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>{price? `${currencySymbol}${price}`:"NA"}</Text>
      </VStack>
    </Link> 
  
  )

export default CoinCard