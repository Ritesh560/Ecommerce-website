import React, { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { Box, Text, Button, Table, Thead, Tbody, Tr, Th, Td, Center, Spinner } from "@chakra-ui/react"
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa"
import { useQuery, useMutation, useQueryClient } from "react-query"
import { fetchProductList, deleteProduct } from "../../../api"
import AdminNavbar from "../AdminNavbar"
import { Popconfirm } from "antd"

const AdminProducts = () => {
  const queryClient = useQueryClient()
  const { isLoading, isError, data, error } = useQuery("admin:products", fetchProductList)

  const deleteMutation = useMutation(deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries("admin:products"),
  })

  const [deleteProductId, setDeleteProductId] = useState(null)

  const onDeleteClick = (productId) => {
    setDeleteProductId(productId)
  }

  const onDeleteConfirm = () => {
    if (deleteProductId) {
      deleteMutation.mutate(deleteProductId, {
        onSuccess: () => {
          alert("Successfully removed product.")
          setDeleteProductId(null)
        },
      })
    }
  }

  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Created At",
        accessor: "createdAt",
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: ({ row }) => (
          <>
            <Link to={`/admin/products/${row.original._id}`}>
              <Button colorScheme="blue" variant="outline" size="sm" leftIcon={<FaEdit />}>
                Edit
              </Button>
            </Link>
            <Button colorScheme="red" variant="outline" size="sm" ml={2} onClick={() => onDeleteClick(row.original._id)}>
              <FaTrash />
            </Button>
          </>
        ),
      },
    ],
    [deleteMutation]
  )

  if (isLoading) {
    return (
      <Center height="100vh">
        <Spinner />
      </Center>
    )
  }

  if (isError) {
    return (
      <div>
        <AdminNavbar />
        <Text fontSize="xl" color="red.500">
          Error: {error.message}
        </Text>
      </div>
    )
  }

  return (
    <div>
      <AdminNavbar />
      <Box p={6}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Text fontSize="2xl" fontWeight="bold">
            Product Management
          </Text>
          <Link to="/admin/products/new">
            <Button colorScheme="teal" leftIcon={<FaPlus />}>
              Add New Product
            </Button>
          </Link>
        </Box>

        <Table variant="simple">
          <Thead>
            <Tr>
              {columns.map((column) => (
                <Th fontSize="14px" key={column.Header}>
                  {column.Header}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.map((row) => (
                <Tr key={row._id}>
                  {columns.map((column) =>
                    column.accessor === "actions" ? (
                      <>
                        <Link to={`/admin/products/${row._id}`}>
                          <Button colorScheme={"facebook"}>Edit</Button>
                        </Link>
                        <Popconfirm
                          title="Are you sure"
                          onConfirm={() => {
                            deleteMutation.mutate(row._id, {
                              onSuccess: () => {
                                alert("Successfully removed product.")
                              },
                            })
                          }}
                          onCancel={() => console.log("iptal edildi")}
                          okText="Yes"
                          cancelText="No"
                          placement="left"
                        >
                          <Button colorScheme={"facebook"} ml="5">
                            Delete
                          </Button>
                        </Popconfirm>
                      </>
                    ) : (
                      <Td key={column.accessor}>{row[column.accessor]}</Td>
                    )
                  )}
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Box>
    </div>
  )
}

export default AdminProducts
