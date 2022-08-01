import * as React from 'react';
//orgaism
import Table from '../../molecule/table/Table';
import DriverRow from './DriverRow';
//scss
import './scss/tableDriversStyle.scss';
alert(1)
const columns = [
  { field: 'id', headerName: '#',},
  { field: 'driverDetail', headerName: 'Driver Detail', },
  { field: 'status', headerName: 'Status', },
  { field: 'contact', headerName: 'Contact',},
  { field: 'ridesToday', headerName: 'Rides Today',}
];

const rows = [
  { id: '01.', contact: '0803-239-0293', driverDetail: 'Jon', status: 'Active', ridesToday: '120',
   img: 'https://images.unsplash.com/photo-1652689994482-b4786af5cc2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'},
  {  id: '02.', contact: '0803-239-0291', driverDetail: 'Cersei', status: 'Active', ridesToday: '9',
    img: 'https://images.unsplash.com/photo-1653471450366-989194f085c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
  { id: '03.', contact: '0803-239-0291', driverDetail: 'Jaime', status: 'Inactive', ridesToday: '36',
   img: 'https://images.unsplash.com/photo-1653508036272-a3c11c6d5d8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'},
  { id: '04.', contact: '0803-239-0291', driverDetail: 'Arya', status: 'Offline', ridesToday: '18',
    img: 'https://images.unsplash.com/photo-1653457977825-955fc12ce58d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'},
  { id: '05.', contact: '0803-239-0291', driverDetail: 'Daenerys', status: 'Delivering', ridesToday: '10',
    img: 'https://images.unsplash.com/photo-1623113562048-627016402138?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
  {  id: '06.', contact: '0803-239-0291', driverDetail: 'Mark', status: 'Pickup', ridesToday: '325',
    img: 'https://images.unsplash.com/photo-1649214489153-88e679a6f7be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
  { id: '07.', contact: '0803-239-0291', driverDetail: 'Ferrara', status: 'Delivering', ridesToday: '1122',
    img: 'https://images.unsplash.com/photo-1651420549140-8cecfdd0bc9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'},
  { id: '08.', contact: '0803-239-0291', driverDetail: 'Rossini', status: 'Pickup', ridesToday: '1223',
    img: 'https://images.unsplash.com/photo-1651568805451-8a7525820a98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'},
  { id: '09.', contact: '0803-239-0291', driverDetail: 'Harvey', status: 'Offline', ridesToday: '17',
    img: 'https://images.unsplash.com/photo-1651568805451-8a7525820a98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'},
];

export default function TableDrivers() {
  return (
    <div className='tableContainer'>
      <div className='title'>
        <h1>Drivers</h1>
      </div>
      <Table rows={rows} columns={columns} title={'Drivers'} RenderedRow={DriverRow}/>
    </div>
  )
}
//<MoreHorizIcon fontSize='large' className='moreIcon'/>
// <Table rows={rows} columns={columns} title={'Drivers'}/>
/** const columns = [
  { field: 'id','0 .'headerName: '#'},
  {
    field: 'driverDetail', headerName: 'Driver Detail',
    renderCell: (params) => {
          if((params.row.status === 'Active' )|| (params.row.status === 'Delivering') || (params.row.status === 'Pickup')){
              return(
                <div className='driverContainer'>
                    <Badge color="success" overlap="circular" badgeContent=" " variant='dot' anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                        }}>
                 {params.row.img} alt="" className='driverImg driver'/>
                    </Badge>
                    <span className='name'>{params.row.driverDetail}</span>            </div>
              )
          }else{
            return(
              <div className='driverContainer'>
            {params.row.img} alt="" className='driverImg driver'/>
                  <span className='name'>{params.row.driverDetail}</span>
              </div>
                  }
              
  }
  },
  { field: 'status', headerName: 'Status',
      renderCell:(params)=>{
        if(params.row.status === 'Active'){ 
          return <span style={{color: '#4ECD5B', fontWeight:'bold'}}>{params.row.status}</span>
        }
        if(params.row.status === 'Delivering'){ 
            return <span style={{color: '#4ECD5B', fontWeight:'bold'}}>{params.row.status}</span>
          }
        if(params.row.status === 'Inactive'){ 
          return <span style={{color: '#F85D5D', fontWeight:'bold'}}>{params.row.status}</span>
        }
        if(params.row.status === 'Pickup'){ 
          return <span style={{color: '#0251E1', fontWeight:'bold'}}>{params.row.status}</span>
        }
        if(params.row.status === 'Offline'){ 
            return <span style={{color: '#000', fontWeight:'bold'}}>{params.row.status}</span>
          }
      }
  },
  { field: 'contact', headerName: 'Contact'},
  { field: 'ridesToday', headerName: 'Rides Today'}
];

const rows = [
  { id: '01.', contact: '0803-239-0293', driverDetail: 'Jon', status: 'Active', ridesToday: '120',
   img: 'https://images.unsplash.com/photo-1652689994482-b4786af5cc2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', 
   },
  {  id: '02.', contact: '0803-239-0291', driverDetail: 'Cersei', status: 'Active', ridesToday: '9',
    img:'https://images.unsplash.com/photo-1653471450366-989194f085c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
   },
  { id: '03.', contact: '0803-239-0291', driverDetail: 'Jaime', status: 'Inactive', ridesToday: '36',
   img: 'https://images.unsplash.com/photo-1653508036272-a3c11c6d5d8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
   },
  { id: '04.', contact: '0803-239-0291', driverDetail: 'Arya', status: 'Offline', ridesToday: '18',
    img: 'https://images.unsplash.com/photo-1653457977825-955fc12ce58d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
   },
  { id: '05.', contact: '0803-239-0291', driverDetail: 'Daenerys', status: 'Delivering', ridesToday: '10',
    img: 'https://images.unsplash.com/photo-1623113562048-627016402138?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
   },
  {  id: '06.', contact: '0803-239-0291', driverDetail: 'Mark', status: 'Pickup', ridesToday: '325',
    img: 'https://images.unsplash.com/photo-1649214489153-88e679a6f7be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
   },
  { id: '07.', contact: '0803-239-0291', driverDetail: 'Ferrara', status: 'Delivering', ridesToday: '1122',
    img: 'https://images.unsplash.com/photo-1651420549140-8cecfdd0bc9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
   },
  { id: '08.', contact: '0803-239-0291', driverDetail: 'Rossini', status: 'Pickup', ridesToday: '1223',
    img: 'https://images.unsplash.com/photo-1651568805451-8a7525820a98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
   },
  { id: '09.', contact: '0803-239-0291', driverDetail: 'Harvey', status: 'Offline', ridesToday: '17',
    img: 'https://images.unsplash.com/photo-1651568805451-8a7525820a98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
   },
];


 */