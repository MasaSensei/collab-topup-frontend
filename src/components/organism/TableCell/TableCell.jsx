import React from "react";

const TableCell = (props) => {
  const { head, isi } = props;
  console.log(head);
  console.log(isi);
  switch (head.type) {
    case "userInfo":
      return (
        <td key={head} className={`px-4 py-3 border`}>
          <div className="flex items-center text-sm">
            <div className="relative w-8 h-8 mr-3 rounded-full md:block">
              <img
                className="object-cover w-full h-full rounded-full"
                src={isi.multivalue[0]}
                alt=""
                loading="lazy"
              />
              <div
                className="absolute inset-0 rounded-full shadow-inner"
                aria-hidden="true"
              ></div>
            </div>
            <div>
              <p className="font-semibold text-black">{isi.multivalue[1]}</p>
              <p className="text-xs text-gray-600">{isi.multivalue[2]}</p>
            </div>
          </div>
        </td>
      );
    default:
      return <td className={`px-4 py-3 text-sm border`}>{isi[head.value]}</td>;
  }
};

export default TableCell;
