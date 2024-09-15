import { Box } from '@mui/material';
import { DataGrid, GridActionsCellItem, GridToolbar } from '@mui/x-data-grid';
import React from 'react'
import useStockCall from '../../hooks/useStockCall';
import { useSelector } from 'react-redux';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { btnStyle } from '../../styles/globalStyle';

function getRowId(row) {
  return row._id;
}

const SalesTable = ({handleOpen, setInitialState}) => {

  const {deleteStockData} = useStockCall()

  const {sales} = useSelector(state=>state.stock)

  const columns = [
    {
      field: "createdAt",
      headerName: "Date",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return new Date(row.createdAt).toLocaleString("de-DE");
      },
    },
    {
      field: "brandId",
      headerName: "Brand",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return row?.brandId?.name ?? "-No Brand-";
      },
    },
    {
      field: "productID",
      headerName: "Product",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return row?.productId?.name ?? "-No Product-";
      },
    },
    {
      field: "quantity",
      headerName: "Quantity",
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "amount",
      headerName: "Amount",
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 40,
      headerAlign: "center",
      align: "center",
      renderCell: ({
        row: { brandId, productId, quantity, price, _id },
      }) => {
        return [
          <GridActionsCellItem
            key={"edit"}
            icon={<EditIcon />}
            label="Edit"
            onClick={() => {
              handleOpen();
              setInitialState({
                _id,
                brandId,
                productId,
                quantity,
                price,
              });
            }}
            sx={btnStyle}
          />,
          <GridActionsCellItem
            key={"delete"}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => deleteStockData("sales", _id)}
            sx={btnStyle}
          />,
        ];
      },
    },
  ];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={sales}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        getRowId={getRowId}
          slots={{
          toolbar: GridToolbar,
        }}
        autoHeight
        pageSizeOptions={[5, 10, 15, 20, 25, 50]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  )
}

export default SalesTable