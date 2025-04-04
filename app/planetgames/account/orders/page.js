"use client";

import { Title } from "../../components/shared/Title";
import { Table } from "../../components/Table";
import useWithAuth from "../../_authRouter";
import { useGetOrders } from "../../../../roupi/order";
import { useStateContext } from "../../context/contextProvider";
import { Chat } from "../../page";

// Orders component
 function Orders() {
  const { orders } = useGetOrders();
  const { profile } = useStateContext();

  return (
    <>
      <section className="flex pt-16 min-h-[70vh] w-full flex-col text-gray-900 items-center justify-center">
        <Title text="Orders Managment" />
        <div className="p-16 min-h-[60vh] flex flex-wrap gap-16 items-center justify-center">
          <Table data={orders} />
        </div>
      </section>
      {profile?.id && <Chat />}
    </>
  );
}

// Apply the HOC directly and export it
export default useWithAuth(Orders);
