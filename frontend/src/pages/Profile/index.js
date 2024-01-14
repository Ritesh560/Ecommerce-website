import React from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Text, Button, Alert, AlertIcon, Box, Center, VStack, Heading, Avatar } from "@chakra-ui/react"
import { Link } from "react-router-dom"

function Profile() {
  const { user, logout, loggedIn } = useAuth()

  const handleLogout = async () => {
    logout()
  }

  return (
    <div style={{ height: "100%" }}>
      {loggedIn === false && (
        <>
          <Alert status="warning">
            <AlertIcon />
            You are not logged in. please login and try again.
          </Alert>
          <Link to="/signin">
            <Button mt={4} colorScheme="whatsapp" variant="solid">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button mt={4} ml={4} colorScheme="facebook" variant="solid">
              Register
            </Button>
          </Link>
        </>
      )}
      {loggedIn === true && (
        <>
          <Center height="100%">
            <VStack spacing={6} align="center" bg="gray.100" p={8} rounded="lg" boxShadow="lg" maxW="md" w="100%">
              <Avatar size="xl" name={user.email} mb={4} />

              <Heading as="h1" size="xl">
                Welcome
              </Heading>
              <Text fontSize="xl" fontWeight="bold" isTruncated>
                {user.email}
              </Text>

              <Box>
                <Text fontSize="lg" fontWeight={600}>
                  Role: {user.role}
                </Text>
              </Box>

              <Link to="/">
                <Button colorScheme="teal" size="md" onClick={handleLogout} _hover={{ bg: "teal.600" }}>
                  Logout
                </Button>{" "}
              </Link>
            </VStack>
          </Center>
        </>
      )}
    </div>
  )
}

export default Profile
