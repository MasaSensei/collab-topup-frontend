import React from "react";
import { TableHeader, TableCell } from "../../organism";

const MainTable = (props) => {
  const { titles, users } = props;
  return (
    <table className="w-full">
      <TableHeader tableTitle={titles} />
      <tbody>
        {users.map((user, index) => (
          <tr className="text-gray-700" key={index}>
            {titles.map((title, index) => (
              <TableCell key={index} head={title} isi={user} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MainTable;
