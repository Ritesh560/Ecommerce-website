import React from "react"
import { Card, Text, Image, Stack, Heading, CardBody, CardFooter, Divider, ButtonGroup, Button, Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useBasket } from "../../contexts/BasketContext"

function Cards({ item, basket }) {
  const { addToBasket, items } = useBasket()

  const findBasketItem = items.find((basket_item) => basket_item._id === item._id)

  return (
    <Card maxW="sm" w={basket ? "280px" : "100%"}>
      <Link to={`/product/${item._id}`}>
        <CardBody>
          <Image src={item.photos[0]} alt="Product" borderRadius="lg" loading="lazy" boxSize={basket ? 250 : 300} objectFit="cover" />
          <Stack mt="4" spacing="2">
            <Heading size="md">{item.title}</Heading>
            <Text noOfLines={2}>{item.description}</Text>
          </Stack>
        </CardBody>
      </Link>
      <CardFooter mt="-4">
        <Flex w={"100%"} justify={"space-between"} align={"center"}>
          <Text color="black.600" fontWeight={"600"} fontSize="2xl">
            {item.price}$
          </Text>
          <Button variant="solid" colorScheme={findBasketItem ? "red" : "whatsapp"} onClick={() => addToBasket(item, findBasketItem)}>
            {findBasketItem ? `Remove${basket ? "" : " from Basket"}` : "Add to Basket"}
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  )
}

export default Cards
