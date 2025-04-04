import axios from "axios";

// Base API configuration
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:3000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// API endpoints configuration
const endpoints = {
  classes: {
    getAll: "/accounts/classes",
  },
  accounts: {
    getAll: "/accounts",
    getById: (id) => `/accounts/${id}`,
    create: "/accounts",
    update: (id) => `/accounts/${id}`,
    delete: (id) => `/accounts/${id}`,
    getSubAccounts: () => `/accounts/sub-accounts`,
    createSubAccount: (parentId) => `/accounts/${parentId}/sub-accounts`,
    getSubAccountsFor: (parentAccountId) => `/accounts/${parentAccountId}/sub-accounts`,
    getChartofAccounts: `/accounts/chart-of-accounts`,
  },
};

// Generic request handler
const request = async (method, url, data = null, config = {}) => {
  try {
    const response = await apiClient.request({
      method,
      url,
      data,
      ...config,
    });
    return response.data;
  } catch (error) {
    console.error(`API Error [${method} ${url}]:`, error.response?.data || error.message);
    throw error;
  }
};

// API methods
const api = {
  classes: {
    getAll: async () => request("GET", endpoints.classes.getAll),
  },
  accounts: {
    getAll: async () => request("GET", endpoints.accounts.getAll),
    getById: async (id) => request("GET", endpoints.accounts.getById(id)),
    create: async (accountData) => request("POST", endpoints.accounts.create, accountData),
    update: async (id, accountData) => request("PUT", endpoints.accounts.update(id), accountData),
    delete: async (id) => request("DELETE", endpoints.accounts.delete(id)),
    getSubAccounts: async (parentId) => request("GET", endpoints.accounts.getSubAccounts(parentId)),
    createSubAccount: async (parentId, subAccountData) => 
      request("POST", endpoints.accounts.createSubAccount(parentId), subAccountData),
  },
  request: async (method, url, data = null, config = {}) => {
    return request(method, url, data, config);
  }
};

export default api;