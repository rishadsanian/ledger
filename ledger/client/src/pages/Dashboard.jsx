import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Tooltip from '@mui/material/Tooltip';
import moment from "moment";



const Dashboard = () => {
  // Placeholder data for demonstration
  const incomeData = [
    { label: "Sales", amount: 1000 },
    { label: "Services", amount: 500 },
    { label: "Investments", amount: 200 },
  ];

  const expensesData = [
    { label: "Rent", amount: 800 },
    { label: "Utilities", amount: 200 },
    { label: "Supplies", amount: 100 },
  ];

  const incomeChartData = {
    labels: incomeData.map((data) => data.label),
    datasets: [
      {
        label: "Income",
        data: incomeData.map((data) => data.amount),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const expensesChartData = {
    labels: expensesData.map((data) => data.label),
    datasets: [
      {
        label: "Expenses",
        data: expensesData.map((data) => data.amount),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Placeholder company information
  const companyInfo = {
    name: "ABC Corporation",
    address: "123 Main Street, Cityville",
    industry: "Technology",
    totalEmployees: 250,
    foundingYear: 2005,
    listed: true,
    stock: {
      ticker: "ABCC",
      stockprice: 122,
      tickerChangePercent: function () {
        return ((this.tickerChangePrice / this.stockprice) * 100).toFixed(2);
      },
      tickerChangePrice: 34,
      updated: "2021-10-01T09:30:00",
    },
  };

  return (
    <div className="flex flex-col overflow-hidden px-6 py-6">
      {/* Company Information */}
      <div className="mb-6">
        <div className="text-4xl font-bold mb-2">{companyInfo.name}</div>
       {/* TICKER */}
       <div>
          {companyInfo.listed && (
            <div className="text-md text-gray-500 mb-2 flex items-center">
              <div className="flex items-center">
                <span className="ml-1 text-lg ">{companyInfo.stock.ticker}</span>
              </div>

              <Tooltip
                title={`Last Updated: ${moment(companyInfo.stock.updated).format(
                  "MMMM DD, YYYY, hh:mm A"
                )}`}
                arrow
                placement="bottom"
              >
                <div
                  className={`ml-2 flex items-center ${
                    companyInfo.stock.tickerChangePrice > 0
                      ? "text-green-600"
                      : companyInfo.stock.tickerChangePrice < 0
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                >
                  <span className="">
                    {companyInfo.stock.tickerChangePrice > 0 ? "+" : ""}
                    {companyInfo.stock.tickerChangePrice.toFixed(2)}
                  </span>
                  <span className=" ">
                    ({companyInfo.stock.tickerChangePercent()}%)
                  </span>
                  {companyInfo.stock.tickerChangePrice > 0 ? (
                    <span className="text-green-600 ml-1">
                      <i className="fas fa-caret-up"></i>
                    </span>
                  ) : companyInfo.stock.tickerChangePrice < 0 ? (
                    <span className="text-red-500 ml-1">
                      <i className="fas fa-caret-down"></i>
                    </span>
                  ) : (
                    <span className="text-gray-500 ml-1">
                      {/* <i className="fas fa-caret-right"></i> */}
                    </span>
                  )}
                </div>
              </Tooltip>
            </div>
          )}
        </div>
      </div>


      {/* Company Details */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg mb-2">Industry</h2>
          <p>{companyInfo.industry}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg mb-2">Address</h2>
          <p>{companyInfo.address}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg mb-2">Total Employees</h2>
          <p>{companyInfo.totalEmployees}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg mb-2">Founding Year</h2>
          <p>{companyInfo.foundingYear}</p>
        </div>
      </div>

      {/* Financial Overview */}
      <div className="text-2xl font-bold mb-4 mt-8">Financial Overview</div>

      {/* Metrics */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Total Income</h2>
          <p className="text-green-600">
            ${incomeData.reduce((total, data) => total + data.amount, 0).toFixed(2)}
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Total Expenses</h2>
          <p className="text-red-500">
            ${expensesData.reduce((total, data) => total + data.amount, 0).toFixed(2)}
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Income</h2>
          <Bar data={incomeChartData} />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Expenses</h2>
          <Bar data={expensesChartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
