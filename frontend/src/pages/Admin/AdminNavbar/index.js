import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react"
import { Link as ReactLink } from "react-router-dom"

const AdminNavbar = () => {
  return (
    <Box bg="teal.500" p={4} boxShadow="md" borderRadius="10px">
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold" color="white">
          Admin Panel
        </Text>
        <Spacer />

        <nav>
          <ul className="admin-menu">
            <li>
              <Link as={ReactLink} to="/admin" color="white" _hover={{ textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li>
              <Link as={ReactLink} to="/admin/orders" color="white" _hover={{ textDecoration: "none" }}>
                Orders
              </Link>
            </li>
            <li>
              <Link as={ReactLink} to="/admin/products" color="white" _hover={{ textDecoration: "none" }}>
                Products
              </Link>
            </li>
          </ul>
        </nav>
      </Flex>
    </Box>
  )
}

export default AdminNavbar
