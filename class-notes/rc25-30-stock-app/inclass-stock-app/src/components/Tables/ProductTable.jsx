import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import useStockCall from '../../hooks/useStockCall';
import { btnStyle } from '../../styles/globalStyle';

// Burayı return üstüne aldık!
// const columns = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   {
//     field: 'categoryId',
//     headerName: 'Category',
//     width: 150,
//     // editable: true,
//     valueGetter: (value,row)=> value?.name ?? "-NoCategory-"
//   },
//   {
//     field: 'brandId',
//     headerName: 'Brand',
//     width: 150,
//     // editable: true,
//     // valueGetter: (value,row)=> value?.name
//     valueGetter: (value,row)=> value?.name ?? "-NoBrand-"
//   },
//   {
//     field: 'name',
//     headerName: 'Product Name',
//     width: 110,
//     // editable: true,
//   },
//   {
//     field: 'quantity',
//     headerName: 'Stock',
//     type: 'number',
//     width: 110,
//     // editable: true,
//   },
//   {
//     field: 'actions',
//     headerName: 'Action',
//     // description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,    
//     renderCell: (params) => (
//         <DeleteOutlineIcon onClick={()=>deleteStockData("products", params.id)}/>
//         // console.log(params)
        
//     )
//   },
// ];

// const rows = [
//   { _id: 1, lastName: 'Snow', category: 'Jon', age: 14 },
//   { id: 2, lastName: 'Lannister', category: 'Cersei', age: 31 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

function getRowId(row) {
    return row._id;
    // console.log(row);    
}

export default function ProductTable() {

    const {products} = useSelector(state=>state.stock)

    // const newProducts = products 'da yapılabilir.

    const {deleteStockData} = useStockCall()

    const columns = [
        { field: '_id', headerName: 'ID', minWidth: 40,
          minxWidth: 70,
          headerAlign: "center",
          align: "center",
          flex: 0.8, },
        {
          field: 'categoryId',
          headerName: 'Category',
          headerAlign: "center",
          align: "center",
          minWidth: 120,
          editable: false,
          flex: 2,
          // editable: true,
          valueGetter: (value)=> value?.name ?? "-NoCategory-"
        },
        {
          field: 'brandId',
          headerName: 'Brand',
          minWidth: 120,
          headerAlign: "center",
          align: "center",
          flex: 2,
          editable: false,
          // editable: true,
          // valueGetter: (value,row)=> value?.name
          valueGetter: (value)=> value?.name ?? "-NoBrand-"
        },
        {
          field: 'name',
          headerName: 'Product Name',
          minWidth: 110,
          headerAlign: "center",
          align: "center",
          flex: 2,
          editable: false,
          // editable: true,
        },
        {
          field: 'quantity',
          headerName: 'Stock',
          type: 'number',
          minWidth: 100,
          headerAlign: "center",
          align: "center",
          flex: 2,
          editable: false,
          // editable: true,
        },
        {
          field: 'actions',
          headerName: 'Action',
          // description: 'This column has a value getter and is not sortable.',
          sortable: false,
          minWidth: 90,
          headerAlign: "center",
          align: "center",
          flex: 2,
          editable: false,    
          renderCell: (params) => (
              <DeleteOutlineIcon onClick={()=>deleteStockData("products", params.id)} sx={btnStyle}/>
              // console.log(params)              
          )
        },
    ];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        autoHeight
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        getRowId={getRowId}
        pageSizeOptions={[5, 10, 15, 20]}
        // checkboxSelection
        disableRowSelectionOnClick
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </Box>
  );
}
