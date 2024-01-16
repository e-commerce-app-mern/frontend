import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";

type OrdersDataType = {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};

const column: Column<OrdersDataType>[] = [
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

export default function Orders() {
  const [rows] = useState<OrdersDataType[]>([
    {
      _id: "akfjaksfjsjtrdfasaga",
      amount: 45454,
      quantity: 40,
      discount: 10000,
      status: <span className="red">Processing</span>,
      action: <Link to={`/order/akfjaksfjsjtrdfasaga`}>View</Link>,
    },
  ]);

  const Table = TableHOC<OrdersDataType>(
    column,
    rows,
    "dashboard-product-box",
    "Orders",
    rows.length > 6
  )();
  return (
    <div className="container">
      <h1>My Orders</h1>
      {Table}
    </div>
  );
}
