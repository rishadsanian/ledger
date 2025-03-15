import React from 'react';
import '../styles/tailwind.css'; // Import your Tailwind CSS file

// Card Component
const Card = ({ title, subtitle,  description, level }) => {
  return (
    <div className="card">
      <h3 className={`heading-${level}`}>{title}</h3>
      <p className="text-ter mt-2">{description}</p>
      <button className="btn-primary mt-4">Learn More</button>
    </div>
  );
};

// Dashboard Component
const Dashboard = () => {
  return (
    <div className="section-padding">
      <div className="container-width">
        <h1 className="heading-1">Dashboard</h1>
        <div className="grid-layout mt-8">
          <Card title="Total Revenue" description="$50,000" level="3" />
          <Card title="Total Invoices" description="120" level="3" />
          <Card title="Total Expenses" description="$20,000" level="3" />
          <Card title="Profit" description="$30,000" level="3" />
        </div>
      </div>
    </div>
  );
};

// Invoices Component
const Invoices = () => {
  const invoices = [
    { id: 1, number: "INV-001", amount: "$1,000", status: "Paid" },
    { id: 2, number: "INV-002", amount: "$2,500", status: "Pending" },
    { id: 3, number: "INV-003", amount: "$1,200", status: "Paid" },
  ];

  return (
    <div className="section-padding">
      <div className="container-width">
        <h1 className="heading-1">Invoices</h1>
        <div className="list mt-8">
          {invoices.map((invoice) => (
            <div key={invoice.id} className="list-item">
              <div className="flex items-center">
                <div className="list-item-icon">
                  <i className="fas fa-file-invoice"></i>
                </div>
                <div className="ml-3">
                  <p className="text-gray-600">{invoice.number}</p>
                  <p className="text-gray-600 text-sm">{invoice.amount}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="icon-btn icon-btn-edit">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="icon-btn icon-btn-delete">
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Expenses Component
const Expenses = () => {
  const expenses = [
    { id: 1, description: "Office Supplies", amount: "$500" },
    { id: 2, description: "Travel Expenses", amount: "$1,200" },
    { id: 3, description: "Software Subscriptions", amount: "$300" },
  ];

  return (
    <div className="section-padding">
      <div className="container-width">
        <h1 className="heading-1">Expenses</h1>
        <div className="list mt-8">
          {expenses.map((expense) => (
            <div key={expense.id} className="list-item">
              <div className="flex items-center">
                <div className="list-item-icon">
                  <i className="fas fa-receipt"></i>
                </div>
                <div className="ml-3">
                  <p className="text-gray-600">{expense.description}</p>
                  <p className="text-gray-600 text-sm">{expense.amount}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="icon-btn icon-btn-edit">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="icon-btn icon-btn-delete">
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Reports Component
const Reports = () => {
  const reports = [
    { id: 1, title: "Monthly Revenue Report", date: "Oct 2023" },
    { id: 2, title: "Quarterly Expense Report", date: "Q3 2023" },
    { id: 3, title: "Annual Profit Report", date: "2023" },
  ];

  return (
    <div className="section-padding">
      <div className="container-width">
        <h1 className="heading-1">Reports</h1>
        <div className="list mt-8">
          {reports.map((report) => (
            <div key={report.id} className="list-item">
              <div className="flex items-center">
                <div className="list-item-icon">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <div className="ml-3">
                  <p className="text-gray-600">{report.title}</p>
                  <p className="text-gray-600 text-sm">{report.date}</p>
                </div>
              </div>
              <button className="btn-primary">Download</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// User Management Component
const UserManagement = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Accountant" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "Viewer" },
  ];

  return (
    <div className="section-padding">
      <div className="container-width">
        <h1 className="heading-1">User Management</h1>
        <div className="list mt-8">
          {users.map((user) => (
            <div key={user.id} className="list-item">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="User Avatar"
                  className="user-avatar"
                />
                <div className="ml-3">
                  <p className="text-gray-600">{user.name}</p>
                  <p className="text-gray-600 text-sm">{user.email}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="icon-btn icon-btn-edit">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="icon-btn icon-btn-delete">
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// All-in-One Page
const Dev = () => {
  return (
    <div className="sidebar-layout">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="heading-3">Menu</h2>
        <ul className="mt-4">
          <li className="text-light hover:text-accent transition-colors">Dashboard</li>
          <li className="text-light hover:text-accent transition-colors">Invoices</li>
          <li className="text-light hover:text-accent transition-colors">Expenses</li>
          <li className="text-light hover:text-accent transition-colors">Reports</li>
          <li className="text-light hover:text-accent transition-colors">User Management</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <Dashboard />
        <Invoices />
        <Expenses />
        <Reports />
        <UserManagement />
      </div>
    </div>
  );
};

export default Dev;