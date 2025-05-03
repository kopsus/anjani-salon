import PageHeader from "@/components/dashboard/page-header";
import { ColumnsService } from "@/components/table/service/Columns";
import { DataTable } from "@/components/table/service/DataTable";
import prisma from "@/lib/prisma";
import React from "react";

const page = async () => {
  const services = await prisma.service.findMany();

  return (
    <>
      <PageHeader title="Services" />
      <DataTable title="Services" data={services} columns={ColumnsService} />
    </>
  );
};

export default page;
