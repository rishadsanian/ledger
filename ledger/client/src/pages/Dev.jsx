import React, { useState, useEffect } from 'react';
import '../styles/tailwind.css';

const Dev = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Use saved mode if exists, otherwise use system preference
    const initialMode = savedMode ? savedMode === 'true' : systemPrefersDark;
    
    setDarkMode(initialMode);
    document.documentElement.classList.toggle('dark', initialMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <div className={`page-full ${darkMode ? 'dark' : ''} bg-pri dark:bg-gray-900 flex flex-col items-center p-4 min-h-screen`}>
      {/* Header */}
      <header className="page-header w-full py-4 border-b border-pri dark:border-gray-700 bg-sec dark:bg-gray-800">
        <h1 className="heading-1 text-brand dark:text-gray-100">Dev Design Reference</h1>
      </header>

      {/* Main Content */}
      <main className="main-content grid-layout section-padding">
        {/* Card Example */}
        <div className="card dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4">
            <h3 className="card-title dark:text-gray-100">Card Title</h3>
            <p className="card-subtitle mt-2 dark:text-gray-300">
              This is a sample card subtitle.
            </p>
            <p className="text-sec mt-1 dark:text-gray-400">
              Current mode: {darkMode ? 'Dark' : 'Light'}
            </p>
            <div className="flex justify-end mt-4">
              <button className="btn-primary dark:bg-gray-700 dark:text-gray-100">
                Action
              </button>
            </div>
          </div>
        </div>

        {/* List Example */}
        <div className="panel dark:bg-gray-800 dark:border-gray-700">
          <h3 className="heading-3 dark:text-gray-100 p-4 border-b border-pri dark:border-gray-700">List Items</h3>
          <ul className="list">
            {[1, 2, 3].map((item) => (
              <li key={item} className="list-item dark:bg-gray-700">
                <span className="text-pri dark:text-gray-200">Item {item}</span>
                <div className="flex space-x-2">
                  <span className="icon-edit">Edit</span>
                  <span className="icon-delete">Delete</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons Example */}
        <div className="panel dark:bg-gray-800 dark:border-gray-700">
          <h3 className="heading-3 dark:text-gray-100 p-4 border-b border-pri dark:border-gray-700">Buttons</h3>
          <div className="p-4 space-y-3">
            <button className="btn-primary w-full">Primary Button</button>
            <button className="btn-secondary w-full dark:text-gray-100">Secondary Button</button>
            <div className="flex justify-center space-x-4 mt-4">
              <span className="icon-add">Add</span>
              <span className="icon-save">Save</span>
              <span className="icon-delete">Delete</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="page-footer w-full py-4 border-t border-pri dark:border-gray-700 bg-sec dark:bg-gray-800 text-sec dark:text-gray-400 text-sm text-center">
        Page Footer - {darkMode ? 'Dark' : 'Light'} Mode Active
      </footer>

     
    </div>
  );
};

export default Dev;