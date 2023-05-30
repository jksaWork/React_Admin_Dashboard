import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { ordersData, ordersGrid } from "../data/index";
import { Header } from "../components";

//nested data is ok, see accessorKeys in ColumnDef below
const data = ordersData;

const Example = () => {
  //should be memoized or stable
  const columns = useMemo(() => ordersGrid, []);

  return (
    <div className="mt-6 ">
      <Header title="Orders" />
      <MaterialReactTable columns={columns} data={data} />
    </div>
  );
};

export default Example;
