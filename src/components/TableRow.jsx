import React, { useContext, useState } from "react";
import { MatrixContext } from "../context/MatrixContextProvider.jsx";
import { TableCell } from "./TableCell.jsx";

export const TableRow = ({ i, row }) => {
  const { rowsSum, dispatch } = useContext(MatrixContext);
  const [rowHovered, setRowHovered] = useState(false);
  return (
    <tr key={i}>
      {row.map((col, j) => {
        return (
          <TableCell
            className={rowHovered ? "percentage" : undefined}
            key={j}
            val={
              rowHovered
                ? Math.round((col.amount / rowsSum[i]) * 100) + "%"
                : col.amount
            }
            symbol={col.id}
            i={i}
            j={j}
            mainTableCell={true}
          />
        );
      })}
      <TableCell
        className="aside"
        val={rowsSum[i]}
        setRowHovered={setRowHovered}
      />
      <button
        onClick={() =>
          dispatch({ type: "DELETE_ROW", payload: { rowToDel: i } })
        }
      >
        delete row
      </button>
    </tr>
  );
};
