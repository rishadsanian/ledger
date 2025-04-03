import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import moment from "moment";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

 

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  // Placeholder data
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

  // Chart data
  const incomeChartData = {
    labels: incomeData.map((data) => data.label),
    datasets: [
      {
        label: "Income",
        data: incomeData.map((data) => data.amount),
        backgroundColor: darkMode ? "rgba(75, 192, 192, 0.6)" : "rgba(75, 192, 192, 0.2)",
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
        backgroundColor: darkMode ? "rgba(255, 99, 132, 0.6)" : "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: darkMode ? '#E5E7EB' : '#374151',
        }
      },
      x: {
        grid: {
          color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: darkMode ? '#E5E7EB' : '#374151',
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: darkMode ? '#E5E7EB' : '#374151',
        }
      }
    }
  };

  // Company information
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
      tickerChangePrice: 34,
      tickerChangePercent: function () {
        return ((this.tickerChangePrice / this.stockprice) * 100).toFixed(2);
      },
      updated: "2021-10-01T09:30:00",
    },
  };

  return (
    <div className="page-full bg-pri dark:bg-gray-900 p-4 min-h-screen">
      {/* Dark Mode Toggle */}
      <button 
        className="fixed bottom-4 right-4 btn-primary dark:bg-gray-700 z-50"
        onClick={toggleDarkMode}
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      {/* Company Information */}
      <div className="mb-6">
        <h1 className="heading-1 text-brand dark:text-gray-100 mb-2">{companyInfo.name}</h1>
        {companyInfo.listed && (
          <div className="text-sec dark:text-gray-300 mb-2 flex items-center">
            <span className="text-lg mr-2">{companyInfo.stock.ticker}</span>
            <span className={`flex items-center ${
              companyInfo.stock.tickerChangePrice > 0 
                ? "text-green-600 dark:text-green-400" 
                : "text-red-500 dark:text-red-400"
            }`}>
              {companyInfo.stock.tickerChangePrice > 0 ? '+' : ''}
              {companyInfo.stock.tickerChangePrice.toFixed(2)}
              ({companyInfo.stock.tickerChangePercent()}%)
              {companyInfo.stock.tickerChangePrice > 0 ? (
                <i className="fas fa-caret-up ml-1"></i>
              ) : (
                <i className="fas fa-caret-down ml-1"></i>
              )}
            </span>
          </div>
        )}
      </div>

      {/* Company Details */}
      <div className="grid-layout mb-6">
        <div className="card">
          <h3 className="card-title">Industry</h3>
          <p className="card-subtitle">{companyInfo.industry}</p>
        </div>
        <div className="card">
          <h3 className="card-title">Address</h3>
          <p className="card-subtitle">{companyInfo.address}</p>
        </div>
        <div className="card">
          <h3 className="card-title">Employees</h3>
          <p className="card-subtitle">{companyInfo.totalEmployees}</p>
        </div>
        <div className="card">
          <h3 className="card-title">Founded</h3>
          <p className="card-subtitle">{companyInfo.foundingYear}</p>
        </div>
      </div>

      {/* Financial Overview */}
      <h2 className="heading-1 text-brand dark:text-gray-100 mb-4 mt-8">Financial Overview</h2>

      {/* Metrics */}
      <div className="grid-layout mb-6">
        <div className="card">
          <h3 className="card-title">Total Income</h3>
          <p className="text-green-600 dark:text-green-400 text-xl font-bold">
            ${incomeData.reduce((total, data) => total + data.amount, 0).toFixed(2)}
          </p>
        </div>
        <div className="card">
          <h3 className="card-title">Total Expenses</h3>
          <p className="text-red-500 dark:text-red-400 text-xl font-bold">
            ${expensesData.reduce((total, data) => total + data.amount, 0).toFixed(2)}
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid-layout">
        <div className="card">
          <h3 className="card-title">Income</h3>
          <Bar data={incomeChartData} options={chartOptions} />
        </div>
        <div className="card">
          <h3 className="card-title">Expenses</h3>
          <Bar data={expensesChartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;