// MainAccount.js
import React from "react";
import CreateEntries from "./CreateEntries";


const MainEntries = () => {
  return (
    <div className="flex flex-col overflow-hidden "> 
      <div className="text-2xl mb-4 py-2 px-3"> Entries</div>
      <div className="flex flex-wrap items-start bg-gray-100 min-h-screen flex bg-gray-100">

        <div className="flex justify-center w-full p-8">
            <CreateEntries />
        </div>
      </div>
    </div>
  );
};

export default MainEntries;
