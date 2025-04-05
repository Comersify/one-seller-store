"use client";


function Orders() {
  // 🔧 البيانات هنا مباشرة داخل الكومبوننت
  const orders = [
    { id: 1, productName: "Product A", prix: "$100", status: "Shipped", date: "2025-03-29" },
    { id: 2, productName: "Product B", prix: "$200", status: "Pending", date: "2025-03-28" },
    { id: 3, productName: "Product C", prix: "$150", status: "Delivered", date: "2025-03-27" },
  ];

  return (
    <>
      <section className="flex pt-16 min-h-[70vh] w-full flex-col  text-gray-900 items-center justify-center">
       
       
          <div className="container mx-auto p-4">
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-primary text-primary"
                    >
                      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                      <path d="M12 22V12"></path>
                      <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path>
                      <path d="m7.5 4.27 9 5.15"></path>
                    </svg>
                    <span className="text-primary font-bold text-primary">My Orders</span>
                  </h1>
                  <p className="text-gray-600 mt-1">Track and manage all your orders in one place</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm overflow-x-auto">
              <table className="w-full min-w-[400px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 border">ID</th>
                    <th className="px-4 py-2 border">Product Name</th>
                    <th className="px-4 py-2 border">Prix</th>
                    <th className="px-4 py-2 border">Status</th>
                    <th className="px-4 py-2 border">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="text-center border-b hover:bg-gray-50">
                      <td className="px-4 py-2 border">{order.id}</td>
                      <td className="px-4 py-2 border">{order.productName}</td>
                      <td className="px-4 py-2 border">{order.prix}</td>
                      <td
                        className={`px-4 py-2 border font-semibold ${
                          order.status === "Shipped"
                            ? "text-blue-500"
                            : order.status === "Pending"
                            ? "text-yellow-500"
                            : "text-green-500"
                        }`}
                      >
                        {order.status}
                      </td>
                      <td className="px-4 py-2 border">{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
     
      </section>
    </>
  );
}

export default Orders;
