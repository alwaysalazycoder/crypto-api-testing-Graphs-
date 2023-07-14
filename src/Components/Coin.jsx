import { Heading, Image, Text, HStack, VStack } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import ErrorComponent from './ErrorComponent';
import Loader from './Loader';

const Coin = () => {

  const [coinArray, setCoinArray] = useState([]);
  const [errorFlag, setErrorFlag] = useState(false);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en");
        console.log(data);
        setCoinArray(data);
        setLoading(false);
      }
      catch (error) {
        setErrorFlag(true)
        console.log("Error", error)
      }
    }
    fetchData();


  }, [])

  if (errorFlag) return <ErrorComponent />

  return (


      <HStack minH={"100vh"} maxW={"100vw"} p={["0 10px 0 10px", "0 200px 0 200px"]} minW={"90vw"} wrap={"wrap"} m={"0"} alignItems={"center"} justifyContent={"center"} >
      {loading ? (<Loader />) : (
        <>

            {coinArray.map((i) => (
              <HStack>
                <Link to={`/coin/${i.name}`}>
                  <VStack h={["190px", "250px"]} w={"145px"} bgColor={"smoke"} shadow={"md"} m={["2", "7"]} alignItems={"center"} justifyContent={"center"} borderRadius={"10px"} transition={"ease-in 0.31s"}

                    css={{
                      "display": "flex",
                      "flexWrap": "wrap-reverse",
                      // "width":"10vw",
                      "&:hover": {
                        transform: "scale(1.03)",
                        backgroundColor: "salmon",
                        fontFamily: "cursive"

                      },
                    }}>

                    <Text fontSize={"15px"} noOfLines={"1"}>{i.name}</Text>
                    <Image src={i.image} alt='Coin image' h={["5vh", "10vh"]} objectFit={"contain"} />
                    <Heading fontSize={"22px"} textTransform="uppercase">{i.symbol}</Heading>
                    <Text>
                      {"₹ "}{i.current_price}
                    </Text>
                  </VStack>
                </Link>
              </HStack>

            ))}


        </>
      )}
      </HStack>
      


    
  )
}

export default Coin