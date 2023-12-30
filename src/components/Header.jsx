import { HStack,Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import "../button.css";


const Header = () => {
  return (
    <HStack p={"5"} shadow={"base"} bgColor={"blackAlpha.700"} justifyContent={"space-evenly"}>
        <button>
            <Link to="/">
                <Text textTransform={"uppercase"}>
                Home
                </Text>
                </Link>
        </button>
        <button>
            <Link to="/exchanges"><Text textTransform={"uppercase"}>
                Exchanges
                </Text></Link>
        </button>
        <button>
            <Link to="/coins">
            <Text textTransform={"uppercase"}>
                Coins
                </Text>
            </Link>
        </button>
    </HStack>
  )
}

export default Header