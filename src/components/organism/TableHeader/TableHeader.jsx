import React from "react";

const TableHeader = ({ tableTitle }) => {
  return (
    <thead>
      <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
        {tableTitle.map((title, index) => {
          return (
            <th key={index} className="px-4 py-3">
              {title.label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
