import React from "react"
import { Link as ReactLink } from "react-router-dom"
import { Box, Text, Button, Center, Heading, SimpleGrid, VStack, IconButton, Stack, Flex, Spacer, Link } from "@chakra-ui/react"
import { FaPlus, FaEdit, FaList, FaShoppingCart } from "react-icons/fa"
import "../style.css"
import AdminNavbar from "../AdminNavbar"

function AdminHome() {
  return (
    <div style={{ height: "100%" }}>
      <AdminNavbar />

      <Center height="calc(100% - 62px)">
        <Box p={8} rounded="lg" boxShadow="xl" bgGradient="linear(to-r, teal.400, teal.700)" maxW="md" w="100%">
          <VStack spacing={6} align="center" color="white">
            <Heading as="h1" size="2xl">
              Admin Dashboard
            </Heading>
            <Text fontSize="lg" fontWeight="bold">
              Manage products and orders with ease.
            </Text>

            <SimpleGrid columns={2} spacing={6} width="100%">
              <Link as={ReactLink} to="/admin/products/new" _hover={{ textDecoration: "none" }}>
                <Stack align="center">
                  <IconButton icon={<FaPlus />} colorScheme="orange" aria-label="Add New Product" size="lg" />
                  <Text>Add New Product</Text>
                </Stack>
              </Link>

              <Link as={ReactLink} to="/admin/products" _hover={{ textDecoration: "none" }}>
                <Stack align="center">
                  <IconButton icon={<FaEdit />} colorScheme="blue" aria-label="Edit/Delete Products" size="lg" />
                  <Text>Edit/Delete Products</Text>
                </Stack>
              </Link>

              <Link as={ReactLink} to="/admin/orders" _hover={{ textDecoration: "none" }}>
                <Stack align="center">
                  <IconButton icon={<FaShoppingCart />} colorScheme="purple" aria-label="View Orders" size="lg" />
                  <Text>View Orders</Text>
                </Stack>
              </Link>

              <Link as={ReactLink} to="/" _hover={{ textDecoration: "none" }}>
                <Stack align="center">
                  <IconButton icon={<FaList />} colorScheme="green" aria-label="All Products" size="lg" />
                  <Text>All Products</Text>
                </Stack>
              </Link>
            </SimpleGrid>
          </VStack>
        </Box>
      </Center>

      {/* <Box mt={10}>
        <Text fontSize="2xl" p="5">
          Welcome Admin
        </Text>
        <Box ml={10}>
          You can see orders
          <Link to="/admin/orders">
            <Button ml={4} height={6}>
              Orders
            </Button>
          </Link>
        </Box>
        <Box ml={10} mt={4}>
          You can see products
          <Link to="/admin/products">
            <Button ml={4} height={6}>
              Products
            </Button>
          </Link>
        </Box>
        <Box ml={10} mt={4}>
          You can edit or delete your products
          <Link to="/admin/products">
            <Button ml={4} height={6}>
              Edit or Delete
            </Button>
          </Link>
        </Box>
        <Box ml={10} mt={4}>
          You can upload new products
          <Link to="/admin/products/new">
            <Button ml={4} height={6}>
              New Products
            </Button>
          </Link>
        </Box>
      </Box> */}
    </div>
  )
}

export default AdminHome
