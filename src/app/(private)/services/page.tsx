import PageHeader from "@/components/dashboard/page-header";
import { ColumnsService } from "@/components/table/service/Columns";
import { DataTable } from "@/components/table/service/DataTable";
import { dataService } from "@/data/services";
import React from "react";

const page = () => {
  return (
    <>
      <PageHeader title="Services" />
      <DataTable title="Services" data={dataService} columns={ColumnsService} />
    </>
  );
};

export default page;
