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
      <Header title="customers" />
      <MaterialReactTable
        columns={columns}
        data={data}
        enableRowSelection
        //passing the static object variant if no dynamic logic is needed
        muiSelectCheckboxProps={{
          color: "secondary", //makes all checkboxes use the secondary color
        }}
      />
    </div>
  );
};

export default Example;
