import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Alert, Image, AlertIcon, Button, Box, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, useDisclosure, Textarea, Grid } from "@chakra-ui/react"
import { useBasket } from "../../contexts/BasketContext"
import { postOrder } from "../../api.js"
import Cards from "../../components/Card/index.js"

function Basket() {
  const [address, setAddress] = useState()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef(null)

  const { items, removeFromBasket, emptyBasket } = useBasket()
  const total = items.reduce((acc, obj) => acc + obj.price, 0)

  const handleSubmitForm = async () => {
    const itemIds = items.map((item) => item._id)
    const input = {
      address,
      items: JSON.stringify(itemIds),
    }

    await postOrder(input)

    emptyBasket()
    onClose()
  }

  return (
    <Box p="5">
      {items.length < 1 && (
        <Alert status="warning" borderRadius={"10px"}>
          <AlertIcon />
          Your basket is empty.
        </Alert>
      )}
      {items.length > 0 && (
        <>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={4}
          >
            {items.map((item, i) => (
              <Box w="100%" key={item._id}>
                <Cards item={item} basket={true} />
              </Box>
            ))}
          </Grid>

          <Box mt="10">
            <Text fontSize="22">Total: {total}$</Text>
          </Box>

          <Button onClick={onOpen} colorScheme="whatsapp" mt={4}>
            Buy now
          </Button>

          <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Enter your delivery address</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Adress</FormLabel>
                  <Textarea ref={initialRef} placeholder="Adress" value={address} onChange={(e) => setAddress(e.target.value)} />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleSubmitForm}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
    </Box>
  )
}

export default Basket
