import React, { useState } from "react";
import api from "../api/apiMain";

const ApiPortal = () => {
  const [activeEndpoint, setActiveEndpoint] = useState("accounts.getAll");
  const [accountId, setAccountId] = useState("");
  const [parentAccountId, setParentAccountId] = useState("");
  const [accountData, setAccountData] = useState({
    name: "Sample Account",
    type: "D",
    master_account: "10-1001-0000",
  });
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const endpoints = [
    { value: "accounts.getAll", label: "Get All Accounts" },
    { value: "accounts.getById", label: "Get Account by ID", needsId: true },
    { value: "accounts.create", label: "Create Account", needsData: true },
    {
      value: "accounts.update",
      label: "Update Account",
      needsId: true,
      needsData: true,
    },
    { value: "accounts.delete", label: "Delete Account", needsId: true },
    {
      value: "accounts.getSubAccounts",
      label: "Get Sub-Accounts",
      needsParentId: true,
    },
    {
      value: "accounts.createSubAccount",
      label: "Create Sub-Account",
      needsParentId: true,
      needsData: true,
    },
    { value: "classes.getAll", label: "Get All Classes" },
  ];

  const testEndpoint = async () => {
    setLoading(true);
    setResponse(null);

    try {
      let result;
      const [module, method] = activeEndpoint.split(".");

      switch (activeEndpoint) {
        case "accounts.getById":
          result = await api.accounts.getById(accountId);
          break;
        case "accounts.create":
          result = await api.accounts.create(accountData);
          break;
        case "accounts.update":
          result = await api.accounts.update(accountId, accountData);
          break;
        case "accounts.delete":
          result = await api.accounts.delete(accountId);
          break;
        case "accounts.getSubAccounts":
          result = await api.accounts.getSubAccounts();
          break;
        case "accounts.getSubAccountsFor":
          result = await api.accounts.getSubAccountsFor(parentAccountId);
          break;
        case "accounts.createSubAccount":
          result = await api.accounts.createSubAccount(
            parentAccountId,
            accountData
          );
          break;
        default:
          result = await api[module][method]();
      }

      setResponse(result);
    } catch (error) {
      setResponse({
        error: error.message,
        ...(error.response?.data && { details: error.response.data }),
      });
    } finally {
      setLoading(false);
    }
  };

  const currentEndpoint = endpoints.find((e) => e.value === activeEndpoint);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">API Testing Tool</h1>

      <div className="mb-6">
        <label className="block mb-2 font-medium">Select Endpoint:</label>
        <select
          value={activeEndpoint}
          onChange={(e) => setActiveEndpoint(e.target.value)}
          className="w-full p-2 border rounded"
        >
          {endpoints.map((endpoint) => (
            <option key={endpoint.value} value={endpoint.value}>
              {endpoint.label}
            </option>
          ))}
        </select>
      </div>

      {currentEndpoint.needsId && (
        <div className="mb-4">
          <label className="block mb-2 font-medium">Account ID:</label>
          <input
            type="text"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter account ID"
          />
        </div>
      )}

      {currentEndpoint.needsParentId && (
        <div className="mb-4">
          <label className="block mb-2 font-medium">Parent Account ID:</label>
          <input
            type="text"
            value={parentAccountId}
            onChange={(e) => setParentAccountId(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter parent account ID"
          />
        </div>
      )}

      {currentEndpoint.needsData && (
        <div className="mb-4">
          <label className="block mb-2 font-medium">Account Data:</label>
          <textarea
            value={JSON.stringify(accountData, null, 2)}
            onChange={(e) => {
              try {
                setAccountData(JSON.parse(e.target.value));
              } catch {}
            }}
            className="w-full h-32 p-2 border rounded font-mono text-sm"
            spellCheck="false"
          />
          <div className="mt-1 text-sm text-gray-500">
            Sample:{" "}
            {
              '{"name":"Account Name","type":"D","master_account":"10-1001-0000"}'
            }
          </div>
        </div>
      )}

      <button
        onClick={testEndpoint}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Testing...
          </span>
        ) : (
          "Test Endpoint"
        )}
      </button>

      {response && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Response:</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ApiPortal;
