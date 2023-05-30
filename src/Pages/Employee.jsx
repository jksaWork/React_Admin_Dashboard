import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { employeesData, employeesGrid } from "../data/index";
import { Header } from "../components";

//nested data is ok, see accessorKeys in ColumnDef below
const data = employeesData;

const Example = () => {
  //should be memoized or stable
  const columns = useMemo(() => employeesGrid, []);

  return (
    <div className="mt-6">
      <Header title="Emplyoees" />
      <MaterialReactTable columns={columns} data={data} />
    </div>
  );
};

export default Example;
