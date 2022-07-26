import * as React from "react";
import { useState } from "react";
//Components
import Table from "../../molecule/table/Table";
import TransactionRow from "./TransactionRow";
//scss
import "./scss/tableTransactionStyle.scss";
//icon resource
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const columns = [
  { field: "date", headerName: "Date" },
  { field: "tripId", headerName: "Trip ID" },
  { field: "payment", headerName: "Payment" },
  { field: "amount", headerName: "Amount" },
  { field: "customer", headerName: "Customer" },
  { field: "driverDetail", headerName: "Driver Detail" },
  { field: "status", headerName: "Status" },
  { field: "action", headerName: "Action" },
];

const rows = [
  {
    id: 1,
    date: "Today 5:15pm",
    tripId: 23546981,
    payment: "Card",
    amount: "N100",
    customer: "Snow",
    driverDetail: "Jon",
    status: "Completed",
    img: "https://images.unsplash.com/photo-1652689994482-b4786af5cc2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    action: <MoreHorizIcon />,
  },
  {
    id: 2,
    date: "Today 10:55pm",
    tripId: 25987136,
    payment: "Cash",
    amount: "N100",
    customer: "Lannister",
    driverDetail: "Cersei",
    status: "Cancelled",
    img: "https://images.unsplash.com/photo-1653471450366-989194f085c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    action: <MoreHorizIcon />,
  },
  {
    id: 3,
    date: "Yesterday 5:15pm",
    tripId: 32147269,
    payment: "Card",
    amount: "N100",
    customer: "Lannister",
    driverDetail: "Jaime",
    status: "Completed",
    img: "https://images.unsplash.com/photo-1653508036272-a3c11c6d5d8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    action: <MoreHorizIcon />,
  },
  {
    id: 4,
    date: "Wednesday 11:10am",
    tripId: 43697540,
    payment: "Cash",
    amount: "N100",
    customer: "Stark",
    driverDetail: "Arya",
    status: "In Progress",
    img: "https://images.unsplash.com/photo-1653457977825-955fc12ce58d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    action: <MoreHorizIcon />,
  },
  {
    id: 5,
    date: "Tuesday 4:11pm",
    tripId: 53690478,
    payment: "Wallet",
    amount: "N100",
    customer: "Targaryen",
    driverDetail: "Daenerys",
    status: "Completed",
    img: "https://images.unsplash.com/photo-1623113562048-627016402138?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    action: <MoreHorizIcon />,
  },
  {
    id: 6,
    date: "Monday 5:15pm",
    tripId: 69445202,
    payment: "Card",
    amount: "N100",
    customer: "Melisandre",
    driverDetail: "Mark",
    status: "Cancelled",
    img: "https://images.unsplash.com/photo-1649214489153-88e679a6f7be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    action: <MoreHorizIcon />,
  },
  {
    id: 7,
    date: "14/07/2021",
    tripId: 73697841,
    payment: "Cash",
    amount: "N100",
    customer: "Clifford",
    driverDetail: "Ferrara",
    status: "In Progress",
    img: "https://images.unsplash.com/photo-1651420549140-8cecfdd0bc9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    action: <MoreHorizIcon />,
  },
  {
    id: 8,
    date: "12/05/2021",
    tripId: 15896128,
    payment: "Card",
    amount: "N100",
    customer: "Frances",
    driverDetail: "Rossini",
    status: "Completed",
    img: "https://images.unsplash.com/photo-1651568805451-8a7525820a98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    action: <MoreHorizIcon />,
  },
  {
    id: 9,
    date: "06/02/2021",
    tripId: 12678239,
    payment: "Wallet",
    amount: "N100",
    customer: "Roxie",
    driverDetail: "Harvey",
    status: "Completed",
    img: "https://images.unsplash.com/photo-1651568805451-8a7525820a98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    action: <MoreHorizIcon />,
  },
];

export default function TableTransactions() {
  const [tableRow, setTableRow] = useState(rows);
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState("Recent");
  const [isActive, setIsActive] = useState(false);
  //const keys = ['date', 'tripId', 'payment', 'amount', 'customer', 'driverDetail', 'status'];
  const search = (data) => {
    return data.filter(
      (item) =>
        item.date.toLowerCase().includes(query) ||
        item.tripId.toString().toLowerCase().includes(query) ||
        item.payment.toLowerCase().includes(query) ||
        item.amount.toString().toLowerCase().includes(query) ||
        item.customer.toLowerCase().includes(query) ||
        item.driverDetail.toString().toLowerCase().includes(query) ||
        item.status.toLowerCase().includes(query)
    );
  };
  const sorting = (field, ordr) => {
    const sorted =
      ordr === "Recent"
        ? [...tableRow].sort((a, b) => a[field] - b[field])
        : ordr === "Older"
        ? [...tableRow].reverse()
        : tableRow;
    setTableRow(sorted);
    setOrder(ordr);
  };

  return (
    <div className="tableContainer">
      <div className="title">
        <h1>Transactions</h1>
        <div className="actionButton">
          <div className="filter">
            <label for="search">
              <input
                autoComplete="on"
                type="text"
                id="search"
                placeholder="Search..."
                onChange={(event) => setQuery(event.target.value)}
              />
              <FilterListIcon />
              <span>Filter</span>
            </label>
          </div>
          <div className="sort">
            <button className="bordered" onClick={() => setIsActive(!isActive)}>
              <span>{order}</span>
              <KeyboardArrowDownIcon className="icon" />
            </button>
            {isActive && (
              <ul>
                <li
                  onClick={
                    order === "Recent" ? false : () => sorting("id", "Recent")
                  }
                >
                  Recent
                </li>
                <li
                  onClick={
                    order === "Older" ? false : () => sorting("id", "Older")
                  }
                >
                  Older
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      {
        <Table
          order={order}
          rows={search(tableRow)}
          columns={columns}
          title="Transaction"
          RenderedRow={TransactionRow}
        />
      }
    </div>
  );
}
//<MoreHorizIcon fontSize='large' className='moreIcon'/>
