import React, { useEffect, useState } from 'react'
import axios from "axios";
import {server} from "../index";
import { Container, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';
import Loader from './Loader';
import Errorcomponent from "./Errorcomponent.jsx";

const Exchanges = () => {

  const [exchanges,setExchanges] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);



  useEffect(() => {

    const fetchExchanges = async()=>{
      try {
        const {data} = await axios.get(`${server}/exchanges`)
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchExchanges();
  }, [])
  
  if(error) return  <Errorcomponent message={"Error While Fetching Exchanges"} />

  return (
    <Container maxW={"container.xl"}>
      {loading ? <Loader /> : <>
      
      <HStack wrap={"wrap"} justifyContent={"space-evenly"}>

        {
          exchanges.map((i)=>(
            <ExchangeCard key={i.id} name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url} />
          ))
        }

      </HStack>
      
      </>}
    </Container>
  )
}

const ExchangeCard = ({name,img,rank,url}) =>(
  
  <a href={url} target={"_blank"} rel="noreferrer">
    <VStack w={"52"} p={"8"} borderRadius={"lg"} transition={"all 0.3s"} m={"4"} boxShadow="rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset" css={{"&:hover":{
      transform:"scale(1.1)",
      border:"5px solid teal",
    }}} >
      <Image src={img} w={"10"} h={"10"} objectFit={"contain"} alt={"Exchange"} />
      <Heading size={"md"} noOfLines={1}>{rank}</Heading>
      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>

)

export default Exchanges