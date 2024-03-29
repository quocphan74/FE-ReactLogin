import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Text
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
  import { StarIcon} from '@chakra-ui/icons'
  


  

  
 
  // interface RatingProps {
  //   rating: number;
  //   numReviews: number;
  // }
  
  // function Rating({ rating, numReviews }: RatingProps) {
  //   return (
  //     <Box d="flex" alignItems="center">
  //       {Array(5)
  //         .fill('')
  //         .map((_, i) => {
  //           const roundedRating = Math.round(rating * 2) / 2;
  //           if (roundedRating - i >= 1) {
  //             return (
  //               <BsStarFill
  //                 key={i}
  //                 style={{ marginLeft: '1' }}
  //                 color={i < rating ? 'teal.500' : 'gray.300'}
  //               />
  //             );
  //           }
  //           if (roundedRating - i === 0.5) {
  //             return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
  //           }
  //           return <BsStar key={i} style={{ marginLeft: '1' }} />;
  //         })}
  //       <Box as="span" ml="2" color="gray.600" fontSize="sm">
  //         {numReviews} review{numReviews > 1 && 's'}
  //       </Box>
  //     </Box>
  //   );
  // }
  
  function ProductAddToCart() {
    const [Api,setApi] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=4')
        .then(res =>res.json())
        .then(Api => {
            setApi(Api);
        })
    },[])
     
   
   
    return (
      <Flex p={40} w="100" d='flex' alignItems="center" justifyContent="space-around" >
         {Api.map(api=>(
       <Flex d='flex' p={2}   key={api.id}>
         
        <Box
        width='200'
     
          // bg={useColorModeValue('white', 'gray.800')}
          bg='blue.100'
          maxW="120"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
         
          position="relative">
          { (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}
  
          <Image
           height='150'
           width='full'
            src={api.image}
            alt={`Picture of ${api.title}`}
            roundedTop="lg"
           
          />
   
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              { (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {api.name}
              </Box>
              <Tooltip
                label="Book Now"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                <chakra.a href={'#'} display={'flex'}>
                  <Text>Book Now</Text>
                  {/* <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} /> */}
                </chakra.a>
              </Tooltip>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              {/* <Rating rating={data.rating} numReviews={data.numReviews} /> */}
             <div>
               {/* {
                function rate() {
                  
                    const rate=api.rating.rate-api.rating.rate%1;
                    for(var i=0;i<rate;i++){
                      console.log('haha');
                    }
                   
                }
               
               } */}
              {/* <StarIcon></StarIcon> <a>{api.rating.rate-api.rating.rate%1}</a> */}

             </div>
              
              
             
              <Box fontSize="2xl" >
                <Box as="span" color={'gray.600'} fontSize="lg">
                  £
                </Box>
                {/* {api.price.toFixed(2)} */}
              </Box>
            </Flex>
          </Box>
        </Box>
        </Flex>  ))}
      </Flex>
    );
  }
  
  export default ProductAddToCart;
