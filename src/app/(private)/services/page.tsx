"use client";

import PageHeader from "@/components/dashboard/page-header";
import { ColumnsService } from "@/components/table/service/Columns";
import { DataTable } from "@/components/table/service/DataTable";
import { useServiceStore } from "@/store/serviceStore";
import { useEffect } from "react";

const Services = () => {
  const { services, fetchServices } = useServiceStore();

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  return (
    <>
      <PageHeader title="Services" />
      <DataTable title="Services" data={services} columns={ColumnsService} />
    </>
  );
};

export default Services;
